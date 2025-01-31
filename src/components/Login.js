import { useState, useRef, useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(renderCount.current);
  });

  const inputRef = useRef(0);
  function focus() {
    inputRef.current.focus();
    inputRef.current.value = "Username"; //Wrong
  }

  const prevValueUsername = useRef("");
  useEffect(() => {
    prevValueUsername.current = username;
  }, [username]);

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input
        ref={inputRef}
        id="username"
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={focus}>
        Focus
      </button>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
