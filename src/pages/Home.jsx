import React from 'react';
import Banner from '../components/Banner';
import AboutMe from './AboutMe';
import EdEx from './EdEx';
import Training from './Training';
import ContactMe from './ContactMe';

const Home = () => {
    return (
        <section
            className="relative"
            style={{
                background: `linear-gradient(
                    135deg, 
                    #BB84E8 0%, 
                    #131625 30%, 
                    black 50%, 
                    #131625 70%, 
                    #BB84E8 100%)`,
                minHeight: "100vh", // Ensures the gradient covers the whole page
            }}
        >
            {/* Content */}
            <div className="relative flex items-center justify-center h-screen">
                <Banner />
            </div>
            <div className="py-16 flex items-center justify-center h-screen">
                <AboutMe />
            </div>
            <div id="education" className="py-16 flex items-center justify-center h-screen">
                <EdEx />
            </div>
            <div id="training" className="py-16 flex items-center justify-center h-screen mt-24">
                <Training />
            </div>
            <div className="py-16 flex items-center justify-center mt-10">
                <ContactMe />
            </div>
        </section>
    );
};

export default Home;
