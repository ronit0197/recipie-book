import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

const ResponsiveNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Handle navbar scroll effect
    const handleScroll = () => {
        if (window.scrollY > 50) setIsScrolled(true);
        else setIsScrolled(false);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine if the current location contains "/search"
    const isSearchPage = location.pathname.startsWith('/search');

    // Extract the current search term or default to "all"
    const searchTerm = location.pathname.split('/search/')[1] || 'all';

    return (
        <Navbar className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`} expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand className="text-white fw-bold navbar-brand" as={Link} to="/">
                    <img className='logo' src="/images/logo/logo.png" alt="Logo" />
                </Navbar.Brand>
                <Link to={isSearchPage ? "/" : `/search/${searchTerm}`} className="login-btn">
                    {isSearchPage ? <Icon.House size={15} /> : <Icon.Search size={15} />}
                </Link>
            </Container>
        </Navbar>
    );
};

export default ResponsiveNavbar;
