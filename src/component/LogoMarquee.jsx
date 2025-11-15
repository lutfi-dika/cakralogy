import React from "react";
import "./LogoMarquee.css";

const LogoMarquee = () => {
    const logos = [
        "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", // HTML Basics
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", // CSS Grid
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", // JavaScript
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React JS
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", // Bootstrap
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", // Tailwind CSS
        "https://flowbite.com/docs/images/logo.svg", // FlowBite (placeholder)
        "https://upload.wikimedia.org/wikipedia/commons/4/43/AOS_Logo.png", // AOS Animation (placeholder)
        "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", // PHP
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg", // Laravel
        "https://upload.wikimedia.org/wikipedia/commons/6/62/MySQL.svg", // MySQL
        "https://upload.wikimedia.org/wikipedia/commons/4/44/MariaDB_icon.svg", // MariaDB
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", // PostgreSQL
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", // Python
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Golang-logo.png", // Golang
        "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flask_logo.svg" // Flask
    ];

    return (
        <div className="marquee-container">
            <div className="marquee marquee-left">
                {logos.map((logo, index) => (
                    <img src={logo} alt={`logo-${index}`} key={index} />
                ))}
                {logos.map((logo, index) => (
                    <img src={logo} alt={`logo-copy-${index}`} key={`copy-${index}`} />
                ))}
            </div>

            <div className="marquee marquee-right">
                {logos.map((logo, index) => (
                    <img src={logo} alt={`logo2-${index}`} key={index} />
                ))}
                {logos.map((logo, index) => (
                    <img src={logo} alt={`logo2-copy-${index}`} key={`copy2-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default LogoMarquee;
