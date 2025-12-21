import React from "react";
import "./hero.css";

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="container">

                <div className="text-box">
                    <p className="sub">BEST IT COMPANY</p>

                    <h1>
                        Get Our Business <br />
                        <span>This IT Solution</span>
                    </h1>

                    <p className="desc">
                        We deliver intelligent IT solutions helping business improve online
                        conversion, enhance branding, and deliver great user experience.
                    </p>

                    <div className="btn-group">
                        <button className="btn primary"><a href="#Edu">Explore</a></button>
                        <button className="btn outline"><a href="#Contact">Contact Us</a></button>
                    </div>
                </div>

                <div className="img-box">
                    <img
                        src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
                        alt="Team Work"
                    />
                </div>

            </div>

            {/* Wave Gradient */}
            <div className="wave-wrap">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="waveGradient" x1="0" x2="1" y1="0" y2="0">
                            <stop offset="0%" stopColor="#4a90e2" />
                        </linearGradient>
                    </defs>

                    <path
                        d="M578.14,59.49c-95.2,22.77-199.75,34.28-304.39,29
                C178,81.14,90.73,56.74,0,32.23V120H1200V16.41
                c-75.4,40.29-161.41,63.07-247.53,72
                C823.45,98.75,673.34,36.21,578.14,59.49Z"
                        fill="url(#waveGradient)"
                    />
                </svg>
            </div>
        </section>
    );
}
