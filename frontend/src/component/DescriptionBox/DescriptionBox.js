import './DescriptionBox.scss'

function DescriptionBox({ description }) {
    return (
        <div className="description-box">
            <div className="description-box__title"> Descripción del producto </div>
            <div className="description-box__paragraph">
                <p> { description }  </p>
            </div>
        </div>
    )

}

export default DescriptionBox;
