import { h } from "preact";
import "./index.css";

const Header = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            Charles Bye Week
          </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">Payouts</a>
            </li>
            <li>
              <a href="#">Infractions</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
