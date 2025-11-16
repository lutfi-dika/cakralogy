import React from "react";
import { courseData } from "./courseData";
import "./CourseDetail.css";

const CourseDetail = ({ courseId, onBack }) => {
    const course = courseData[courseId];
    if (!course) return <p>Kursus tidak ditemukan</p>;

    return (
        <div className="course-page">

            {/* Hero Section */}
            <div className="course-hero">
                <button className="back-btn" onClick={onBack}>← Kembali</button>
                <h1 className="course-title">{course.title}</h1>
                <p className="course-category">{course.category}</p>
                <p className="course-shortdesc">{course.description}</p>
            </div>

            {/* Main Content Card */}
            <div className="course-content-card">
                {/* Tentang Kursus */}
                <h2>📘 Tentang Kursus</h2>
                <p className="course-full-content">{course.content}</p>

                {/* Materi / Modules */}
                {course.modules && course.modules.length > 0 && (
                    <>
                        <h2 className="sub-title">📍 Modul Kursus</h2>
                        {course.modules.map((module, idx) => (
                            <div key={idx} className="module-card">
                                <h3>{module.title}</h3>
                                {module.submodules && module.submodules.length > 0 && (
                                    <ul className="topic-list">
                                        {module.submodules.map((sub, subIdx) => (
                                            <li key={subIdx}>
                                                <strong>{sub.title}:</strong> {sub.content}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Exercises */}
                                {module.exercises && module.exercises.length > 0 && (
                                    <>
                                        <h4>📝 Latihan</h4>
                                        <ul className="topic-list">
                                            {module.exercises.map((ex, exIdx) => (
                                                <li key={exIdx}>{ex}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {/* Mini Project */}
                                {module.miniProject && (
                                    <>
                                        <h4>💻 Mini Project</h4>
                                        <p>{module.miniProject}</p>
                                    </>
                                )}
                            </div>
                        ))}
                    </>
                )}

                {/* Optional Benefits */}
                {course.benefits && course.benefits.length > 0 && (
                    <>
                        <h2 className="sub-title">✨ Benefit Belajar Kursus Ini</h2>
                        <ul className="benefit-list">
                            {course.benefits.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default CourseDetail;
