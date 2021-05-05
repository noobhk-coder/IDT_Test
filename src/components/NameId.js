import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
import { addFav,getFav,removeFav, incrementView } from '../firebaseFun';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import Styles from './styles/Common.styles';

function NameId(props) {
    const classes = Styles();

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
                content.push(
                    <Grid xs={12} lg={2}>
                <Box p={2} display='flex' justifyContent='center' alignItems='center' className={classes.ingredBox} key={i}>{value} {"==> "} {nameData[x]}</Box>
                </Grid>);
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
        <Container>
            {load ? (
                <p>Loading the recipe, if not loaded No such recipe with given Id.</p>
            ) : (

                <div className='App'>
                    <h1>A brief Recipie guide about - {nameData && nameData.strMeal}</h1>

                    {fav ? (
                        <div>
                            <Button variant='contained' className={classes.btn} type="button" onClick={() => removeFavorite(nameData.idMeal)}>Remove as Favorite</Button>
                        </div>

                    ) : (
                        <div>
                            <Button variant='contained' type="button" className={classes.btn} onClick={() => addFavorite(nameData.idMeal, nameData.strMeal)}>Add to Favorite</Button>
                        </div>

                    )}

                    <div>
                        <p>Category: <b>{nameData && nameData.strCategory}</b></p>

                        <div> 
                            {/* <Box display='flex' flexDirection='row' alignItems='center'> */}
                            <Grid container spacing={2}>
                            {getIngredientContent(content)}
                            </Grid>
                            {/* </Box> */}
                            </div>

                        <Typography align='left' variant='subtitle1' className={classes.para}>Instructions: {nameData && nameData.strInstructions}</Typography>

                    </div>

                </div>
            )}
        </Container>
    )
}

export default NameId;