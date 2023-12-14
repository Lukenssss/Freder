'use client'

import PayButton from '@/components/core/Pay'
import { Playfair_Display } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'
import Card from '@/components/core/Card'
import axios from 'axios'

const playfair = Playfair_Display({
    weight: ['400'],
    subsets: ['latin'],
})

export default function Shop() {
    const [items, setItems] = useState<any>([])

    axios.post('/api/all').then((response) => {
        if (response.status === 200) {
            response.data.items.forEach((el) => {
                setItems(prevState => [...prevState, {
                    urlId: el.urlId,
                    name: el.name,
                    price: el.price,
                    photos: el.photos[0],
                }])
            })
        }
    })

    return (
        <>
            <div className={'items-center absolute flex-col justify-center content-center flex flex-1 w-screen h-screen bg-white'}>
                <h1 style={playfair.style} className={'absolute left-10 top-10 text-2xl'}>Colección</h1>

                <div className={'overflow-y-scroll relative w-5/6 h-4/6 bg-transparent'}>
                    {items.map(({ photos, name, price, urlId }, index) => (
                        <Card key={index} title={name} price={price} url={photos} id={urlId} />
                    ))}
                </div>
            </div>
        </>
    )
}