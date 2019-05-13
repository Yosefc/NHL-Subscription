import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="App-header">
            <nav>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/unsubscribe" className="nav-item">Unsubscribe</Link>
                <Link to="/stats" className="nav-item">Stats</Link>
            </nav>
        </header>
    )
}

export default Navbar