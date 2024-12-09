import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Recipiecard = ({ recipe }) => {
    return (
        <div className="cardWrapper">
            <Card className="recipeCard animated">
                <Card.Img variant="top" src={recipe.image} alt={recipe.name} className="cardImage" />
                <Card.Body>
                    <Card.Title className="cardTitle">{recipe.name}</Card.Title>
                    <Card.Text className="cardText">
                        <Badge className='me-2' pill bg="light" text="dark">
                            <Icon.Clock className='me-2' />{recipe.cookTimeMinutes} min
                        </Badge>
                        <Badge pill bg="light" text="dark">
                            <Icon.Duffle className='me-2' />{recipe.cuisine}
                        </Badge>
                    </Card.Text>
                    <Card.Text className="cardText">
                        <Badge className='me-2' pill bg="light" text="dark">
                            <span className='me-1'>Can serve</span><Icon.People className='me-2' />{recipe.servings}
                        </Badge>
                        <Badge className='me-2' pill bg="light" text="dark">
                            <span className='me-2'>Dificulty:</span>{recipe.difficulty}
                        </Badge>
                    </Card.Text>
                    <Button as={Link} to={"/recipe/" + recipe.id} variant="primary" className="cardButton w-100">
                        View Recipe<Icon.Book className='ms-2' />
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Recipiecard