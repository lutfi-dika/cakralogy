import React, { useState } from "react";
import "./EduMenu.css";

const EduMenu = () => {
    const courses = [
        { id: 1, title: "HTML Basics", category: "Frontend", description: "Belajar dasar HTML." },
        { id: 2, title: "CSS Grid", category: "Frontend", description: "Belajar layout CSS Grid." },
        { id: 3, title: "JavaScript", category: "Frontend", description: "Belajar JavaScript demi web modern dan interaktif." },
        { id: 4, title: "React JS", category: "Frontend", description: "Menguasai React untuk membangun web interaktif." },
        { id: 5, title: "Bootstrap", category: "Framework", description: "Bootstrap: Membuat web modern dengan cepat." },
        { id: 6, title: "Tailwind CSS", category: "Framework", description: "Pelajari Tailwind CSS untuk tampilan web yang menarik." },
        { id: 7, title: "FlowBite", category: "Framework", description: "Menguasai Flowbite untuk membangun UI web interaktif." },
        { id: 8, title: "AOS Animation", category: "Framework", description: "Belajar AOS untuk animasi web modern." },
        { id: 9, title: "PHP", category: "Backend", description: "Belajar PHP untuk web dinamis." },
        { id: 10, title: "Laravel", category: "Backend", description: "Belajar Laravel untuk pengembangan backend web modern." },
        { id: 11, title: "MySQL", category: "Database", description: "Belajar MySQL untuk backend web modern." },
        { id: 12, title: "MariaDB", category: "Database", description: "Pelajari MariaDB untuk backend web yang efisien." },
        { id: 13, title: "PostgreSQL", category: "Database", description: "Backend web modern dengan PostgreSQL." },
        { id: 14, title: "Python", category: "Backend", description: "Backend web modern dengan Python." },
        { id: 15, title: "Golang", category: "Backend", description: "Membangun backend web modern menggunakan Golang." },
        { id: 16, title: "Flask", category: "Backend", description: "Membangun backend web modern menggunakan Flask." },
    ];

    const categories = ["All", "Frontend", "Framework", "Backend", "Database"];
    const [filter, setFilter] = useState("All");

    const filteredCourses = filter === "All"
        ? courses
        : courses.filter(course => course.category === filter);

    return (
        <div id="Edu" className="edu-menu">
            <h2 className="edu-title">Menu Edukasi</h2>

            <div className="filter-buttons">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-btn ${filter === category ? "active" : ""}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="edu-grid">
                {filteredCourses.map(course => (
                    <div className="edu-card" key={course.id}>
                        <h3>{course.title}</h3>
                        <p className="category">{course.category}</p>
                        <p className="description">{course.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EduMenu;
