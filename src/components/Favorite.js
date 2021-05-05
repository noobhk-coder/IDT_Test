import React, { useState, useEffect } from 'react';
import '../App.css'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { getAllFav } from '../firebaseFun';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Favorite() {

    const [favData, setFavData] = useState(undefined);

    useEffect(
        () => {
            async function fetchData() {
                try {
                    let allFav = await getAllFav();
                    setFavData(allFav);
                } catch (e) {
                    console.log("Error in axios " + e)
                }
            }
            fetchData();
        }, []
    )

    return (
        <Container>
            <Box mt={3}>
            Favorite page. These are our users preferences.
            </Box>
            
            <div>
                {favData ? (favData.map((rName) =>

                    <li>
                        <Link to={`/namer/${rName.id}`}>
                            <p1>recipe is: {rName.RecipieName}</p1>
                        </Link>
                    </li>

                )) : (
                    <div>
                        <p>No data favorites yet!</p>

                    </div>
                )}
            </div>
        </Container>
    )

}

export default Favorite;