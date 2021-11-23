import './BuyBox.scss';

function BuyBox({ item }) {
    return (
        <div className="buybox">
            <div>
                <div className="buybox__condition">
                    <span>{ item.condition === 'new' ? 'Nuevo' : 'Usado' } - { item.sold_quantity } vendidos  </span>
                </div>
                <div className="buybox__title">
                    <h1>{ item.title }</h1>
                </div>
                <div className="buybox__price">
                    <span>$ { item.price }</span>
                </div>
            </div>
            <div className="buybox__button__container">
                <button className="buybox__button"> Comprar </button>
            </div>
        </div>
    )
}

export default BuyBox;
