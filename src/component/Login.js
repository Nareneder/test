import React, { useState, useEffect, useRef, useContext } from "react";
import AuthContext from "../context/Authprovider";
import base_url from "../api/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getToken, getUser } from "../Utils/common";
import { Form, Button } from "react-bootstrap";
import EmailIcon from '@material-ui/icons/Email';
import VpnLockIcon from '@material-ui/icons/VpnLock';

const LOGIN_URL = 'login/admin_login'



const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        setErrMsg('');
    }, [email, password])




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(base_url + LOGIN_URL, JSON.stringify({ email, password }),
                {
                    headers: {
                        'Accept': 'application/json',
                        // 'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                });

            const accessToken = response && response.data && response.data.data ? response.data.data.jwt : "";
            const user_data = response && response.data && response.data.data ? response.data.data.user_data : "";
            const roles = response?.data?.roles;
            setAuth({ email, password, roles, accessToken })
            setEmail('');
            setPassword('');
            // debugger
            setSuccess(response.data.status);
            getUser(user_data);
            getToken(accessToken);
            if (accessToken) {
                history('/dashboard')
            } else {
                alert('Please check Username/Password');
            }
        } catch (err) {
            console.log(err);
            if (!err?.response) {
                setErrMsg('No server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === false) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <div className="login_outer">
            <section className="login_container" data-aos="zoom-in" data-aos-duration="1000">
                <h5>SIGN IN TO PHOTO BOMB</h5>
                <Form onSubmit={handleSubmit} className="login_form">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className="mb-3 position-relative">
                        <EmailIcon className="form-control-icon" />
                        <Form.Control
                            type="text"
                            id="email"
                            placeholder="Email"
                            className="border-0 border-bottom rounded-0"
                            ref={userRef}
                            onChange={(e) => setEmail(e.target.value)} value={email}
                            size="lg"
                        />
                    </div>
                    <div className="mb-3 position-relative">
                        <VpnLockIcon className="form-control-icon" />
                        <Form.Control
                            size="lg"
                            type="password"
                            id="password"
                            className="border-0 border-bottom rounded-0"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} value={password}
                        />
                    </div>
                    <div className="d-grid">
                        <Button type="submit" size="lg">Login</Button>
                    </div>
                </Form>
            </section>
        </div>
    )
}

export default Login;