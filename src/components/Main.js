import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../App.css'

import Styles from './styles/Common.styles';

function Main() {
    const classes = Styles();
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
        <Container>
            <Box display='flex' flexDirection='column' justifyContent='center' className={classes.box}>
                <div>
                    <Typography align='center' variant='h1' className={classes.heading}>Welcome to the World of Cooking!</Typography>
                    <Typography align='center' variant='h2'>Cooking is an art and I hope you would like it</Typography>
                </div>


                <Box display='flex' mt={3} flexDirection='row' justifyContent='center' alignItems='center' >

                <Typography align='center' variant='h2' className={classes.search}> 
                Check out the Favorite one's here 
                </Typography>
                    <Link to={`/favorite`}>
                        <Button variant='contained' className={classes.btn}>Favorites</Button>
                    </Link>
                </Box>

                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                    <Typography align='center' variant='h2' className={classes.search}>How do you want to search a Recipie?</Typography>
                        <TextField className={classes.textField}  variant='outlined' type='text' onChange={onInputchange} placeholder='SearchBy?' InputProps={{
                      classes: { input: classes.input },
                      disableUnderline: true,
                    }}/>
                        <div>
                        <Link to={`/name/${value}`}>
                            <Button variant='contained' className={classes.btn}>Name</Button>
                        </Link>
                    

                        <Link to={`/ingredient/${value}`}>
                            <Button variant='contained' className={classes.btn}>Ingredient</Button>
                        </Link>
                    </div>
                </Box>

                <div>
                    <Typography align='center' variant='subtitle1' className={classes.subheading}>You can also search recipe according to their Categories</Typography>

                    <Grid container spacing={2}>

                        {cat ? (cat.map((rName) =>

                            <Grid item xs={12} lg={2}>

                              <Link to={`/category/${rName.strCategory}`} >
                                    <Box p={4} display='flex' justifyContent='center' alignItems='center' className={classes.card}>
                                        <Typography className={classes.name}>{rName.strCategory}</Typography>
                                    </Box>

                                </Link>
                            </Grid>

                        )) : (
                            <p>Data Unavailable Currently</p>
                        )}

                    </Grid>
                </div>
            </Box>

        </Container>

    )

}

export default Main;