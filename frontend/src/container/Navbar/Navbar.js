import './Navbar.scss';

import SearchBox from '../../component/SearchBox/SearchBox';

function Navbar({ onSearch, defaultValue }) {
    return (
        <nav className="navbar">
            <div className="navbar__logo" />
            <div className="navbar__searchbox">
                <SearchBox  defaultValue={ defaultValue } onSearch={ onSearch } />
            </div>
        </nav>
    )
}

export default Navbar;
