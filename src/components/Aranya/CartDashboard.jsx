import React, { useState, useEffect } from 'react';
import Header from './Header';
import Chatbot from './Chatbot';
import Footer from './Footer';
import Cart from './Cart';

function CartDashboard() {
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
        <>
            <div className="leaf-bg" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)' }}>
                <Header toggleVrMode={toggleVrMode} />
                
                <Cart/>
                <Chatbot />
                <Footer />
            </div>
        </>
    );
}

export default CartDashboard;