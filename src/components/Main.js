import "../scss/Main.scss";
import AlertPage from "./AlertPage";
import CardList from "./Cards/CardList";
import Donations from "./Donations/Donations";

function click() {
  //console.log("Clicked function");
}

function clickArg(arg) {
  //console.log(arg);
}

function handleClick(arg) {
  //console.log(arg);
}

function Main() {
  const link = "https://www.google.com";
  return (
    <div>
      <h2 className="Main-h2">Main Section</h2>
      <AlertPage />
      <p style={{ color: "red" }}>This is text</p>
      {/* <a href={link}>Link</a>
      <Button variant="primary" onClick={() => console.log("Click")}>
        Click
      </Button>

      <button onClick={() => console.log("Click")}>Click</button>

      <button onClick={click}>Click</button>
      <button onClick={() => clickArg("Clicked from arg")}>Click</button>
      <button onClick={handleClick.bind(null, "handleClick")}>Click</button> */}
      <Donations></Donations>
      <CardList />
    </div>
  );
}

export default Main;
