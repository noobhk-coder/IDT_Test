import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../App.css'

function Main() {

    const [value, setValue] = useState(undefined);
    const [cat, setCat] = useState(undefined);

    useEffect(

        () => {
            async function fetchCategory() {
                try {

                    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
                    if (data != null) {
                        setCat(data.meals);
                    }

                } catch (e) {

                }

            }

            fetchCategory();
        }, []
    )

    function onInputchange(event) {

        event.preventDefault();
        setValue(event.target.value);
    }

    return (
        <div>
            <div>
                <div>
                    <h1 className='Main-h1'>Welcome to the World of Cooking!</h1>
                    <h2>Cooking is an art and I hope you would like it</h2>
                </div>


                <div>
                    Check out the Favorite one's of users
                    <Link to={`/favorite`}>
                        <button type='button'>Favorites</button>
                    </Link>
                </div>

                <input type='text' placeholder='Search' onChange={onInputchange}></input><br />
                <Link to={`/name/${value}`}>
                    <button type='submit'>SearchBy Name</button>
                </Link>
                <p> OR </p>
                <Link to={`/ingredient/${value}`}>
                    <button type='submit'>SearchBy Ingredient</button>
                </Link>

                <p>You can also search recipe according to their Categories</p>

                <div>

                    {cat ? (cat.map((rName) =>

                        <li>
                            <Link to={`/category/${rName.strCategory}`}>
                                <p1>{rName.strCategory}</p1>
                            </Link>
                        </li>

                    )) : (
                        <p>Data Unavailable Currently</p>
                    )}

                </div>

            </div>



        </div>

    )

}

export default Main;