import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Robotic-<span className='green'>Tac</span>-<span className='blue'>Toe</span></h1>
            <div className="links">
                <Link to="/"><span className='homeLink'>Home</span></Link>
                <Link to="/about"><span className='aboutLink'>About</span></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;