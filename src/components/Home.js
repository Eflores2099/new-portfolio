import React from 'react'
import image from '../ergita-sela.jpg'


export default function Home() {
    return (
        <main>
            <img src={image} alt="Ergita Sela. the white theme" className="sm:bg-gradient-to-s  md:absolute object-cover w-full h-full "/>
            {/* <img src={image} alt="Ergita Sela. the white theme" className=" bg-gradient-to-l md:bg-gradient-to-r "/> */}
            <section className="relative flex-col justify-center min-h-full pt-12 lg:pt-20 px-8" >
                <h1 className="sm:text-left text-purple-900 font-small leading-none lg:leading-snug home-name text-left">Erik Flores</h1>
                <h2 className="sm:text-left mt-4 text-purple-900 text-6xl font-small leading-none lg:leading-snug text-left">React Developer</h2>
            </section>
            
        </main>
    )
}