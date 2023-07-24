import Navbar from './Navbar';
import Hero from './Hero';

const Header = () => {
    return (
        <header className='relative z-10'>
            <div className="relative bg-hero-pattern bg-cover bg-fixed bg-center">
                <Navbar />
                <Hero />
            </div>
        </header>
    );
}

export default Header;