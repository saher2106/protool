import './Navbar.css';
import prologo from '../assets/slack.svg';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <div className="navbar">
            <ul>
            <li className="logo">
                    <img src={prologo} alt="projectlogo"/>
                    <span>Pro<span>Tool</span></span>
                </li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li>
                    <button className='btn'>Logout</button>
                </li>
            </ul>
        </div>
    )
}