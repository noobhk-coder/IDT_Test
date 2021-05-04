import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
import { addFav,getFav,removeFav, incrementView } from '../firebaseFun';

function NameId(props) {
    const [nameData, setNameData] = useState(undefined);
    const [load, setload] = useState(true);
    const [fav, setFav] = useState(false);
    const content = [];

    useEffect(
        () => {
            async function fetchData() {
                try {

                    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`);
                    if (data != null) {
                        setNameData(data.meals[0]);
                        let favValue = await getFav(props.match.params.id);
                        let incrView = await incrementView(props.match.params.id,data.meals[0].strMeal);
                        setFav(favValue);
                        setload(false);
                    }
                } catch (e) {
                    console.log("Error in axios " + e)
                }
            }
            fetchData();
        }, [props.match.params.id]
    )

    function getIngredientContent() {

        for (let i = 1; i < 21; i++) {
            let s = 'strIngredient' + i;
            let x = 'strMeasure' + i;
            let value = nameData[s];
            if (value != null && value.length > 0) {
                content.push(<li key={i}>{value} {"==> "} {nameData[x]}</li>);
            }
        }
        return content;
    };

    async function addFavorite(id, name) {

        const FavObj = {
            id: id,
            'RecipieName': name
        };

        try {
            const result = await addFav(id, FavObj);
            setFav(true);
            
        } catch (error) {
            console.log("Error in addFav "+error);
        }
        
    }

    async function removeFavorite(id, name) {

        const FavObj = {
            id: id,
            'RecipieName': name
        };

        try {
            const result = await removeFav(id);
            setFav(false);
            
        } catch (error) {
            console.log("Error in addFav "+error);
        }
    }

    return (
        <div>
            {load ? (
                <p>Loading the recipe, if not loaded No such recipe with given Id.</p>
            ) : (

                <div className='App'>
                    <h1>A brief Recipie guide about - {nameData && nameData.strMeal}</h1>

                    {fav ? (
                        <div>
                            <button type="button" onClick={() => removeFavorite(nameData.idMeal)}>Remove as Favorite</button>
                        </div>

                    ) : (
                        <div>
                            <button type="button" onClick={() => addFavorite(nameData.idMeal, nameData.strMeal)}>Add to Favorite</button>
                        </div>

                    )}

                    <div>
                        <p>Category: <b>{nameData && nameData.strCategory}</b></p>

                        <div> <ul>{getIngredientContent(content)}</ul></div>

                        <p>Instructions: {nameData && nameData.strInstructions}</p>

                    </div>

                </div>
            )}
        </div>
    )
}

export default NameId;