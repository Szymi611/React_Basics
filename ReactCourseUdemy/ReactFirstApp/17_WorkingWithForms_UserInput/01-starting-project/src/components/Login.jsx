import { useState } from "react";

export default function Login() {
  // FIRST APPROCH - USING STATE FOR EACH INPUT (TOO MANY STATES TO MANAGE)
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);

  // } 

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  })

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default browser behavior
    console.log(enteredValue);
  }

  function handleInputChange(identifier, value) {
    setEnteredValue(prevValue => ({
      ...prevValue,
      [identifier]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValue.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange('password', event.target.value)}
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
