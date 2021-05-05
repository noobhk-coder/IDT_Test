import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css'

import Container from '@material-ui/core/Container';


function Name(props) {

    const [nameData, setNameData] = useState(undefined);
    const [load, setLoad] = useState(true);
    const [value, setValue] = useState(undefined);

    useEffect(

        () => {

            async function fetchData() {
                try {
                    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.match.params.search}`)
                    if (data) {
                        setNameData(data);
                        setLoad(false);
                    }
                } catch (e) {
                    console.log("Error in axios " + e);
                }
            }
            fetchData()
        }, [props.match.params.search, value]
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
                <p>Loading the recipe, if Not loaded recipe not present select from below list or Enter again.</p>
            ) : (
                <div>
                    <p>The List of recipe with this search name</p>

                    {nameData && nameData.meals ? (nameData.meals.map((rName) =>

                        <li>
                            <Link to={`/namer/${rName.idMeal}`}>
                                <p1>recipe is: {rName.strMeal}</p1>
                            </Link>
                        </li>

                    )) : (
                        <div>
                            <p>No data for this search! try a new search click the Chef hat or search below</p>

                            <input type='text' placeholder='Search' onKeyPress={onInputchange}></input><br />
                        </div>
                    )}

                </div>
            )}
        </Container>
    )
}


export default Name;