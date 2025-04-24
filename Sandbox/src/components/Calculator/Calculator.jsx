import React, { useState, useEffect } from "react";
import "./Calculator.css";

//Objects with buttons
const numberBtn =[
  {text: ".",
  id: "decimal"
  },
  {text: "0",
  id: "zero"
  },
  {text: "1",
  id: "one"
  },
  {text: "2",
  id: "two"
  },
  {text: "3",
  id: "three"
  },
  {text: "4",
  id: "four"
  },
  {text: "5",
  id: "five"
  },
  {text: "6",
  id: "six"
  },
  {text: "7",
  id: "seven"
  },
  {text: "8",
  id: "eight"
  },
  {text: "9",
  id: "nine"
  }  
];
const fncBtn=[
  {text: "+",
  id: "add"
  },
  {text: "-",
  id: "subtract"
  },
  {text: "*",
  id: "multiply"
  },
  {text: "/",
  id: "divide"
  }
];

//----------------------------------------------------------------------
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formulaDisplay: "",
      display: "",
      isDotUsed : false,
      isResultProduced: false
    }    
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleFuncClick = this.handleFuncClick.bind(this);
    
  }
  
  componentDidMount() {
    console.log("calc mounted");
  }
  
  //---------------------------------------
  tokenize(expression) { 
    const tokens = [];
    const pushSignedTokens = (isNegative, number) => {
        tokens.push(isNegative ? -parseFloat(number) : parseFloat(number));
    };
    let currentNumber = '';
    let isNegative = false;
    

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        
        // Handle negative numbers at the beginning or after operators
        if (char === '-' && (i === 0 || '+-*/'.includes(expression[i-1])) && ('0123456789.'.includes(expression[i+1]))) {
        isNegative = true;
        continue;
        }
        
        if ('0123456789.'.includes(char)) {
        currentNumber += char;
        } else if ('+-*/'.includes(char)) {
            if (currentNumber !== '') {
                tokens.push(isNegative ? -parseFloat(currentNumber) : parseFloat(currentNumber));
                currentNumber = '';
                isNegative = false;
            }
        tokens.push(char);
        }
    }
    
    // Don't forget the last number
    if (currentNumber !== '') {
        tokens.push(isNegative ? -parseFloat(currentNumber) : parseFloat(currentNumber));
    }
    console.log(tokens);
    return tokens;
    }
  //---------------------------------------
  
  calculate(tokens) {
  // First pass: handle multiplication and division
  let i = 1;
  while (i < tokens.length) {
    if (tokens[i] === '*' || tokens[i] === '/') {
      let operator = tokens[i];
      const left = tokens[i - 1];
      let right = tokens[i + 1];
     
      let skippingIndex=0;                 //handling multiple operators by skipping them until it finds number
        while('+-*/'.includes(right) ){
          skippingIndex++;
          operator = tokens[i + skippingIndex];
          right = tokens[i + skippingIndex + 1];
        }
       
      let result;
       switch(operator){
         case '*': result = left * right; break;
         case '/': result = left / right; break;
         case '-': result = left - right; break;
         case '+': result = left + right; break;
         default: console.log("error");
       }
        console.log(result);
      // Replace the operation with the result
      tokens.splice(i - 1, 3 + skippingIndex, result);
      // Don't increment i since we've modified the array
    } else {
      i += 2; // Skip to the next operator
    }
  }
  
  // Second pass: handle addition and subtraction
  let result = tokens[0];
  for (i = 1; i < tokens.length; i += 2) {
    let operator = tokens[i];
    while('+-'.includes(tokens[i+1])){
      i++;
    }
    let value = tokens[i + 1];
    
    if (operator === '+') {
      result += value;
    } else if (operator === '-') {
      result -= value;
    }
  }
  
  return parseFloat(result.toFixed(8));
}
  
  handleNumberClick(event, prevState= this.state) {
    const clickedBtnValue= event.target.textContent;
    if (prevState.display === "0"){
      switch(clickedBtnValue){
        case "0" : 
        break;

        case".": this.setState({
                display:  "0." 
                });
        break;

        default: this.setState({
                display:  clickedBtnValue
                });
      }

    } else {     
        if(clickedBtnValue==="." && this.state.isDotUsed===false){
          this.setState({
            display: prevState.display + clickedBtnValue,
            isDotUsed : true
            });
        } else if(clickedBtnValue!=="."){        
          this.setState({
            display: this.state.display + clickedBtnValue
          })}
        if(prevState.isResultProduced === true){
          this.setState({
            display: clickedBtnValue,
            isResultProduced : false
            });
        }
    } 
 
  }
  
  handleFuncClick(event, prevState= this.state) {
    const clickedBtnValue= event.target.textContent;
    switch (clickedBtnValue){
      case "AC": this.setState({
                  formulaDisplay: "",
                  display: "",
                  isDotUsed : false,
                  isResultProduced: false
                  });
                  break;
      case "=": 
        const tokens = this.tokenize(this.state.formulaDisplay+ this.state.display);
        const result = this.calculate(tokens);
        this.setState({
          formulaDisplay:"",
          display: result,
          isResultProduced : true
        });
        break;
      case "+":
      case "-":
      case "*":
      case "/":this.setState({
                  formulaDisplay: prevState.formulaDisplay + prevState.display + clickedBtnValue,
                  display: "",
                  isDotUsed : false
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
                    <button className="ClearEvalBtn" 
                    id="clear" 
                    onClick={this.handleFuncClick}
                    >AC
                    </button>
                    <button className="ClearEvalBtn" 
                    id="equals" 
                    onClick={this.handleFuncClick}
                    >=
                    </button>
                </div> 
                <div id="btn-Grid">
                    <div id="number-Btns">
                    {numberBtn.map((number, index)=>{
                        return( 
                            <button id={number.id} 
                            key={index} 
                            onClick={this.handleNumberClick}
                            >{number.text}
                            </button>
                        )               
                    })}
                    </div>         
                </div>
                <div id="funcBtns">
                    {fncBtn.map((fnc, index)=>{
                        return( 
                            <button id={fnc.id} 
                            key={index} 
                            onClick={this.handleFuncClick}
                            >{fnc.text}
                            </button>
                        )
                    })}
                </div>
            </div>        
        </div>
    </div>
    );
  }
};

export default Calculator;
