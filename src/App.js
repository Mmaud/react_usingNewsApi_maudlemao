import React from "react";
//import logo from './logo.svg';
import "./App.css";
import ExConst from "./Containers/exConst";
import DisplayDayNews from "./Tools/displayDayNews";
import Search from "./Components/search";

function App() {
  const url = "https://newsapi.org/v2/top-headlines?" + "country=us&";
  return (
    <div className="App">
      <header className="App-header">
        <ExConst text="une props" />
        <DisplayDayNews />
      </header>
    </div>
  );
}

export default App;
