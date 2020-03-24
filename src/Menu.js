import React from 'react';
import About from './About'
import Nav from './Nav'
import Contact from './Contact'
import AddTxt from './AddTxt'
import Gallery from './Gallery'
import Home from './Home'
import NotFound from './NotFound'
import './App.css'
import {Route, BrowserRouter as Router} from 'react-router-dom'

const Menu =[ 
    {
exact :true ,
path:"/" ,
component:Home
    } ,
    {
        path:"/about" ,
        component:About
            } ,
            {
                path:"/gallery" ,
                component:Gallery
                    } ,
                    {
                        path:"/addtxt" ,
                        component:AddTxt
                            } ,
                            {
                                path:"/contact" ,
                                component:Contact
                                    } ,
                                
                                    {
                                        path:"*",
                                        component: NotFound
                                            } ,
]


export default Menu