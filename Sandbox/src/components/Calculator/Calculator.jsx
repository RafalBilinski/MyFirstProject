import React, { useState, useEffect } from "react";
import "./Calculator.css";

//Objects with buttons
const numberBtn = [
  { text: ".", id: "decimal" },
  { text: "0", id: "zero" },
  { text: "1", id: "one" },
  { text: "2", id: "two" },
  { text: "3", id: "three" },
  { text: "4", id: "four" },
  { text: "5", id: "five" },
  { text: "6", id: "six" },
  { text: "7", id: "seven" },
  { text: "8", id: "eight" },
  { text: "9", id: "nine" },
];
const fncBtn = [
  { text: "+", id: "add" },
  { text: "-", id: "subtract" },
  { text: "*", id: "multiply" },
  { text: "/", id: "divide" },
];

//----------------------------------------------------------------------
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formulaDisplay: "",
      display: "",
      isDotUsed: false,
      isResultProduced: false,
    };
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleFuncClick = this.handleFuncClick.bind(this);
  }

  componentDidMount() {
    console.log("Calculator mounted");
  }
  componentWillUnmount() {
    console.log("Calculator unmounted");
  }

  //---------------------------------------
  tokenize(expression) {
    const tokens = [];
    const pushSignedTokens = (isNegative, number) => {
      tokens.push(isNegative ? -parseFloat(number) : parseFloat(number));
    };
    let currentNumber = "";
    let isNegative = false;

    for (let charIndex = 0; charIndex < expression.length; charIndex++) {
      const currentChar = expression[charIndex];

      // Handle negative numbers at the beginning or after operators
      if (
        currentChar === "-" &&
        (charIndex === 0 || "+-*/".includes(expression[charIndex - 1])) &&
        "0123456789.".includes(expression[charIndex + 1])
      ) {
        isNegative = true;
        continue;
      }

      if ("0123456789.".includes(currentChar)) {
        currentNumber += currentChar;
      } else if ("+-*/".includes(currentChar)) {
        if (currentNumber !== "") {
          pushSignedTokens(isNegative, currentNumber);
          currentNumber = "";
          isNegative = false;
        }
        tokens.push(currentChar);
      }
    }

    // Don't forget the last number
    if (currentNumber !== "") {
      pushSignedTokens(isNegative, currentNumber);
    }
    console.log(tokens);
    return tokens;
  }

  //---------------------------------------

  calculate(parsedTokens) {
    // First pass: handle multiplication and division
    let tokenIndex = 1;
    while (tokenIndex < parsedTokens.length) {
      if (
        parsedTokens[tokenIndex] === "*" ||
        parsedTokens[tokenIndex] === "/"
      ) {
        let operator = parsedTokens[tokenIndex];
        const leftOperand = parsedTokens[tokenIndex - 1];
        let rightOperand = parsedTokens[tokenIndex + 1];

        let operatorSkipIndex = 0; // Handling multiple operators by skipping them until it finds a number
        while ("+-*/".includes(rightOperand)) {
          operatorSkipIndex++;
          operator = parsedTokens[tokenIndex + operatorSkipIndex];
          rightOperand = parsedTokens[tokenIndex + operatorSkipIndex + 1];
        }

        let operationResult;
        switch (operator) {
          case "*":
            operationResult = leftOperand * rightOperand;
            break;
          case "/":
            operationResult = leftOperand / rightOperand;
            break;
          case "-":
            operationResult = leftOperand - rightOperand;
            break;
          case "+":
            operationResult = leftOperand + rightOperand;
            break;
          default:
            console.log("error");
        }
        console.log(operationResult);
        // Replace the operation with the result
        parsedTokens.splice(
          tokenIndex - 1,
          3 + operatorSkipIndex,
          operationResult
        );
        // Don't increment tokenIndex since we've modified the array
      } else {
        tokenIndex += 2; // Skip to the next operator
      }
    }

    // Second pass: handle addition and subtraction
    let finalResult = parsedTokens[0];
    for (tokenIndex = 1; tokenIndex < parsedTokens.length; tokenIndex += 2) {
      let operator = parsedTokens[tokenIndex];
      while ("+-".includes(parsedTokens[tokenIndex + 1])) {
        tokenIndex++;
      }
      let nextValue = parsedTokens[tokenIndex + 1];

      if (operator === "+") {
        finalResult += nextValue;
      } else if (operator === "-") {
        finalResult -= nextValue;
      }
    }

    return parseFloat(finalResult.toFixed(8));
  }

  handleNumberClick(event, prevState = this.state) {
    const clickedBtnValue = event.target.textContent;
    if (prevState.display === "0") {
      switch (clickedBtnValue) {
        case "0":
          break;

        case ".":
          this.setState({
            display: "0.",
          });
          break;

        default:
          this.setState({
            display: clickedBtnValue,
          });
      }
    } else {
      if (clickedBtnValue === "." && this.state.isDotUsed === false) {
        this.setState({
          display: prevState.display + clickedBtnValue,
          isDotUsed: true,
        });
      } else if (clickedBtnValue !== ".") {
        this.setState({
          display: this.state.display + clickedBtnValue,
        });
      }
      if (prevState.isResultProduced === true) {
        this.setState({
          display: clickedBtnValue,
          isResultProduced: false,
        });
      }
    }
  }

  handleFuncClick(event, prevState = this.state) {
    const clickedBtnValue = event.target.textContent;
    switch (clickedBtnValue) {
      case "AC":
        this.setState({
          formulaDisplay: "",
          display: "",
          isDotUsed: false,
          isResultProduced: false,
        });
        break;
      case "=":
        const tokens = this.tokenize(
          this.state.formulaDisplay + this.state.display
        );
        const result = this.calculate(tokens);
        this.setState({
          formulaDisplay: "",
          display: result,
          isResultProduced: true,
        });
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        this.setState({
          formulaDisplay:
            prevState.formulaDisplay + prevState.display + clickedBtnValue,
          display: "",
          isDotUsed: false,
        });
        break;
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Calculator</h1>
        <div id="calculator">
          <div id="formula-screen"> {this.state.formulaDisplay || "0"}</div>
          <div id="calc-display"> {this.state.display || "0"}</div>
          <div id="buttons" className="calcButtonContainer">
            <div id="ClearEvalBtns">
              <button
                className="ClearEvalBtn"
                id="clear"
                onClick={this.handleFuncClick}
              >
                AC
              </button>
              <button
                className="ClearEvalBtn"
                id="equals"
                onClick={this.handleFuncClick}
              >
                =
              </button>
            </div>
            <div id="btn-Grid">
              <div id="number-Btns">
                {numberBtn.map((number, index) => {
                  return (
                    <button
                      id={number.id}
                      key={index}
                      onClick={this.handleNumberClick}
                    >
                      {number.text}
                    </button>
                  );
                })}
              </div>
            </div>
            <div id="funcBtns">
              {fncBtn.map((fnc, index) => {
                return (
                  <button
                    id={fnc.id}
                    key={index}
                    onClick={this.handleFuncClick}
                  >
                    {fnc.text}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
