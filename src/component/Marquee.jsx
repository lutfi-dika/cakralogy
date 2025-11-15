import React from "react";
import "./Marquee.css";

export default function Marquee() {
    const text = "👋 Selamat Datang di Platform Edukasi Kami • Belajar Mudah • Materi Interaktif • UI Modern • ";

    return (
        <div className="marquee-futuristic-wrapper">
            {/* Marquee ke kiri */}
            <div className="marquee-row">
                <div className="marquee-content">
                    <span>{text}</span>
                    <span>{text}</span>
                </div>
            </div>

            {/* Marquee ke kanan */}
            <div className="marquee-row reverse">
                <div className="marquee-content">
                    <span>{text}</span>
                    <span>{text}</span>
                </div>
            </div>
        </div>
    );
}
