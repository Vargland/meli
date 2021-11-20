import SearchBox from '../../component/SearchBox/SearchBox';
import './Navbar.scss';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo"> </div>
            <div  className="navbar__searchbox">
                <SearchBox />
            </div>
        </nav>
    )
}

export default Navbar;
