import React, { useState, useEffect } from "react";
import "./CTASection.css";

const ads = [
    {
        title: "Belajar Pemrograman Sekarang!",
        subtitle: "Materi interaktif + proyek nyata untuk skill profesional.",
        cta: "Daftar Sekarang",
        bg: "linear-gradient(135deg, #ff6b6b, #f06595)"
    },
    {
        title: "Tingkatkan Skill Digitalmu",
        subtitle: "Kursus modern & pengalaman belajar nyata.",
        cta: "Pelajari Lebih Lanjut",
        bg: "linear-gradient(135deg, #facc15, #f97316)"
    },
    {
        title: "Platform Edukasi Profesional",
        subtitle: "Materi terverifikasi + pengalaman belajar optimal.",
        cta: "Gabung Sekarang",
        bg: "linear-gradient(135deg, #3b82f6, #06b6d4)"
    },
    {
        title: "Project Nyata & Interaktif",
        subtitle: "Latihan langsung agar cepat mahir.",
        cta: "Coba Sekarang",
        bg: "linear-gradient(135deg, #34d399, #10b981)"
    }
];

export default function CTAAdSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % ads.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="cta-ad-wrapper">
            <div
                className="cta-ad-container"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {ads.map((ad, index) => (
                    <div className="cta-ad-banner" key={index} style={{ background: ad.bg }}>
                        <h2>{ad.title}</h2>
                        <p>{ad.subtitle}</p>
                        <button onClick={() => alert(ad.cta)}>{ad.cta}</button>
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
        </section>
    );
}
