import React, { useState } from 'react';
import Navigation from './Nav';
import About from './pages/About';
import Projects from './Projects';
import Contact from './pages/Contact';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
    const [currentPage, handlePageChange] = useState('About');



    const renderPage = () => {
        // Add a switch statement that will return the appropriate component of the 'currentPage'
        switch(currentPage) {
        case 'About': 
        return (<About></About>)

        case 'Portfolio': 
        return (<Projects></Projects>)

        case 'Contact': 
        return (<Contact></Contact>)

        default: 
        return(<About></About>)
        }

    };

    return (
        <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>
            {
            // Render the component returned by 'renderPage()'
            renderPage()
            }
        </div>
        </div>
    );
    }

export default Portfolio;
