import './Breadcrumb.scss';

function Breadcrumb({ categories }) {
    const categoriesList = categories.map((category, index) => {
        return (
            <li className="breadcrumb__list__item" key={ index }>
                <span className="breadcrumb__list__link"> { category.name } </span> 
                { categories.length -1 > index ? <span className="breadcrumb__list__chevron"> &gt; </span> : null }
            </li>
        )
    })

    return (
        <div className="breadcrumb">
            <div>
                <ul className="breadcrumb__list">
                    { categoriesList }
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb;
