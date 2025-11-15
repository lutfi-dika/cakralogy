import React from "react";
import ThreeDoverlay from "./ThreeDOverlay"
import "./AboutSection.css";
import AboutImage from "../assets/logo.png"; // sesuaikan path

export default function AboutSection() {
    return (
        <section id="About" className="about-wrapper">
            <div className="about-container">

                {/* Konten teks */}
                <div className="about-content">
                    <h2 className="about-title">
                        Tentang <span>CakraLogy</span>
                    </h2>
                    <p className="about-desc">
                        Cakralogy adalah platform pembelajaran teknologi
                        yang dirancang untuk menyediakan akses edukasi digital
                        yang berkualitas, terstruktur, dan sesuai dengan standar
                        kompetensi industri. Melalui pendekatan berbasis kurikulum
                        dan metodologi pembelajaran modern, Cakralogy berupaya mendukung
                        peningkatan kemampuan generasi digital dalam memahami konsep pemrograman,
                        teknologi informasi, serta pengembangan aplikasi.
                    </p>

                    <div className="about-cards">
                        <div className="about-card">
                            <h3>Akses pembelajaran fleksibel</h3>
                            <p>Memungkinkan pengguna belajar kapan saja dan dimana saja sesuai ritme masing-masing.</p>
                        </div>

                        <div className="about-card">
                            <h3>UI/UX Modern</h3>
                            <p>Desain elegan, ringan, dan ramah pengguna untuk pengalaman terbaik.</p>
                        </div>

                        <div className="about-card">
                            <h3>Interaktif</h3>
                            <p>Latihan, proyek mini, dan penjelasan visual untuk memudahkan pemahaman.</p>
                        </div>
                    </div>
                </div>

                {/* Gambar + Ring 3D */}
                <div className="about-image-box">
                    <img src={AboutImage} alt="About illustration" />
                    <ThreeDoverlay />
                    <div className="ring3d"></div>
                </div>
            </div>
        </section>
    );
}
