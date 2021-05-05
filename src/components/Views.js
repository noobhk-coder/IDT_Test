import React, { useState, useEffect } from 'react';
import '../App.css'
import { getAllViews } from '../firebaseFun';

function Views() {

    const [viewData, setViewData] = useState(undefined);

    useEffect(
        () => {
            async function fetchData() {
                try {
                    let allViews = await getAllViews();
                    setViewData(allViews);
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
                This is just a Page to show the views for every recipe been looked.
            </div>


            <div>
                {viewData ? (
                    
                    viewData.map((rName) =>
                        <li>
                            <p1>{rName.recipeName} viewed {rName.reads} time.</p1>
                        </li>

                    )
                ) : (
                    <div>
                        <p>No data favorites yet!</p>

                    </div>
                )}
            </div>
        </div>
    )

}

export default Views;