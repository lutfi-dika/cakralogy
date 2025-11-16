import React, { useState } from "react";
import "./EduMenu.css";

const EduMenu = ({ onOpenCourse }) => {
    const courses = [
        { id: 1, title: "HTML Basics", category: "Frontend", description: "Belajar dasar HTML." },
        { id: 2, title: "CSS Grid", category: "Frontend", description: "Belajar layout CSS Grid." },
        { id: 3, title: "JavaScript", category: "Frontend", description: "Belajar JavaScript modern." },
        { id: 4, title: "React JS", category: "Frontend", description: "Menguasai React untuk web interaktif." },
        { id: 5, title: "Bootstrap", category: "Framework", description: "Membuat UI cepat dan responsive." },
        { id: 6, title: "Tailwind CSS", category: "Framework", description: "Utility-first CSS modern." },
        { id: 7, title: "FlowBite", category: "Framework", description: "UI components berbasis Tailwind." },
        { id: 8, title: "AOS Animation", category: "Framework", description: "Animasi scroll modern." },
        { id: 9, title: "PHP", category: "Backend", description: "Pemrograman backend untuk web dinamis." },
        { id: 10, title: "Laravel", category: "Backend", description: "Framework Laravel modern." },
        { id: 11, title: "MySQL", category: "Database", description: "Sistem database populer untuk backend." },
        { id: 12, title: "MariaDB", category: "Database", description: "Database kuat & kompatibel MySQL." },
        { id: 13, title: "PostgreSQL", category: "Database", description: "Database canggih & powerful." },
        { id: 14, title: "Python", category: "Backend", description: "Bahasa serbaguna untuk backend." },
        { id: 15, title: "Golang", category: "Backend", description: "Backend cepat & efisien." },
        { id: 16, title: "Flask", category: "Backend", description: "Framework Python untuk backend ringan." },
        { id: 17, title: "Geekshelp", category: "Framework", description: "Template Website sederhana" },
        { id: 18, title: "Visual Studio Code", category: "Framework", description: "Visual Studio Code (VSCode) adalah editor kode " },

    ];

    const categories = ["All", "Frontend", "Framework", "Backend", "Database"];
    const [filter, setFilter] = useState("All");

    const filteredCourses =
        filter === "All"
            ? courses
            : courses.filter((c) => c.category === filter);

    return (
        <div id="Edu" className="edu-menu">
            <h2 className="edu-title">Menu Edukasi</h2>

            <div className="filter-buttons">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? "active" : ""}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="edu-grid">
                {filteredCourses.map((course) => (
                    <div
                        className="edu-card"
                        key={course.id}
                        onClick={() => onOpenCourse(course.id)}
                    >
                        <h3>{course.title}</h3>
                        <p className="category">{course.category}</p>
                        <p className="description">{course.description}</p>

                        <button className="detail-btn">Lihat Detail →</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EduMenu;
