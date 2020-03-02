import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import Modal from "./Modal.js";

class Header extends React.Component {
  handleClick = () => {
    this.props.onClose();
  };
  render() {
    let logoIMG =
      "https://pbs.twimg.com/profile_images/1175994146/bigm-twitter_400x400.png";
    return (
      <div className="header">
        <div>
          <Link to="/">
            <img src={logoIMG} alt="Logo" />
          </Link>
        </div>
        <div>
          <button className="about" onClick={this.handleClick}>
            About
          </button>
        </div>
      </div>
    );
  }
}
export default Header;
