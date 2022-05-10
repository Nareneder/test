import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Container, Button, Accordion } from "react-bootstrap";
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import base_url from "../api/api";
import axios from "axios";
import AddNewUser from "./AddNewUser";

const UserTable = () => {
  // debugger;

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUserWithFetch();
  }, []);

  const getUserWithFetch = async () => {
    const response = await fetch(base_url + 'users/get_users');
    const jsonData = await response.json();
    setUserData(jsonData.data);
    // console.log(response)

  };
  const hendleDelete = async (id) => {
    setUserData(userData.filter((item) => item.id !== id));
    const response = await axios.post(base_url + 'users/delete_user',
      ({ user_id: id })
    )
    console.log(response.data)
  }
  const handleSort = (column, sortDirection) => {
    console.log(column.selector, sortDirection);
  }

  const active = useSelector((state) => state.toggleSidebar.active);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {

      name: "User name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
    },
    {
      name: "Status",
      selector: (row) => {

        if (row.status === '0') {
          return (
            <div className='usr_stats'>
              <Button className="disabl">Disabled</Button>
            </div>
          )
        } else if (row.status === '1') {
          return (
            <div className='usr_stats'>
              <Button className="activ">Active</Button>
            </div>
          )
        }

      },

    },
    {
      name: "Account Type",
      selector: (row) => {
        if(row.user_type === '0') {
          return(
            <span>Trial</span>
          )
        }else if(row.user_type === '1') {
          return(
            <span>Free</span>
          )
        } else if(row.user_type === '2') {
          return(
            <span>Premium</span>
          )
        }
      },
    },
    {
      name: "Creaction Date",
      selector: (row) => {
        const unixTime = row.creation_time;
        const reald = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(unixTime);
        return (
          <span>{reald}</span>
        )
      },
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <div>
            <Link to={"/edit_user/id=" + row.id}>
              <EditIcon />
            </Link>
            <Link to={'/user/id=' + row.id}>
              <VisibilityIcon />
            </Link >
            <DeleteIcon className='usr_dltlist' onClick={() => hendleDelete(row.id)} />
          </div>
        )
      },
    },
  ]

  return (
    <>
      <Sidebar />
      <div className={active ? 'content-mobile' : 'content'}>
        <Container fluid className="mb-5">
          <Accordion defaultActiveKey="0" className="mb-4 mt-2">
            <Accordion.Item eventKey="1">
              <Accordion.Header>ADD User</Accordion.Header>
              <Accordion.Body>
                <AddNewUser />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <h4>User List</h4>
          <DataTable columns={columns} data={userData} pagination={Number} fixedHeader fixedHeaderScrollHeight="450" />
        </Container>
      </div>
    </>
  )
}
export default UserTable;