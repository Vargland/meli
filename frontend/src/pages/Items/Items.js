import './Items.scss';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { CONSTANTS } from '../../constants';

import Navbar from '../../container/Navbar/Navbar';
import Results from '../../container/Results/Results';

function Items() {
    const [ data, setData ] = useState([]);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchValue = searchParams.get('search');

    useEffect(() => {
        const fetchData = async() => {
                const response = await fetch(`${CONSTANTS.API_URI}/search?q=${searchValue}&limit=4`);

                return response.json();
        }
    
        //TODO MUST RETURN RESULTS. FIX SERVER RESPONSE.
        fetchData()
            .then(data => { 
                setData(data);
            })
            .catch(err => console.error(err))
    }, [ searchValue ]);

    function onSearch(currentValue) {
        if (isEmpty(currentValue)) {
            return;
        }

        setSearchParams({ search: currentValue })
    }

    return (
        <div className="items">
            <Navbar defaultValue={ searchValue } onSearch={ onSearch } />
            { data && data.results === undefined ? null : <Results dataResults={ data.results }/> }
        </div>
    )
}

export default Items;
