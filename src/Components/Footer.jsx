import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row className="gy-4">
                    {/* Company Info */}
                    <Col md={4}>
                        <h5 className="fw-bold">About Us</h5>
                        <p className="small">
                            We provide the best recipes for food enthusiasts. Discover, cook, and share the joy of cooking with our curated recipes from around the world.
                        </p>
                    </Col>

                    {/* Quick Links */}
                    <Col md={4}>
                        <h5 className="fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Icon.Search size={10} /><a href="/search" className="text-light text-decoration-none ms-2">Search</a></li>
                        </ul>
                    </Col>

                    {/* Social Media */}
                    <Col md={4}>
                        <h5 className="fw-bold">Follow Us</h5>
                        <div className="d-flex gap-3">
                            <a href="https://facebook.com" className="text-light fs-4">
                                <Icon.Facebook size={20} />
                            </a>
                            <a href="https://twitter.com" className="text-light fs-4">
                                <Icon.Twitter size={20} />
                            </a>
                            <a href="https://instagram.com" className="text-light fs-4">
                                <Icon.Instagram size={20} />
                            </a>
                            <a href="https://linkedin.com" className="text-light fs-4">
                                <Icon.Linkedin size={20} />
                            </a>
                        </div>
                    </Col>
                </Row>
                <hr className="border-light my-4" />
                <Row>
                    <Col className="text-center">
                        <p className="mb-0 small">© 2024 Recipe-Book. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
