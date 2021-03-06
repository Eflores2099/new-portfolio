import React, { useState, useEffect } from 'react'
import sanityClient from'../client.js'
import image from '../mathieu-daix.jpg'
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(()=> {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error)
    },[]);

    if(!author) return <div>Loading...</div>

    return (
        <main className="relative">
            <img  src={image} alt="Mathieu Daix. Mont-Blanc from Saleve" className=" sm:bg-gradient-to-s absolute w-full" />
            <div className="sm:p-0 lg:pt-48 container mx-auto relative">
                <section className="sm:bg-gradient-to-s relative w-full bg-green-800 rounded shadow-2xl lg:flex p-20">
                   <img src={urlFor(author.authorImage).url()} 
                   className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                   alt={author.name} 
                   />
                   <div className="text-lg flex flex-col justify-center">
                       <h1 className="sm: text-2xl lg:cursive text-6xl text-green-300 mb-4">
                           <span className="text-green-100">{author.name}</span>
                       </h1>
                       <div className="prose lg:prose-xl text-white">
                           <BlockContent 
                           blocks={author.bio} 
                           projectId="8s2ctpq"
                           dataset="production" 
                           />
                       </div>
                   </div>
                </section>
            </div>
        </main>
    )
}