import React, { useState } from "react";
import "./AdBanner.css";
import promoImage from "../assets/logo.png"; // ganti dengan path gambar kamu

const AdBanner = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="ad-banner">
                <div className="ad-content">
                    <div className="ad-text">
                        <h2>Promo Spesial: Kursus Premium 50% OFF!</h2>
                        <p>Daftar sekarang dan tingkatkan kemampuan codingmu dengan materi eksklusif.</p>
                        <button className="ad-btn" onClick={handleClick}>Daftar Sekarang</button>
                    </div>
                    <div className="ad-image">
                        <img src={promoImage} alt="Promo" />
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Daftar Kursus Premium</h2>
                        <p>Dapatkan akses materi eksklusif, proyek nyata, dan mentor profesional. Promo hanya berlaku hari ini!</p>
                        <button className="close-btn" onClick={closePopup}>Tutup</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdBanner;
