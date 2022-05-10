import React, { useState } from 'react'
import { IoMdBookmark, IoMdCall, IoMdChatboxes, IoMdClipboard, IoMdHammer, IoMdHome, IoMdImage, IoMdPerson } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'
import './Header.css'

const Sidebar = () => {
    const dispatch = useDispatch()
    const active = useSelector((state) => state.toggleSidebar.active);

    return (
        <>
            <Header/>
            <div className={active ? 'header-mobile' : 'header'}>

                <nav>
                    <ul className={active ? 'ul-item oicon' : 'ul-item'}>

                        <li>
                            <Link to='/dashboard'><IoMdImage className='icon' /><span>Dashboard</span></Link>
                        </li>


                        <li>
                            <Link to='/user_details'><IoMdBookmark className='icon' /><span>User</span></Link>
                        </li>


                        <li>
                            <Link to='/'><IoMdPerson className='icon' /><span>Testimonials</span></Link>
                        </li>


                        <li>
                            <Link to='/'><IoMdHome className='icon' /><span>Partners</span></Link>
                        </li>


                        <li>
                            <Link to='/'><IoMdChatboxes className='icon' /><span>About</span></Link>
                        </li>


                        <li>
                            <Link to='/'><IoMdHammer className='icon' /><span>Tutorials</span></Link>
                        </li>



                        <li>
                            <Link to='/'><IoMdCall className='icon' /><span>Contact</span></Link>
                        </li>


                        <li>
                            <Link to='/'><IoMdClipboard className='icon' /><span>FAQ</span></Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar