import { useState, useRef, useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  function handleRef() {
    inputRef.current.focus();
    inputRef.current.value = "Username"; //Bad Practice
  }

  const prevPass = useRef("");
  useEffect(() => {
    prevPass.current = password;
  }, [password]);

  return (
    <div>
      <p>
        Previous Password: {prevPass.current} / Current Password: {password}
      </p>
      <p style={{ marginLeft: "40px" }}>{renderCount.current}</p>
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
        <button type="button" onClick={handleRef}>
          Ref
        </button>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
