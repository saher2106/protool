import {NavLink} from 'react-router-dom';
import './Sidebar.css';
import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from "../assets/add_icon.svg";
import HomeIcon from "../assets/home_icon.svg";

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="user">
                    {/* avatar and username */}
                    <h3>Explore</h3>
                </div>
                <nav className="links">
                    <ul>
                        <li>
                            <NavLink exact to="/">
                                <img src={DashboardIcon} alt="dashboard-icon"/>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home">
                                <img src={HomeIcon} alt="home-icon"/>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/create">
                                <img src={AddIcon} alt="add-icon"/>
                                <span>New Project</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}