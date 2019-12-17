import React from "react";
//import logo from './logo.svg';
import "./App.css";
import ExConst from "./Containers/exConst";
import {DisplayDayNewsCopy} from "./Tools/displayDayNews copy";
import DisplayDayNews from "./Tools/displayDayNews";
import CallingApiNews from "./Tools/callingApiNews";

function App() {
  const url = "https://newsapi.org/v2/top-headlines?" + "country=us&";
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Coucou</p> */}
        <ExConst text="une props" />
        <input className="searchingInput" />
        <DisplayDayNewsCopy />
        <DisplayDayNews />
        <CallingApiNews url={url} />
      </header>
    </div>
  );
}

export default App;
