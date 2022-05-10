import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import { useSelector } from "react-redux";
import base_url from "../api/api";

window.Buffer = window.Buffer || require("buffer").Buffer;

function Tabledata() {
  // debugger
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUserWithFetch();
  }, []);

  const getUserWithFetch = async () => {
    const response = await fetch(base_url + 'users/get_users_five');
    const jsonData = await response.json();
    setUserData(jsonData.data);
    // console.log(response)
  };

  // useEffect(() => {
  //   axios.get(base_url + "users/get_top_5_users", {
  //     headers: {
  //       jwt_auth: 'ADMIN',
  //       // "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: 'no-cors'
  //   })
  //     .then(response => {
  //       // debugger
  //       const cateogry_data = response.data.data
  //       setUserData(cateogry_data.categories)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])

  const active = useSelector((state) => state.toggleSidebar.active);

  const Timestamp = userData?.map(dateItem => {
    return dateItem.creation_time;
  })
  var utcSeconds = Timestamp;


// const convertToBase64 = (file) => {
//     return new Promise(resolve => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => {
//             resolve(reader.result);
//         }
//     })
// }


  //   console.log('user data', userData.email)

  return (
    // <div className={active ? 'content-mobile' : 'content'}>
    <>
      <header>
        <h2>GitHub User Data</h2>
      </header>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Account Type</th>
            <th>Creation Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            userData?.map((values, key) => {
              // console.log(values.email);
              return (
                <tr key={values.id}>
                  <td>{values.id}</td>
                  <td>{values.name}</td>
                  <td>{values.country_code + ' ' + values.mobile}</td>
                  <td>{values.email}</td>
                  <td>{values.status}</td>
                  <td>{values.user_type}</td>
                  <td>{values.creation_time}</td>
                  <td></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  );
}

export default Tabledata;