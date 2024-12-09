import React from 'react'
import { Container } from 'react-bootstrap'

const Header = () => {
    return (
        <Container className='header p-0' fluid>
            <Container className='p-lg-5 p-md-4 p-5 header-cover' fluid>
                <Container className='text-center p-lg-5 p-md-4 p-4'>
                    <h1 className='text-light header-text mb-2'>Recipe-Book</h1>
                    <h6 className='text-white header-sub-text'>Search delicious recipies!</h6>
                </Container>
            </Container>
        </Container>
    )
}

export default Header