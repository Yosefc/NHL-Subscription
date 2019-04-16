import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="App-header">
            <nav>
                <Link to="/home" className="nav-item">Home</Link>
                <Link to="/unsubscribe" className="nav-item">Unsubscribe</Link>
            </nav>
        </header>
    )
}

export default Navbar