import './Product.scss'

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import { CONSTANTS } from '../../constants';

import Navbar from 'container/Navbar/Navbar';
import Description from 'container/Description/Description';

function Product() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ item, setItem ] = useState({})
    const [ itemDescription, setItemDescription ] = useState({})

    useEffect(() => {
        const fetchData = async() => { 
            const response = await fetch(`${CONSTANTS.API_URI}/items/${id}`)
                .then(response => response)
                .catch(err => console.error(err))

                return response.json();
        }

        fetchData()
            .then(res => {
                setItem(res.item);
                setItemDescription(res.item_description)
            })
            .catch(err => console.error(err))
    }, [ id ]);

    function onSearch(currentValue) {
        if (isEmpty(currentValue)) {
            return;
        }

        navigate(`/items?search=${currentValue}`);
    }

    return (
        <div>
            <Navbar  onSearch={ onSearch } />
            <Description itemDetail={ item } itemDescription={ itemDescription }/>
        </div>
    )
}

export default Product;
