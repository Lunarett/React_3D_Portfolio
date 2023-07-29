import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { PhotoGallery } from '../components';
import { styles } from '../styles';
import { projects } from '../constants';

const ProjectCard = ({ projects, duration }) => {
    const handleOpenUrl = () => {
        window.open(projects.gitLink, '_blank');
    };
    return (
        <div className='w-full bg-gradient-to-b from-[#b7e7fc] to-[#5fcbfd] p-[1px] rounded-xl shadow-2xl mb-40'>
            <div className='bg-ltc-3 dark:bg-dtc-3 rounded-xl'>
                <PhotoGallery photos={projects.photos} duration={duration} />
                <div className='p-5'>
                    <h1 className={`${styles.sectionHeadText}`}>{projects.title}</h1>
                    <p className='max-w-3xl leading-[30px] text-justify pb-10'>{projects.desc}</p>

                    <h3 className={`${styles.sectionSubText}`}>Tags</h3>
                    <div className='flex flex-row'>
                        {projects.tags.map((tag) => (
                            <div key={tag} className='bg-ltc-font-3 rounded-lg pt-1 pb-1 pr-2 pl-2 mr-2'>
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={handleOpenUrl} className='w-full hover:bg-black/50 p-5 mt-10 rounded-b-xl'>
                    View Source Code on GitHub
                </button>
            </div>
        </div>
    );
};

const Project = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const handleSearchInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchInput(inputValue);

        // Filter projects based on the search input
        const filtered = inputValue === ''
            ? projects // Show all projects if the search input is empty
            : projects.filter(
                (project) =>
                    project.title.toLowerCase().includes(inputValue.toLowerCase()) ||
                    project.tags.some((tag) => tag.toLowerCase().includes(inputValue.toLowerCase()))
            );

        setFilteredProjects(filtered);
    };

    return (
        <div className='flex flex-col items-center'>
            <h1 className={`${styles.sectionHeadText} pb-10`}>MY PROJECTS</h1>
            {/* Search bar */}
            <input
                type='text'
                placeholder='Search projects...'
                value={searchInput}
                onChange={handleSearchInputChange}
                className='border border-ltc-font-3 rounded-md p-2 w-1/2 mb-5'
            />

            {filteredProjects.map((project, index) => (
                <ProjectCard key={`project-${index}`} projects={project} />
            ))}
        </div>
    );
};

export default SectionWrapper(Project, 'project');