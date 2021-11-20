import './SearchBox.scss';

function SearchBox() {
    return (
        <div className="searchbox">
            <div className="searchbox__input__container">
                <input placeholder="Nunca dejes de buscar" className="searchbox__input" />
            </div>
            <div className="searchbox__button__container">
                <button className="searchbox__button" /> 
            </div>
        </div>
        
    )
}

export default SearchBox;
