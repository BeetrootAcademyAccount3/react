import { useEffect, useState } from "react";

function AboutUs() {
  const [text, setText] = useState("");

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/comments";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        return response.json();
      })
      .then((data) => {
        let text = "";

        data.slice(0, 10).forEach((element) => {
          text += element.body;
        });

        setText(text);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {}, []);

  return <div>{text}</div>;
}

export default AboutUs;
