import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import { toggleSidebar } from "../reducer/SidebarMenu";
const Sidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    $(function () {
      if ($(window).width() < 767) {
        setIsMobile(false);
      }
      $(document).delegate(".menulink", "click", (e) => {
        $(e.target).toggleClass("activeicon");
        $(e.target).next(".dropdownShow").toggleClass("show");
      });
    });
  }, []);

  const isOpen = useSelector((state) => state.toggleSidebar.isOpen);
  const [isMobile, setIsMobile] = useState(true);

  return (
    <>
      <div className={`sidemenu ${isMobile ? (isOpen ? "show" : "hide") : 'hide'}`}
      >
        <div className="sidemenuheader" onClick={() => dispatch(toggleSidebar())}>
          <h1>Test</h1>
        </div>
        <div className="sidemenubox">
          <ul>
            <li>
              <NavLink to="/admin/dashboard">
                <i className="las la-desktop"></i>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="submenuli">
              <button type="button" className={`${isMobile ? "menulink" : ""}`}>
                <i className="las la-store-alt"></i>
                <span>Centers</span>
              </button>
              <ul className={`${isOpen ? "dropdownShow" : ""} submenu `}>
                <li>
                  <NavLink to="/admin/add-center">
                    <i className="las la-angle-right"></i>Add Center
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/manage-center">
                    <i className="las la-angle-right"></i>Manage Centers
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <button className={`${isMobile ? "menulink" : ""}`}>
                <i className="las la-users"></i>
                <span>Users</span>
              </button>
              <ul className={`${isOpen ? "dropdownShow" : ""} submenu `}>
                <li>
                  <NavLink to="/admin/manage-user-role">
                    <i className="las la-angle-right"></i>Manage User Role
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/add-user">
                    <i className="las la-angle-right"></i>Add User
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/manage-user">
                    <i className="las la-angle-right"></i>Manage Users
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <button className={`${isMobile ? "menulink" : ""}`}>
                <i className="las la-file-alt"></i>
                <span>Application</span>
              </button>
              <ul className={`${isOpen ? "dropdownShow" : ""} submenu `}>
                <li>
                  <NavLink to="/admin/new-application">
                    <i className="las la-angle-right"></i>New Request
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/approved-application">
                    <i className="las la-angle-right"></i>Approved
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/pending-application">
                    <i className="las la-angle-right"></i>Pending
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <button className={`${isMobile ? "menulink" : ""}`}>
                <i className="las la-cog"></i>
                <span>Settings</span>
              </button>
              <ul className={`${isOpen ? "dropdownShow" : ""} submenu`}>
                <li>
                  <NavLink to="/admin/manage-state">
                    <i className="las la-angle-right"></i>State
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/manage-city">
                    <i className="las la-angle-right"></i>City
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/manage-block">
                    <i className="las la-angle-right"></i>Block
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
