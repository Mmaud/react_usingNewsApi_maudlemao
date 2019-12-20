import React, {Component} from "react";
import "../Styling/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footerSection">
        <div className="social">
          <a href="https://github.com/Mmaud" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-2x fa-github" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/maud-le-mao-237b7513a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-linkedin" aria-hidden="true" />
          </a>
          {/* @TODO : modifier */}
          <a
            id="repo"
            href="https://github.com/Mmaud/workit_test_maudlemao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
            <i className="fa fa-code-fork" aria-hidden="true" />
          </a>
        </div>

        <a className="smoothScroll" href="/#">
          <i className="fa fa-2x fa-arrow-up" aria-hidden="true" />
        </a>

        <span className="coffee">
          Made with
          <i className="fa fa-coffee" aria-hidden="true" />
        </span>
      </div>
    );
  }
}

export default Footer;
