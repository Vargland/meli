import './Results.scss';
import { useNavigate } from 'react-router-dom';

import Thumbnail from '../../component/Thumbnail/Thumbnail';

function Results({ dataResults }) {
    const navigate = useNavigate();

    function navigateProduct(id) {
        navigate(`/items/${id}`);
    }

    const resultsList = dataResults.map((result, key) => {
        const id = result.id;

        return (
            <div className="results__container" key={key}>
                <div className="results__description">
                    <div className="results__description__thumbnail"  onClick={ () => navigateProduct(id) }>
                        <Thumbnail size='small' source ={ result.thumbnail }/>
                    </div>
                    <div className="results__description__detail"  onClick={ () => navigateProduct(id) }>
                        <span className="results__description__detail__price">$ { result.price } </span>
                        <span className="results__description__detail__title"> { result.title } </span>
                    </div>
                    <div className="results__description__location">
                        <span> { result.address.state_name } </span>
                    </div>
                </div>
            </div>
        )
    })

    return (<div className="results">{ resultsList }</div>)
}

export default Results;
