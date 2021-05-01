import React from 'react'
import './navbar.css'
import {Brand} from './brand'
import {NotificationIcon} from '../'
export const Navbar = () => {
    return (
        <div className='navbar shadow flex flex-row justify-between items-center px-2 '>
            <Brand/>
            <Notification/>
        </div>
    )
}
