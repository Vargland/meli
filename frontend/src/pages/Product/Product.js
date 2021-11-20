import { useParams } from 'react-router-dom';

function Product() {
    const { id } = useParams();

    return (
        <div> 
            <span> { id } </span>    
        </div>
    )
}

export default Product;
