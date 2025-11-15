// Testimonial.js
import React from "react";
import "./Testimonial.css";

const testimonials = [
    {
        name: "Andika",
        role: "Front-End Developer",
        photo: "https://i.pinimg.com/1200x/6e/52/14/6e5214b1bd71d4ac8c4350301bea7593.jpg",
        feedback:
            "Cakralogy membuat belajar coding menjadi mudah dan menyenangkan. Materinya lengkap dan interaktif!",
        rating: 7
    },
    {
        name: "Ali",
        role: "Back-End Developer",
        photo: "https://i.pinimg.com/1200x/d6/36/d5/d636d53048eccf75fed71e3add231b94.jpg",
        feedback:
            "Platform edukasi ini sangat membantu saya memahami teknologi terbaru. UI-nya juga sangat nyaman di mata.",
        rating: 10
    },
    {
        name: "Azka",
        role: "Full Stack Developer",
        photo: "https://i.pinimg.com/1200x/0b/97/6f/0b976f0a7aa1aa43870e1812eee5a55d.jpg",
        feedback:
            "Materi disampaikan dengan jelas, contoh praktiknya banyak, dan support timnya luar biasa!",
        rating: 9
    },
    {
        name: "Hanifah",
        role: "Fron End",
        photo: "https://i.pinimg.com/1200x/d2/fa/c8/d2fac83f8aa6a7b7a6cf1be6a7430d01.jpg",
        feedback:
            "Belajar online jadi mudah, praktik langsung, tim support super responsif.",
        rating: 10
    },
    {
        name: "Kirana",
        role: "Backend Developer",
        photo: "https://i.pinimg.com/1200x/72/a0/e1/72a0e1f4e0f7b4461911a7c56d4688e9.jpg",
        feedback:
           "Semua materi mudah dimengerti, banyak latihan nyata, dan tim support selalu siap memberikan bantuan.",
        rating: 8
    },
    {
        name: "Alpan",
        role: "Full Stack Developer",
        photo: "https://i.pinimg.com/1200x/0f/f3/4b/0ff34b623b1c034e11dc8c26d3a8d308.jpg",
        feedback:
            "Penjelasannya sangat mudah dipahami, latihan praktiknya banyak, dan tim support-nya selalu siap membantu!",
        rating: 10
    },
];

const Testimonial = () => {
    return (
        <div id="Testimoni" className="testimonial-container">
            {testimonials.map((t, index) => (
                <div className="testimonial-card" key={index}>
                    <div className="testimonial-photo-wrapper">
                        <img src={t.photo} alt={t.name} className="testimonial-photo" />
                    </div>
                    <p className="testimonial-feedback">"{t.feedback}"</p>
                    <div className="testimonial-rating">
                        {"⭐".repeat(t.rating)}
                    </div>
                    <h3 className="testimonial-name">{t.name}</h3>
                    <span className="testimonial-role">{t.role}</span>
                </div>
            ))}
        </div>
    );
};

export default Testimonial;
