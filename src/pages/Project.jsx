import React from 'react';
import { SectionWrapper } from '../hoc';
import { PhotoGallery } from '../components';
import { github, rsr1, rsr2, rsr3, rsr4, rsr5 } from '../assets';
import { styles } from '../styles';
import { projects } from '../constants';

const ProjectCard = ({ projects, duration }) => {
    const handleOpenUrl = () => {
        window.open(projects.gitLink, '_blank');
    }
    return (
        <div className='w-full bg-gradient-to-b from-[#b7e7fc] to-[#5fcbfd] p-[1px] rounded-xl shadow-2xl mb-40'>
            <div className='bg-ltc-3 dark:bg-dtc-3 rounded-xl'>
                <PhotoGallery photos={projects.photos} duration={duration} />
                <div className='p-5'>
                    <h1 className={`${styles.sectionHeadText}`}>{projects.title}</h1>
                    <p className='max-w-3xl leading-[30px] text-justify'>{projects.desc}</p>
                </div>

                <button onClick={handleOpenUrl} className='w-full hover:bg-black/50 p-5 mt-10 rounded-b-xl'>View Source Code on GitHub</button>
            </div>
        </div>
    );
}

const Project = () => {
    const rsr = [rsr1, rsr2, rsr3, rsr4, rsr5];

    return (
        <div className='flex flex-col'>
            {projects.map((project, index) => (
                <ProjectCard
                    key={`project-${index}`}
                    projects={project}
                />
            ))}
        </div>
    );
}

export default SectionWrapper(Project, 'project')