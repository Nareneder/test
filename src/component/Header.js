import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoMdMenu, IoMdContact } from 'react-icons/io'
import { toggleSidebar } from '../reducer/SidebarMenu'
import { Dropdown, NavLink } from "react-bootstrap";

const Header = () => {
    const dispatch = useDispatch();
    const active = useSelector((state) => state.toggleSidebar.active);
    const navigate = useNavigate();
    const handlelogout = () => {
        sessionStorage.clear();
        navigate("/");
    };
    const user = JSON.parse(sessionStorage.getItem('user'));
    return (
        <>
            <div className="adminheader sticky-top">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div className="adminheadermenubtn">
                            <div className='menu-icon' onClick={() => dispatch(toggleSidebar())}>

                                {!active ? <IoMdMenu className='menu' /> : <IoMdMenu className='menu' />}

                            </div>
                        </div>
                    </div>
                    <div className="admintopright">
                        <ul className="list-unstyled mb-0">
                            {/* <Dropdown>
                                <Dropdown.Toggle variant="success" id="user_btn">
                                    <IoMdContact /> {user.username}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="drop_hover">
                                    <Dropdown.Item>Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={handlelogout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown> */}
                            <li className="dropdown show" id="user_btn">
                                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <IoMdContact /> {user.username}
                                </button>
                                <div className="drop_hover" aria-labelledby="dropdownMenuButton">
                                    <NavLink className="dropdown-item">Profile</NavLink>
                                    <NavLink className="dropdown-item" onClick={handlelogout}>Logout</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
