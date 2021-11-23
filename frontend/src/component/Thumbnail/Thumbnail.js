import './Thumbnail.scss';

function Thumbnail({size, source}) {
    return (
        <div className="thumbnail">
            <img
                alt="thumbnail"
                className={`thumbnail__image--${ size }`}
                src={ source } />    
        </div>
    )
}

export default Thumbnail;
