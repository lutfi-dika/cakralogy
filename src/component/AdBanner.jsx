import React from "react";
import "./AdBanner.css";
import promoImage from "../assets/logo.png"; // ganti dengan path gambar kamu

const AdBanner = () => {
    return (
        <div className="ad-banner">
            <div className="ad-content">
                <div className="ad-text">
                    <h2>Promo Spesial: Kursus Premium 50% OFF!</h2>
                    <p>Daftar sekarang dan tingkatkan kemampuan codingmu dengan materi eksklusif.</p>
                    <button className="ad-btn">Daftar Sekarang</button>
                </div>
                <div className="ad-image">
                    <img src={promoImage} alt="Promo" />
                </div>
            </div>
        </div>
    );
};

export default AdBanner;
