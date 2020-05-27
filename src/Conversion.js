import React, { Component } from "react";

class Conversion extends Component {
  constructor() {
    super();
    this.state = {
      all: [
        "kelvin",
        "celsius",
        "fahrenheit",
        "rankine",
        "liters",
        "tablespoons",
        "cubic-inches",
        "cups",
        " cubic-fee",
        "gallons"
      ],
      temp: ["kelvin", "celsius", "fahrenheit", "rankine"],
      volume: [
        "liters",
        "tablespoons",
        "cubic-inches",
        "cups",
        " cubic-feet",
        "gallons"
      ],
      value: "",
      arrayName: "",
      outputValue: ""
    };
    this.inputValue = 0;
    this.inputUnit = "";
    this.studentResponse = null;
    this.targetUnit = "";
    this.result = 0;
  }

  fun1 = e => {
    this.inputValue = +e.target.value;
    console.log(this.inputValue);
  };
  fun2 = e => {
    this.inputUnit = e.target.value.toLowerCase();
    console.log(this.inputUnit);
  };
  fun3 = e => {
    this.targetUnit = e.target.value.toLowerCase();
    console.log(this.targetUnit);
  };
  fun4 = e => {
    this.studentResponse = e.target.value;
    console.log(this.studentResponse);
  };

  onSubmit = () => {
    if (this.state.all.indexOf(this.inputUnit) !== -1) {
      switch (this.inputUnit) {
        case "fahrenheit":
          if (this.targetUnit === "kelvin") {
            this.result = (this.inputValue + 459.67) * (5 / 9);
            console.log(this.inputValue + 459.67);
            console.log("res", this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "celsius") {
            this.result = ((this.inputValue - 32) * 5) / 9;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "rankine") {
            this.result = this.inputValue + 459.67;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else {
            // alert("invalid input");
            this.setState({
              outputValue: "invalid Input"
            });

            break;
          }
        case "kelvin":
          if (this.targetUnit === "fahrenheit") {
            this.result = (this.inputValue * 9) / 5 - 459.67;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "celsius") {
            this.result = this.inputValue - 273.15;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "rankine") {
            this.result = (this.inputValue * 9) / 5;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else {
            // alert("invalid input");
            this.setState({
              outputValue: "invalid Input"
            });

            break;
          }
        case "celsius":
          if (this.targetUnit === "kelvin") {
            this.result = this.inputValue + 273.15;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "fahrenheit") {
            this.result = (this.inputValue * 9) / 5 + 32;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "rankine") {
            this.result = ((this.inputValue + 273.15) * 9) / 5;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else {
            // alert("invalid input");
            this.setState({
              outputValue: "invalid Input"
            });

            break;
          }
        case "rankine":
          if (this.targetUnit === "kelvin") {
            this.result = (this.inputValue * 9) / 5;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "celsius") {
            this.result = ((this.inputValue - 491.67) * 5) / 9;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "fahrenheit") {
            this.result = this.inputValue - 459.67;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else {
            // alert("invalid input");
            this.setState({
              outputValue: "invalid Input"
            });

            break;
          }
        case "liters":
          if (this.targetUnit === "tablespoons") {
            this.result = this.inputValue * 67.628045;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === " cubic-inches") {
            this.result = this.inputValue - 459.67;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "cups") {
            this.result = this.inputValue * 4.226753;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === " cubic-feet") {
            this.result = this.inputValue * 0.035315;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "gallons") {
            this.result = this.inputValue * 0.264172;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else {
            // alert("invalid input");
            this.setState({
              outputValue: "invalid Input"
            });

            break;
          }
        case "tablespoons":
          if (this.targetUnit === "liters") {
            this.result = this.inputValue * 0.014787;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === " cubic-inches") {
            this.result = this.inputValue * 0.902344;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "cups") {
            this.result = this.inputValue / 16;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === " cubic-feet") {
            this.result = this.inputValue * 0.000522;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "gallons") {
            this.result = this.inputValue / 256;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else {
            // alert("invalid input");
            this.setState({
              outputValue: "invalid Input"
            });

            break;
          }
        case "cubic-inches":
          if (this.targetUnit === "tablespoons") {
            this.result = this.inputValue * 1.108225;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "liters") {
            this.result = this.inputValue * 0.016387;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "cups") {
            this.result = this.inputValue * 0.069264;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === " cubic-feet") {
            this.result = this.inputValue * 0.000579;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "gallons") {
            this.result = this.inputValue / 231;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else {
            // alert("invalid input");
            this.setState({
              outputValue: "invalid Input"
            });

            break;
          }
        case "cups":
          if (this.targetUnit === "tablespoons") {
            this.result = this.inputValue * 16;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === " cubic-inches") {
            this.result = this.inputValue * 14.4375;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "liters") {
            this.result = this.inputValue * 0.236588;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === " cubic-feet") {
            this.result = this.inputValue * 0.008355;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "gallons") {
            this.result = this.inputValue / 16;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else {
            // alert("invalid input");
            this.setState({
              outputValue: "invalid Input"
            });

            break;
          }
        case " cubic-feet":
          if (this.targetUnit === "tablespoons") {
            this.result = this.inputValue * 1915.012947;
            console.log(this.result);
            if (Math.round(this.result) !== Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === " cubic-inches") {
            this.result = this.inputValue * 1727.999964;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "cups") {
            this.result = this.inputValue * 119.688309;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === " gallons") {
            this.result = this.inputValue * 7.480519;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "liters") {
            this.result = this.inputValue * 28.316846;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else {
            // alert("invalid input");
            this.setState({
              outputValue: "invalid Input"
            });

            break;
          }
        case "gallons":
          if (this.targetUnit === "tablespoons") {
            this.result = this.inputValue * 256;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === " cubic-inches") {
            this.result = this.inputValue * 231;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "cups") {
            this.result = this.inputValue * 16;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === " cubic-feet") {
            this.result = this.inputValue * 0.133681;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else if (this.targetUnit === "liters") {
            this.result = this.inputValue * 3.785412;
            console.log(this.result);
            if (Math.round(this.result) === Math.round(this.studentResponse)) {
              this.setState({
                outputValue: "correct"
              });
            } else if (
              Math.round(this.result) !== Math.round(this.studentResponse)
            ) {
              this.setState({
                outputValue: "Incorrect"
              });
            }
            break;
          } else {
            // alert("invalid input");
            this.setState({
              outputValue: "invalid Input"
            });

             break;
          }
          default : console.log("invalid input")
      }
    }
  };
  render() {
    return (
      <div>
       
          <label>Input Numerical Value</label>
          <input type="number" onChange={this.fun1} />
          <br />
          <label>Input Unit Of Measure</label>
          <input type="text" onChange={this.fun2} />
          <br />
          <label>Target Unit Of Measure</label>
          <input type="text" onChange={this.fun3} />
          <br />

          <label>Student Response</label>
          <input type="number" onChange={this.fun4} />
          <br />

          <label>Result</label>
          <h2>{this.state.outputValue}</h2>
          <button onClick={this.onSubmit}>Submit</button>
      
      </div>
    );
  }
}
export default Conversion;
