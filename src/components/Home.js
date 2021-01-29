import React from 'react'
import image from '../ergita-sela.jpg'


export default function Home() {
    return (
        <main>
            <img src={image} alt="Photo by Ergita Sela. the white theme" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-8 px-8" >
                <h1 className=" text=lg text-purple-400 font-medium leading-none lg:leading-snug home-name">Erik Flores. React Developer.</h1>
            </section>
            
        </main>
    )
}