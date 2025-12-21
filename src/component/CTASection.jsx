import React, { useState, useEffect } from "react";
import "./CTASection.css";

const ads = [
    {
        title: "Belajar Pemrograman Sekarang!",
        subtitle: "Materi interaktif + proyek nyata untuk skill profesional.",
        cta: "Daftar Sekarang",
        bg: "#4a90e2",
        popupTitle: "Daftar Kursus Pemrograman",
        popupSubtitle: "Dapatkan akses ke modul interaktif, proyek nyata, dan mentor profesional!"
    },
    {
        title: "Tingkatkan Skill Digitalmu",
        subtitle: "Kursus modern & pengalaman belajar nyata.",
        cta: "Pelajari Lebih Lanjut",
        bg: "#4a90e2",
        popupTitle: "Skill Digital Lebih Cepat",
        popupSubtitle: "Pelajari tool modern, teknik terbaru, dan praktik langsung di proyek nyata."
    },
    {
        title: "Platform Edukasi Profesional",
        subtitle: "Materi terverifikasi + pengalaman belajar optimal.",
        cta: "Gabung Sekarang",
        bg: "#4a90e2",
        popupTitle: "Belajar dengan Profesional",
        popupSubtitle: "Materi terverifikasi + pengalaman belajar optimal untuk kariermu!"
    },
    {
        title: "Project Nyata & Interaktif",
        subtitle: "Latihan langsung agar cepat mahir.",
        cta: "Coba Sekarang",
        bg: "#4a90e2",
        popupTitle: "Latihan Proyek Interaktif",
        popupSubtitle: "Kerjakan proyek nyata langsung agar skill-mu lebih cepat berkembang."
    }
];

export default function CTASection() {
    const [current, setCurrent] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({});

    const handleCTAclick = (ad) => {
        setPopupContent(ad); // akan pakai popupTitle & popupSubtitle
        setShowPopup(true);
    };

    const closePopup = () => setShowPopup(false);

    return (
        <section className="cta-ad-wrapper">
            <div
                className="cta-ad-container"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {ads.map((ad, index) => (
                    <div
                        className="cta-ad-banner"
                        key={index}
                        style={{ background: ad.bg }}
                    >
                        <h2>{ad.title}</h2>
                        <p>{ad.subtitle}</p>
                        <button onClick={() => handleCTAclick(ad)}>{ad.cta}</button>
                    </div>
                ))}
            </div>

            <div className="cta-ad-dots">
                {ads.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${current === idx ? "active" : ""}`}
                        onClick={() => setCurrent(idx)}
                    ></span>
                ))}
            </div>

            {showPopup && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div
                        className="popup-content"
                        style={{ background: popupContent.bg }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>{popupContent.popupTitle}</h2>
                        <p>{popupContent.popupSubtitle}</p>
                        <button className="close-btn" onClick={closePopup}>
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
 