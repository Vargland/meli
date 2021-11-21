import './SearchBox.scss';
import { useState } from 'react';

function SearchBox({ onSearch }) {
    const [ currentValue, setSearchValue ] = useState('');

    return (
        <div className="searchbox">
            <div className="searchbox__input__container">
                <input
                    className="searchbox__input"
                    placeholder="Nunca dejes de buscar"
                    value={ currentValue }
                    onChange={ (event) => setSearchValue(event.target.value) }/>
            </div>
            <div className="searchbox__button__container">
                <button className="searchbox__button" onClick={ () => onSearch(currentValue) } /> 
            </div>
        </div>
    )
}

export default SearchBox;
