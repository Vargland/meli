
import './Main.scss';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';

import Navbar from '../../container/Navbar/Navbar';

function Main() {
    const navigate = useNavigate();

    function onSearch(currentValue) {
        if (isEmpty(currentValue)) {
            return;
        }
        navigate(`/items?search=${currentValue}`);
    }

    return (
        <div className="mainpage">
            <Navbar onSearch={ onSearch } />
        </div>
    )
} 

export default Main;
