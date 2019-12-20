import React, {Component} from "react";
import "../Styling/Header.css";
import logo from "../Imgs/react.svg";
import news from "../Imgs/news.png";

class Header extends Component {
  render() {
    return (
      <div className="appHeader">
        <img className="appLogo" src={logo} alt="React Logo" />

        <div className="title">
          <h1>GET EASILY YOUR NEWS</h1>
          <h4>
            Powered by
            <a href="https://newsapi.org/"> News API </a>🔥{" "}
          </h4>
        </div>
        <img className="scriptLogo" src={news} alt="Javascript Logo" />
      </div>
    );
  }
}

export default Header;
