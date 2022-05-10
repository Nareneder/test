import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Table } from "react-bootstrap"
import axios from 'axios'
import base_url from "../api/api";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

// const res = await axios.get(`http://34.234.48.138:3600/users/get_users/${id}`).then(response => { 
//       console.log(response)
//     })
//     .catch(error => {
//         console.log(error.response)
//     });
//     setUser(res.data);
//   }



function ViewUser() {

    const [user, setUser] = useState({
        country_code: '',
        mobile: '',
        name: '',
        email: '',
        profile_picture: '',
        user_type: '',
        login_type: '',
        fb_id: '',
        gmail_id: '',
        apple_id: '',
        is_social: '',
        social_type: '',
        device_type: '',
        device_token: '',
        device_id: '',
        creation_time: '',
        is_guest: '',
        last_login: '',
        otp_verification: '',
        notification_status: '',
        status: '',
        id: '',
        password: ''
    });
    const params = useParams();
    useEffect(() => {
        getGitHubUserWithFetch();
    }, []);
    const getGitHubUserWithFetch = async () => {
        const response = await fetch(base_url + `users/user_details?user_${params.Id}`);
        const jsonData = await response.json();
        setUser(jsonData.data);

    };


    // console.warn(user.name)
    // http://34.234.48.138:3600/groups/get_group_detail?group_id=0
    // const baseurl = (`http://34.234.48.138:3600/groups/get_groups/${id}`);
    // const [userData, setUserData] = useState([]);
    // console.log('user data', userData)
    // useEffect(() => {
    //   getGitHubUserWithFetch();
    // }, []);
    // const getGitHubUserWithFetch = async () => {
    //   const response = await fetch(baseurl);
    //   const jsonData = await response.json();
    //   // console.log(jsonData)
    //   setUserData(jsonData.data);

    // };



    //   console.log('user data', userData.email)

    const active = useSelector((state) => state.toggleSidebar.active);

    return (
        <>
            <Sidebar />
            <div className={active ? 'content-mobile' : 'content'}>
                <Container fluid className="mt-3 mb-5">
                    <Row>
                        <Col><h4>User Details</h4></Col>
                    </Row>
                    <Row>
                        <Col lg="3">
                            <img src={user.profile_picture} className="img-fluid" />
                        </Col>
                        <Col lg="9">
                            <Row>
                                <Col lg="6">
                                    <p><strong>Id : </strong >{user.id}</p>
                                </Col>
                                <Col lg="6">
                                    <p><strong>Name : </strong>{user.name}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="6">
                                    <p><strong>Email : </strong>{user.email}</p>
                                </Col>
                                <Col lg="6">
                                    <p><strong>Phone Number : </strong>{user.country_code} {user.mobile}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="6">
                                    <p><strong>Password : </strong>{user.password}</p>
                                </Col>
                                <Col lg="6">
                                    <p><strong>Login Via : </strong>{/* {user.country_code} */} email</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="6">
                                    <p><strong>Date/Time of Registration : </strong>{new Intl.DateTimeFormat('en-US').format(user.creation_time)}</p>
                                </Col>
                                <Col lg="6">
                                    <p><strong>Last Login : </strong>{user.last_login}</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}


export default ViewUser;