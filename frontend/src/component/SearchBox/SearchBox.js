import './SearchBox.scss';
import { useState } from 'react';

function SearchBox({ onSearch, defaultValue }) {
    const [ currentValue, setSearchValue ] = useState('');

    function keyDown(event) {
        if (event.key === 'Enter' ) {
            event.preventDefault();
            onSearch(currentValue);
        }
    }

    return (
        <form className="searchbox">
            <div className="searchbox__input__container">
                <input
                    className="searchbox__input"
                    placeholder="Nunca dejes de buscar"
                    defaultValue={ defaultValue }
                    onKeyDown={ (e) =>  keyDown(e) }
                    onChange={ (event) => setSearchValue(event.target.value) }/>
            </div>
            <div className="searchbox__button__container">
                <button
                    className="searchbox__button"
                    type="button"
                    onClick={ () => onSearch(currentValue) } /> 
            </div>
        </form>
    )
}

export default SearchBox;
