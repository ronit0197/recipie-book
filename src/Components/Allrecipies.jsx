import React, { useEffect, useState } from 'react';
import Recipiecard from './Recipiecard';
import axios from 'axios';
import { Container, Spinner, Button } from 'react-bootstrap';

const Allrecipies = () => {
    const [recipes, setRecipes] = useState([]);
    const [visibleRecipes, setVisibleRecipes] = useState(18); // Initially show 20 recipes
    const [loading, setLoading] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);

    // Fetch recipes from the API
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/recipes?limit=100");
                setRecipes(response.data.recipes); // Assuming the API returns an array under `recipes`
            } catch (error) {
                console.error("Error fetching recipes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    const handleLoadMore = () => {
        setVisibleRecipes((prev) => prev + 18); // Load 20 more recipes on each click
    };

    if (loading) {
        return (
            <Container className="p-5 text-center" fluid>
                <Spinner className="me-3" animation="grow" variant="dark" size="sm" />
                <Spinner animation="grow" variant="dark" size="sm" />
                <Spinner className="ms-3" animation="grow" variant="dark" size="sm" />
            </Container>
        );
    }

    return (
        <Container fluid>
            <div className="row">
                {recipes.slice(0, visibleRecipes).map((recipe, i) => (
                    <div key={i} className="col-lg-2 p-3">
                        <Recipiecard recipe={recipe} />
                    </div>
                ))}
            </div>
            {visibleRecipes < recipes.length && (
                <div className="text-center my-4">
                    <Button onClick={handleLoadMore} variant="primary" className='load-more'>
                        {buttonLoading ? (
                            <>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span className="ms-2">Loading...</span>
                            </>
                        ) : (
                            "Load More"
                        )}
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default Allrecipies;
