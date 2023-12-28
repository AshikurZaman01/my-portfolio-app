import React, { useEffect, useState } from 'react';
import './Main.css';
import Card from './Card';

const Main = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All Projects');

    useEffect(() => {
        fetch('../../../../public/projects.json')
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setFilteredProjects(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleFilter = (category) => {
        if (category === 'All Projects') {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(
                (project) => project.category.toLowerCase() === category.toLowerCase()
            );
            setFilteredProjects(filtered);
        }

        setActiveCategory(category);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="lg:flex justify-center items-cente gap-2">
                <div className="left-section sm:w-[100%] md:w-[30%] lg:w-[20%] md:mb-0 mb-10 ">
                    <div className="flex flex-col justify-start items-start gap-10 ">
                        <button
                            className={`buttons ${activeCategory === 'All Projects' ? 'active' : ''}`}
                            onClick={() => handleFilter('All Projects')}
                        >
                            All Projects
                        </button>
                        <button
                            className={`buttons ${activeCategory === 'Tailwind CSS' ? 'active' : ''}`}
                            onClick={() => handleFilter('Tailwind CSS')}
                        >
                            Tailwind CSS
                        </button>
                        <button
                            className={`buttons ${activeCategory === 'Frontend' ? 'active' : ''}`}
                            onClick={() => handleFilter('Frontend')}
                        >
                            Frontend
                        </button>
                        <button
                            className={`buttons ${activeCategory === 'FullStack' ? 'active' : ''}`}
                            onClick={() => handleFilter('FullStack')}
                        >
                            FullStack
                        </button>
                    </div>
                </div>


                <div className="right-section w-[70%] mx-auto lg:mt-0 mt-10">
                    <div className="grid lg:grid-cols-2  grid-cols-1  gap-10">
                        {filteredProjects.map((project, index) => (
                            <Card project={project} key={index}></Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
