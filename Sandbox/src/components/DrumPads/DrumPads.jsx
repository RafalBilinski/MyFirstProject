import "./DrumPads.css";
import React, { useState, useEffect } from "react";
const padsContext = [
  {
    keyCode: "Q",
    name: "Heater 1",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    keyCode: "W",
    name: "Heater 2",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    keyCode: "E",
    name: "Heater 3",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    keyCode: "A",
    name: "Heater 4",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  },
  {
    keyCode: "S",
    name: "Clap",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    keyCode: "D",
    name: "Open-HH",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    keyCode: "Z",
    name: "Kick-n'-Hat",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    keyCode: "X",
    name: "Kick",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    keyCode: "C",
    name: "Closed-HH",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },
];

//Przyciski----------------------------------------------------------
const BtnSound = (props) => {

  const handleClickAndPlay = (event) => {
    props.fnc(event);
    document.getElementById(props.keyToHit).play();
  };
  return (
    <div id={props.id} className={props.className} onClick={handleClickAndPlay}>
      {props.keyToHit}
      <audio
        className="clip"
        id={props.keyToHit}
        src={props.src}
        type="audio/mpeg"
      />
    </div>
  );
};

//komponent----------------------------------------------------------
class Buttons extends React.Component {
  constructor(props) {
    super(props);

    // Inicjalizacja stanu
    this.state = {
      counter: 0,
      text: "Use Pads with mouse or keyboard",
    };

    // Binding metod (opcjonalne w nowszych wersjach ES)
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // Przykład metody cyklu życia
  componentDidMount() {
    console.log("Drum Machine mounted");
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    console.log("Drum Machine unmounted");
  }

  // Obsługa zdarzeń
  handleClick(e) {
    this.setState({
      text: e.target.id,
    });
  }
  handleKeyPress(event) {
    const keyString = String(event.key).toUpperCase();
    const audioElement = document.getElementById(keyString);
    audioElement.play();
    this.setState({
      text: audioElement.parentElement.id,
    });
  }

  // Wymagana metoda renderująca
  render() {
    return (
      <div className="container" >
        <h1 id="title">{this.props.title}</h1>
        <div id="display"> {this.state.text}</div>
        <div className="buttonContainer">
          {padsContext.map((pad, index) => {
            return (
              <BtnSound
                className="drum-pad"
                id={pad.name}
                key={index}
                no={index}
                src={pad.url}
                fnc={this.handleClick}
                keyToHit={pad.keyCode}
              ></BtnSound>
            );
          })}
        </div>
      </div>
    );
  }
}
//zegar-------------------------------------------
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div id="clock">The current time is: {time.toLocaleTimeString()}</div>;
}

//----------------------------------------------------------------------
export default function DrumPads() {
  return (
    <div className="container" id="drum-machine">
      <Clock />
      <Buttons title="Drum-pads" />
    </div>
  );
}
