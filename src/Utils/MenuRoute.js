import React,{useState} from "react";
import { IoMdBookmark, IoMdCall, IoMdChatboxes, IoMdClipboard, IoMdHammer, IoMdHome, IoMdImage, IoMdMenu, IoMdPerson } from 'react-icons/io'
import { Link } from 'react-router-dom'

const useAuth = () => {
    const jwt_token = sessionStorage.getItem('token')
    if (!jwt_token) {
        return true
    }
    else {
        return false
    }
}



const MenuRoute = () => {

    const [active, setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    }
    const auth = useAuth();
    // debugger
    return (auth === true ? <div className='my-header'>
        <div className={active ? 'header-mobile' : 'header'} >

            <div className='menu-icon' onClick={activateNav}>

                {!active ? <IoMdMenu className='menu' /> : <IoMdMenu className='menu' />}

            </div>

            <nav>
                <ul className={active ? 'ul-item oicon' : 'ul-item'}>

                    <li>
                        <IoMdImage className='icon' />
                        <Link to='/'>Alumni</Link>
                    </li>


                    <li>
                        <IoMdBookmark className='icon' />
                        <Link to='/user_details'>User</Link>
                    </li>


                    <li>
                        <IoMdPerson className='icon' />
                        <Link to='/'>Testimonials</Link>
                    </li>


                    <li>
                        <IoMdHome className='icon' />
                        <Link to='/'>Partners</Link>
                    </li>


                    <li>
                        <IoMdChatboxes className='icon' />
                        <Link to='/'>About</Link>
                    </li>


                    <li>
                        <IoMdHammer className='icon' />
                        <Link to='/'>Tutorials</Link>
                    </li>



                    <li>
                        <IoMdCall className='icon' />
                        <Link to='/'>Contact</Link>
                    </li>


                    <li>
                        <IoMdClipboard className='icon' />
                        <Link to='/'>FAQ</Link>
                    </li>

                </ul>
            </nav>
        </div>
    </div> : null)

}

export default MenuRoute;