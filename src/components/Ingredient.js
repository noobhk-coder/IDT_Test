import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css'
import Container from '@material-ui/core/Container';

function Ingredient(props) {

    const [ingrData, setIngrData] = useState(undefined);
    const [load, setLoad] = useState(true);
    const [value, setValue] = useState(undefined);

    useEffect(

        () => {

            async function fetchData() {
                try {

                    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${props.match.params.search}`)
                    if (data != null) {
                        setIngrData(data);
                        setLoad(false);

                    }

                } catch (e) {
                    console.log("Error in axios " + e);
                }
            }

            fetchData()
        }, [props.match.params.search]
    )

    function onInputchange(event) {

        if (event.key === "Enter") {
            event.preventDefault();
            setValue(event.target.value);
            props.match.params.search = event.target.value;
        }

    }

    return (

        <Container>
            {load ? (
                <p>Loading the recipe for the ingredient, if Not loaded recipe not present search again.</p>
            ) : (
                <div>
                    <p>The List of recipe with {props.match.params.search} ingredient in it are:</p>

                    {ingrData && ingrData.meals ? (ingrData.meals.map((rName) =>

                        <li>
                            <Link to={`/namer/${rName.idMeal}`}>
                                <p1>{rName.strMeal}</p1>
                            </Link>
                        </li>

                    )) : (
                        <div>
                            <p>No data for this search! try a new search click the Chef hat or search below new ingredient</p>

                            <input type='text' placeholder='Search' onKeyPress={onInputchange}></input><br />

                        </div>
                    )}

                </div>
            )}
        </Container>

    )
}


export default Ingredient;