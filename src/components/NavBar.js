import React from 'react';
import { NavLink } from 'react-router-dom';
import {SocialIcon } from 'react-social-icons'

export default function NavBar() {
    return (
        <header className="bg-green-600 bg-opacity-50">
            <div className=" font-nunito container  flex justify-between">
                <nav className='flex'>
                    <NavLink 
                        to ='/' 
                        exact 
                        activeClassName='text-purple-900'
                        className='inflex-flex items-center py-8 px-3 mr-4 text-purple-900 hover:text-red-100 text-4xl font-bold tracking widest'>
                        Home
                    </NavLink>
                    <NavLink 
                        to= '/projects'
                        activeClassName='text-green-300 bg-green-100'
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-purple-900 hover:text-red-100'>
                        Projects
                    </NavLink>
                    <NavLink 
                        to= '/posts'
                        activeClassName='text-green-300 bg-green-100'
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-purple-900 hover:text-red-100'>
                        Blog 
                    </NavLink>
                    <NavLink    
                        to ='/about'
                        activeClassName='text-green-300 bg-green-100'
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-purple-900 hover:text-red-100'>
                        About
                    </NavLink>
                </nav>
                 <div className="hidden lg:inline-flex py-3 px-3 my-6 ">
                    <SocialIcon url="https://www.linkedin.com/in/eflores2099/" className="mr-4" target="_blank" fgColor='#fff' style={{height:35, width: 35}}/>
                    <SocialIcon url="https://github.com/Eflores2099" className="mr-4" target="_blank" fgColor='#fff' style={{height:35, width: 35}}/>
                    <SocialIcon url="https://twitter.com/Erik96636380" className="mr-4" target="_blank" fgColor='#fff' style={{height:35, width: 35}}/>
                </div> 
            </div>
        </header>
    )
}