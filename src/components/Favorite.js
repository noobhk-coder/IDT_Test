import React, { useState, useEffect } from 'react';
import '../App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { getAllFav } from '../firebaseFun';

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
        <div>
            <div>
            Favorite page. These are our users preferences.
            </div>
            

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
        </div>
    )

}

export default Favorite;