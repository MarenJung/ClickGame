import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
    render() {
        return (
            <div className="header" >
                <h1>Memory Game</h1>
                <p>Click each picture, but don't click it twice!</p>
            </div>
        )
    }
}
export default Header;