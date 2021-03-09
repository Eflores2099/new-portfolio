import React from 'react'
import image from '../ergita-sela.jpg'
import {SocialIcon } from 'react-social-icons'


export default function Home() {
    return (
        <main>
            <img src={image} alt="Ergita Sela. the white theme" className="sm:bg-gradient-to-s  md:absolute object-cover w-full h-full bg-gradient-to-tr sm:opacity-100 md:opacity-75"/>
            {/* <img src={image} alt="Ergita Sela. the white theme" className=" bg-gradient-to-l md:bg-gradient-to-r "/> */}
            <section className="relative flex-col justify-center min-h-full pt-12 lg:pt-20 px-8" >
                <h1 className="sm:text-left text-purple-900 text-7xl leading-none lg:leading-snug text-left">Erik Flores</h1>
                <h2 className="sm:text-left text-purple-900 text-5xl leading-none lg:leading-snug text-left">React Developer</h2>

                <div className="inline-flex py-3 px-3 my-6 xs:visible sm:invisible lg:invisible ">
                    {/* <SocialIcon url="https://www.linkedin.com/in/eflores2099/" className="mr-4" target="_blank" fgColor='#fff' style={{height:35, width: 35}}/>
                    <SocialIcon url="https://github.com/Eflores2099" className="mr-4" target="_blank" fgColor='#fff' style={{height:35, width: 35}}/>
                    <SocialIcon url="https://twitter.com/Erik96636380" className="mr-4" target="_blank" fgColor='#fff' style={{height:35, width: 35}}/> */}
                </div> 
            </section>
            
        </main>
    )
}