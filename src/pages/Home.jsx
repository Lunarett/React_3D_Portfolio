import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero, About, Experience, Qualification, Tech } from '../components';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.state?.hash;
        if (hash) {
            const sectionElement = document.querySelector(`#${hash}`);
            if (sectionElement) {
                sectionElement.scrollIntoView();
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <div className="relative bg-white dark:bg-black bg-cover bg-fixed bg-center">
                <Hero />
            </div>

            <About />
            <Experience />
            <Qualification />
            <Tech />
        </>
    );
}

export default Home;