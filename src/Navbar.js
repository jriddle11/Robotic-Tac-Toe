import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
            <div className="steveType">
                <Link to="/" className='steveButton' onClick={() => {window.scroll(0, 0); }}><span className='link'>Badass</span></Link>
                <Link to="/santa" className='steveButton' onClick={() => {window.scroll(0, 0); }}><span className='link double'>Merry<br/> Christmas</span></Link>
            </div>
     );
}
 
export default Navbar;