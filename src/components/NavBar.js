import React from 'react';
import { NavLink } from 'react-router-dom';
import {SocialIcon } from 'react-social-icons'

export default function NavBar() {
    return (
        <header className="bg-gray-900">
            <div className="container mx-auto flex justify-between">
                <nav className='flex'>
                    <NavLink 
                        to ='/' 
                        exact 
                        activeClassName='text-white'
                        className='inflex-flex items-center py-8 px-3 mr-4 text-red-100 hover:text-#f97316 text-4xl font-bold tracking widest'>
                        Home
                    </NavLink>
                    <NavLink 
                        to= '/projects'
                        activeClassName='text-white-100 bg-blue-700'
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-300'>
                        Projects
                    </NavLink>
                    <NavLink 
                        to= '/posts'
                        activeClassName='text-white-100 bg-blue-700'
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-300'>
                        Blog Posts
                    </NavLink>
                    <NavLink    
                        to ='/about'
                        activeClassName='text-white-100 bg-blue-700'
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-300'>
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/eflores2099/" className="mr-4" target="_blank" fgColor='#fff' style={{height:35, width: 35}}/>
                    <SocialIcon url="https://github.com/Eflores2099" className="mr-4" target="_blank" fgColor='#fff' style={{height:35, width: 35}}/>
                    <SocialIcon url="https://twitter.com/Erik96636380" className="mr-4" target="_blank" fgColor='#fff' style={{height:35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}