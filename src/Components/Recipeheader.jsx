import React from 'react'
import { Container } from 'react-bootstrap'

const Recipeheader = ({ recipe }) => {
    return (
        <Container className='recipie-header p-0' style={{ backgroundImage: `url(${recipe?.image})` }} fluid>
            <Container className='p-lg-5 p-md-4 p-5 header-cover' fluid>
                <Container className='text-center p-lg-5 p-md-4 p-4'>
                    <span className='p-5'>
                        <h6 className='text-white header-sub-text fw-bold'>{recipe?.name}</h6>
                    </span>
                </Container>
            </Container>
        </Container>
    )
}

export default Recipeheader