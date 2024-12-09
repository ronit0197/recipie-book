import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipeheader from '../Components/Recipeheader';
import { Container, Spinner } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const Recipe = () => {
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    // Fetch recipes from the API
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/recipes/' + id);
                setRecipe(response.data); // Assuming the API returns a single recipe object
            } catch (error) {
                console.error("Error fetching recipes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [id]);

    // Render star rating
    const renderRating = (rating) => {
        const maxRating = 5;
        const stars = [];
        for (let i = 1; i <= maxRating; i++) {
            stars.push(
                <Icon.StarFill
                    key={i}
                    className={`me-1 ${i <= rating ? 'text-warning' : 'text-muted'}`}
                />
            );
        }
        return stars;
    };

    return (
        <Container className='m-0 p-0' fluid>
            <Recipeheader recipe={recipe} />
            {
                loading
                    ?
                    <Container className="p-5 text-center" fluid>
                        <Spinner className="me-3" animation="grow" variant="dark" size="sm" />
                        <Spinner animation="grow" variant="dark" size="sm" />
                        <Spinner className="ms-3" animation="grow" variant="dark" size="sm" />
                    </Container>
                    :
                    <Container className='p-3' fluid>
                        <div className='row'>
                            <div className="col-lg-3 bg-light p-2 shadow mb-lg-0 mb-md-4 mb-4">
                                <img className='w-100' src={recipe.image} alt={recipe.name} />
                            </div>
                            <div className="col-lg-9">
                                <p className='d-flex align-items-center fw-bold'><Icon.Duffle className='me-2' /><span>{recipe.cuisine}</span></p>
                                <p className='d-flex align-items-center'>
                                    <span className='me-3 border border-1 p-1 rounded d-flex align-items-center'>Preparation<Icon.Clock className='ms-1 me-2' /><span className='me-1'>{recipe.prepTimeMinutes}</span>min</span>
                                    <span className='me-3 border border-1 p-1 rounded d-flex align-items-center'>Cooking<Icon.Clock className='ms-1 me-2' /><span className='me-1'>{recipe.cookTimeMinutes}</span>min</span>
                                </p>
                                <p className='d-flex align-items-center'>
                                    <span className='me-3 border border-1 p-1 rounded'>Difficulty<Icon.Dot className='ms-1 me-2' /><span className='me-1'>{recipe.difficulty}</span></span>
                                    <span className='me-3 border border-1 p-1 rounded'>Calories<Icon.Dot className='ms-1 me-2' /><span className='me-1'>{recipe.caloriesPerServing}</span></span>
                                    <span className='me-3 border border-1 p-1 rounded'><Icon.People className='ms-1 me-2' /><span className='me-1'>{recipe.servings}</span></span>
                                </p>
                                <p className='d-flex align-items-center'>
                                    <span className='me-3 border border-1 p-1 rounded'>Meal Type<Icon.Dot className='ms-1 me-2' />
                                        {
                                            recipe.mealType?.map((type, i) => (
                                                <span className='me-1' key={i}>{type},</span>
                                            ))
                                        }
                                    </span>
                                </p>
                                <p className='d-flex align-items-center'>
                                    <span className='me-3 border border-1 p-1 rounded'>Ingredients<Icon.Basket className='ms-2' /></span>
                                </p>
                                <p>
                                    <span className=''>
                                        <ul>
                                            {
                                                recipe.ingredients?.map((ingredient, i) => (
                                                    <li key={i}>{ingredient}</li>
                                                ))
                                            }
                                        </ul>
                                    </span>
                                </p>
                                <p>
                                    <span className='me-2'>Instructions:</span>
                                    {recipe.instructions?.map((instruction, i) => (
                                        <div key={i}>{instruction}</div>
                                    ))}
                                </p>
                                <p className='d-flex align-items-center'>
                                    <span className='me-3'>Rating:</span>
                                    {renderRating(recipe.rating)} <span>{recipe.rating}</span>
                                </p>
                            </div>
                        </div>
                    </Container>
            }
        </Container>
    );
}

export default Recipe;