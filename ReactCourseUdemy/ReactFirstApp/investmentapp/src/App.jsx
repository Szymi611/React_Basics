import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInput(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue, // It fixes that the value is a number and not a string so js will add it normally 
        }
    })
  }

  return (
    <>
      <Header/>
      <UserInput onChangeInput={handleInput} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter a valid duration (1 year or more)</p>}
      {inputIsValid &&  <Results input={userInput}/>}
    </>
    )
}

export default App
