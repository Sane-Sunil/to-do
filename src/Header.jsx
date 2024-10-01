import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="headerdiv">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header