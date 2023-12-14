'use client'

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
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!loaded) {
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

            setLoaded(true)
        }
    }, [loaded])

    return (
        <>
            <div className={'items-center absolute flex-col justify-center content-center flex flex-1 w-screen h-screen bg-white'}>
                <h1 style={playfair.style} className={'absolute left-10 top-10 text-2xl'}>Colección</h1>

                <div className={'overflow-y-scroll items-center justify-center content-center relative md:gap-x-10 grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 w-5/6 h-4/6 bg-transparent'}>
                    {items.map(({ photos, name, price, urlId }, index) => (
                        <Card width={'100%'} key={index} title={name} price={price} url={photos} id={urlId} />
                    ))}
                </div>
            </div>
        </>
    )
}