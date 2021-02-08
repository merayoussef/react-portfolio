import React from 'react';
import 'react-bootstrap';
import { Nav } from 'react-bootstrap';


function Navigation(props) {
    const tabs = ['About Me', 'Portfolio', 'Contact'];
    return (
        <Nav bg='light' expand='lg'>
            <h1>Mera Youssef</h1>
        {tabs.map(tab => (
            <li className="" key={tab}>
            <a
                href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                }
            >
                {tab}
            </a>
            </li>
        ))}
        </Nav>
    );
}

export default Navigation;