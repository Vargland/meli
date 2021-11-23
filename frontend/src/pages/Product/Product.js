import './Product.scss'

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import { CONSTANTS } from '../../constants';

import Navbar from 'container/Navbar/Navbar';
import Description from 'container/Description/Description';
import Breadcrumb from 'component/Breadcrumb/Breadcrumb';

function Product() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ item, setItem ] = useState({})
    const [ itemDescription, setItemDescription ] = useState({})
    const [ categories, setCategories ] = useState();

    useEffect(() => {
        const fetchData = async() => { 
            const response = await fetch(`${CONSTANTS.API_URI}/items/${id}`)
                .then(response => response)
                .catch(err => console.error(err));

                return response.json();
        }

        const fetchCategories = async(categoryId) => {
            if (categoryId !== undefined) {
                const categories = await fetch(`${CONSTANTS.API_URI}/categories/${categoryId}`);

                return categories.json();
            }

        }

        fetchData()
            .then(data => {
                setItem(data.item);
                setItemDescription(data.item_description);

                fetchCategories(data.item.category_id)
                    .then(categories => setCategories(categories))
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err));
    }, [ id ]);

    function onSearch(currentValue) {
        if (isEmpty(currentValue)) {
            return;
        }

        navigate(`/items?search=${currentValue}`);
    }

    return (
        <div className="product">
            <Navbar  onSearch={ onSearch } />
            { categories === undefined ? null: <Breadcrumb categories={ categories.path_from_root } /> }
            <Description itemDetail={ item } itemDescription={ itemDescription }/>
        </div>
    );
}

export default Product;
