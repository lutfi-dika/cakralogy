import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo & Deskripsi */}
                <div className="footer-logo">
                    <h2>CakraLogy</h2>
                    <p>Menginspirasi pembelajaran digital untuk membangun masa depan.</p>
                </div>

                {/* Menu & Links */}
                <div className="footer-links">
                    <div className="link-section">
                        <h4>Menu</h4>
                        <ul>
                            <li><a href="#courses">Kursus</a></li>
                            <li><a href="#tutorials">Tutorial</a></li>
                            <li><a href="#about">Tentang Kami</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                    </div>

                    <div className="link-section">
                        <h4>Bantuan</h4>
                        <ul>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#support">Support</a></li>
                            <li><a href="#contact">Kontak</a></li>
                        </ul>
                    </div>
                </div>

                {/* Sosial Media */}
                <div className="footer-social">
                    <h4>Ikuti Kami</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 CakraLogy Edu. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
