import { useState, useEffect } from 'react';
import Header from '../Aranya/Header.jsx';
import Footer from '../Aranya/Footer.jsx';
import PotsSection from './PotsSection.jsx';
import Chatbot from '../Aranya/Chatbot.jsx';

function Potsdashboard() {
    const [vrMode, setVrMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.parallax-leaf');
            if (parallax) {
                parallax.style.setProperty('--scroll-y', `${scrolled * 0.5}px`);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleVrMode = () => {
        setVrMode(!vrMode);
    };

    return (
        <div className="leaf-bg" style={{background: 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)'}}>
            <Header toggleVrMode={toggleVrMode} />
            <div className='mt-5' style={{marginTop:'66px'}}>
                <PotsSection />
            </div>
            <Chatbot/>
            <Footer />
        </div>
    );
}

export default Potsdashboard;