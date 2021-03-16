import {Link} from "react-router-dom";
import './styles.css'
export default function Navbar() {
    return (
        <div className="container">
            <header>
                <h1 className="logo">Colob</h1>
                <nav>
                    <Link to="/" className="links">Home</Link>
                    <Link to="/books" className="links">Books</Link>
                    <Link to="/table" className="links">Table</Link>
                    <Link to="/blogs" className="links">Blogs</Link>                    
                </nav>
                <div className="reg">
                <Link to="/account"><button>Account</button></Link>
                </div>
                
            </header>
        </div>
        
    )
}
