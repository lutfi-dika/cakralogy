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
        "https://www.bypeople.com/wp-content/uploads/2017/03/css-animate-scroll.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", // PHP
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg", // Laravel
        "https://tse4.mm.bing.net/th/id/OIP.urLHYMYPFxkcs6AC4Io9vwHaHa?pid=Api&h=220&P=0", // MySQL
        "https://tse3.mm.bing.net/th/id/OIP.4V0BH9_ds5223477MMySSAHaGC?pid=Api&h=220&P=0", // MariaDB
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", // PostgreSQL
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", // Python
        "https://iconlogovector.com/uploads/images/2024/04/lg-6619d74e0c9e1-GO-Golang.webp", // Golang
        "https://www.seekpng.com/png/full/875-8753366_flask-png.png" // Flask
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
