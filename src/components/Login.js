import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState("login");

  async function signUp() {
    try {
      await createUserWithEmailAndPassword(auth, username, password);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="auth-form">
        <div className="d-flex justify-content-center align-items-center">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button">Login</button>
          <button type="button" onClick={signUp}>
            Sign Up
          </button>
          <button type="button">Log Out</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
