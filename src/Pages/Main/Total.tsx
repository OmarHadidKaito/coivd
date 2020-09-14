import React from 'react';

import { getAllCase } from '../../services';

const APIfetcher = ()=>{
    getAllCase()
    .then(response=>{
        console.log()
    })
}

export const Total = ()=> {
    APIfetcher();
    return (
        <div></div>
    )
}
