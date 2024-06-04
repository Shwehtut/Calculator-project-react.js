import "./App.css";
import Output from "./Components/Output";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  let [output, setOutputValue] = useState(0);
  let [input, setInputValue] = useState(0);

  function clickEventHandling(value) {
    if (value == "AC") {
      setInputValue(0);
      setOutputValue(0);
    } else if (value == "Delete") {
      if (input != 0) {
        input.length == 1
          ? setInputValue(0)
          : setInputValue(input.slice(0, input.length - 1));
      }
    } else if (value == "=") {
      setOutputValue(eval(input));
      setInputValue(0);
    } else {
      input == "0" ? setInputValue(value) : setInputValue(input + value);
      input == "00" ? setInputValue(value) : setInputValue(input + value);
    }
  }
  return (
    <div className="container">
      <div className="calcular_frame">
        <Output output={output}></Output>
        <Input input={input}></Input>
        <Button clickEventHandling={clickEventHandling}></Button>
      </div>
    </div>
  );
}

export default App;
