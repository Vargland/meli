import './Navbar.scss';
import { isEmpty } from 'lodash';

import SearchBox from '../../component/SearchBox/SearchBox';

function Navbar() {
    function onSearch(currentValue) {
        if (isEmpty(currentValue)) {
            return;
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar__logo" />
            <div className="navbar__searchbox">
                <SearchBox onSearch={ onSearch } />
            </div>
        </nav>
    )
}

export default Navbar;
