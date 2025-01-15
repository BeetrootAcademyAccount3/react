import "../scss/Main.scss";
import Button from "react-bootstrap/Button";

function click() {
  console.log("Clicked function");
}

function clickArg(arg) {
  console.log(arg);
}

function handleClick(arg) {
  console.log(arg);
}

function Main() {
  const link = "https://www.google.com";
  return (
    <div>
      <h2 className="Main-h2">Main Section</h2>
      <p style={{ color: "red" }}>This is text</p>
      <a href={link}>Link</a>
      <Button variant="primary" onClick={() => console.log("Click")}>
        Click
      </Button>

      <button onClick={() => console.log("Click")}>Click</button>

      <button onClick={click}>Click</button>
      <button onClick={() => clickArg("Clicked from arg")}>Click</button>
      <button onClick={handleClick.bind(null, "handleClick")}>Click</button>
    </div>
  );
}

export default Main;
