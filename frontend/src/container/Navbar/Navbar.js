import './Navbar.scss';

import { useNavigate } from 'react-router-dom'
import SearchBox from '../../component/SearchBox/SearchBox';

function Navbar({ onSearch, defaultValue }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <nav className="navbar">
            <div className="navbar__logo" onClick={handleClick}/>
            <div className="navbar__searchbox">
                <SearchBox  defaultValue={ defaultValue } onSearch={ onSearch } />
            </div>
        </nav>
    )
}

export default Navbar;
