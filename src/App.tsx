import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [dog, setDog] = useState({ url: "" });

  const handleGenerateDogImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDog({ url: data.message }))
      .catch((err) => console.log("API ERROR!"));
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>
          Dogs Image Generator{" "}
          <img src="https://cdn3.emoji.gg/emojis/6037-funnydog.gif" />
        </h1>
        <h4>
          Made by <a href="https://github.com/KennedyReisz">Kennedy</a>
        </h4>
        <button className={styles.button} onClick={handleGenerateDogImage}>
          Generate!
        </button>
        <br />
        <a href={`${dog.url}`} target={"_blank"}>
          <img className={styles.image} src={dog.url} />
        </a>
      </div>
    </div>
  );
}

export default App;
