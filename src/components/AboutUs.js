import { useEffect, useState } from "react";

function AboutUs() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  let sub = 0;
  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      sub += 1;
      console.log(sub);
    }, 3000);

    console.log("useEffect triggered once!");

    const apiUrl = "https://jsonplaceholder.typicode.com/comments";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        return response.json();
      })
      .then((data) => {
        data.slice(0, 10).forEach((data) => {
          setText((prevState) => prevState + data.body);
        });
      })
      .catch((error) => {
        this.setError(error);
      });

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("useEffect triggered always on State change!");
  });

  useEffect(() => {
    console.log("useEffect triggered only on text change!");
  }, [text]);

  return (
    <div>
      <h1>About Us</h1>
      <p style={{ color: "red" }}>{error}</p>
      <p>{text}</p>
      <button
        onClick={() => setError((prevState) => prevState + "Another error!")}
      >
        Set Error
      </button>
      <button onClick={() => setText((prevState) => prevState + "X")}>
        Re-render
      </button>
    </div>
  );
}

export default AboutUs;
