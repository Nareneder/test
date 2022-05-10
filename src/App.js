import React, { Suspense, lazy, useState } from 'react';
// import './component/Header.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicRoute from './Utils/PublicRoutes';
import PrivateRoute from './Utils/PrivateRoutes';
import PageNotFound from './component/PageNotFound';
import UserTable from './component/UserTable';
import ViewUser from './component/ViewUser';
import AddNewUser from './component/AddNewUser';
import AOS from 'aos';
import "aos/dist/aos.css";
import UpdateUser from './component/UpdateUser';
const Login = lazy(() => import('./component/Login'));
const Dashboard = lazy(() => import('./component/Dashboard'));
// import cors from 'cors';

function App() {

  AOS.init();

  return (
    <div className="App">
        <Router>
          {/* <SideBar> */}
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<PublicRoute />}>
                  <Route path="/" element={<Login />} />
                </Route>

                <Route path="/" element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/user_details" element={<UserTable />} />
                  <Route path="/user/:Id" element={<ViewUser />} />
                  <Route path="/add_user" element={<AddNewUser />} />
                  <Route path="/edit_user/:Id" element={<UpdateUser />} />
                </Route>
                <Route path="/:pageName" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          {/* </SideBar> */}

        </Router>
    </div>
  );
}

export default App;
