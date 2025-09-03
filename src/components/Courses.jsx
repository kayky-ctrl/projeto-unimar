import { useApp } from "../hooks/useApp";
import React from "react";

function Courses() {
    const { courses } = useApp();
    const [searchTerm, setSearchTerm] = React.useState('');

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="main-container">
            <div className="courses-header">
                <h2>Cursos da UNIMAR</h2>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Buscar curso..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-primary">Buscar</button>
                </div>
            </div>

            <div className="courses-grid">
                {filteredCourses.map(course => (
                    <div key={course.id} className="course-card">
                        <div className="course-image">
                            {course.title}
                        </div>
                        <div className="course-content">
                            <h3 className="course-title">{course.title}</h3>
                            <div className="course-info">
                                <span>Duração: {course.duration}</span>
                                <span>Período: {course.period}</span>
                            </div>
                            <p>Vagas disponíveis: {course.vacancies}</p>
                            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                Mais Informações
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses; 