import { useState } from "react";
import Card from "./components/Card";

function App() {
  const title = "Hi There, I am learning React!";
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    // setCounter(counter => counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1 className="bg-green-400 p-2 m-8 font-medium"> {title} </h1>
      <div className="flex justify-evenly	my-5">
        <Card username="Allen" btnText="click me" />
        <Card username="Shiv" btnText="visit me" />
        <Card username="Sidharth" />
      </div>
      <div className="flex justify-center my-5">
        <button
          className="text-white bg-blue-700 px-2 mx-2"
          onClick={removeValue}
        >
          -
        </button>
        {counter}
        <button className="text-white bg-blue-700 px-2 mx-2" onClick={addValue}>
          +
        </button>
      </div>
    </>
  );
}

export default App;
