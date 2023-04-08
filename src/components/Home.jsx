import React from 'react'
// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

const Home = () => {
    return (
        <div>
            <div >
                {/* <Navbar /> */}
                <Hero />
            </div>
            <Cards />
            <Footer />
        </div>
    )
}

export default Home