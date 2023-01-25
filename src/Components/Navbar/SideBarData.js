import * as FaIcons from "react-icons/fa"
import * as aiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import React from 'react'


export const SideBarData = [
    {
        title:'Home',
        path:'/',
        icon:<aiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'About',
        path:'/about',
        icon:<aiIcons.AiOutlineUser/>,
        cName:'nav-text'
    },
    {
        title:'Skills',
        path:'/skills',
        icon:<FaIcons.FaSpeakap/>,
        cName:'nav-text'
    },
    {
        title:'Project',
        path:'/project',
        icon:<aiIcons.AiFillProject/>,
        cName:'nav-text'
    },
    {
        title:'Contacts',
        path:'/contact',
        icon:<aiIcons.AiFillContacts/>,
        cName:'nav-text'
    },
]