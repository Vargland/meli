import SearchBox from '../../component/SearchBox/SearchBox';
import './Navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo"> </div>
            <div  className="navbar__searchbox">
                <SearchBox />
            </div>
        </div>
    )
}

export default Navbar;
