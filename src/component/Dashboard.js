import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Tabledata from "./table";
import UseridleTimer from '../Utils/IdleTimer';
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Dashboard = () => {

    

    const active = useSelector((state) => state.toggleSidebar.active);
    return (
        <div className="main-content">
            <Sidebar />
            <UseridleTimer></UseridleTimer>
            <div className={active ? 'content-mobile' : 'content'}>
                <Container>
                    <Tabledata />
                </Container>
            </div>
        </div>
    )
}

export default Dashboard;