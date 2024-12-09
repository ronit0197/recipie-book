import React, { useEffect, useState } from 'react';
import { Container, Form, InputGroup, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import Recipiecard from '../Components/Recipiecard';
import axios from 'axios';

const Search = () => {
    const { s } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`https://dummyjson.com/recipes/search?q=${s === 'all' ? "" : s}`);
                setRecipes(response.data.recipes || []);
            } catch (err) {
                console.error("Error fetching recipes:", err);
                setError("Unable to fetch recipes. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [s]);

    const search = () => {
        if (searchKeyword.trim() === '') {
            navigate('/search/all');
        } else {
            navigate(`/search/${searchKeyword.trim()}`);
        }
    };

    return (
        <>
            <Container className="header p-0" fluid>
                <Container className="p-lg-5 p-md-4 p-5 header-cover" fluid>
                    <Container className="text-center p-lg-5 p-md-4 p-4">
                        <InputGroup className="mb-3 border border-success border-1 rounded">
                            <Form.Control
                                placeholder="Search your desired recipes..."
                                aria-label="Search recipes"
                                className="shadow-none border-0"
                                value={searchKeyword}
                                onChange={(e) => setSearchKeyword(e.target.value)}
                            />
                            <InputGroup.Text
                                onClick={search}
                                id="basic-addon2"
                                className="custom-btn text-white"
                                role="button"
                                aria-label="Search"
                            >
                                <Icon.Search />
                            </InputGroup.Text>
                        </InputGroup>
                    </Container>
                </Container>
            </Container>
            <Container fluid style={{ minHeight: "200px" }}>
                {loading ? (
                    <div className="text-center my-5">
                        <Spinner animation="border" variant="dark" />
                        <p>Loading recipes...</p>
                    </div>
                ) : error ? (
                    <div className="text-center text-danger my-5">
                        <p>{error}</p>
                    </div>
                ) : recipes.length === 0 ? (
                    <div className="text-center my-5">
                        <p>No recipes found for "{s}". Try another search.</p>
                    </div>
                ) : (
                    <div className="row">
                        {recipes.map((recipe, i) => (
                            <div key={i} className="col-lg-2 p-3">
                                <Recipiecard recipe={recipe} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </>
    );
};

export default Search;