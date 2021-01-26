import React from 'react'
import image from '../felix-besombes.jpg'


export default function Home() {
    return (
        <main>
            <img src={image} alt="blue laptop"className="absolute oject-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8" >
                <h1 className=" text=6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Bon jour! I'm Erik.</h1>
            </section>
            
        </main>
    )
}