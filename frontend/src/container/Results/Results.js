import './Results.scss';
//import { useEffect, useState } from 'react';

function Results({ dataResults }) {
    console.log('dataResults', dataResults)

    const resultsList = dataResults.map((result) => {
        return (
            <div className="results__container">
                <div className="results__information">
                    <div className="results__information__thumbnail__container">
                        <img className="results__information__thumbnail" src={ result.thumbnail } />
                    </div>
                    <div className="results__information__detail">
                        <span className="results__information__detail__price">$ { result.price } </span>
                        <span className="results__information__detail__title"> { result.title } </span>
                    </div>
                    <div className="results__information__location">
                            <span> { result.address.state_name } </span>
                        <div>
                        </div>
                    </div>
                </div>
            </div>

        )
    })

    return (<div className="results">{ resultsList }</div>)
}

export default Results;
