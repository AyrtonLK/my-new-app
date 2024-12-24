import React from "react";
const NavBar = () => {
    return (
    <nav style={styles.nav}>
        <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
);
};

// Estilos en línea
const styles = {
nav: {
    backgroundColor: "#333",
    padding: "10px 20px",
},

ul: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
},

li: {
    margin: "0 10px",
},

a: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
},
};

export default NavBar;
