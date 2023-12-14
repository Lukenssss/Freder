'use client'

import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Card from '@/components/core/Card'
import { Playfair_Display } from 'next/font/google'
import axios from 'axios'

const playfair = Playfair_Display({
    weight: ['400'],
    subsets: ['latin'],
})

export default function Home() {
    const [items, setItems] = useState<any>([])
    const [loaded, setLoaded] = useState(false)
    const [slidesPerView, setSlidesPerView] = useState(3)

    useEffect(() => {
        if (!loaded) {
            if (window.innerWidth < 700) {
                setSlidesPerView(1)
            }

            axios.post('/api/new', {}).then((response) => {
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
                <h1 style={playfair.style} className={'absolute left-10 top-10 text-2xl'}>New In</h1>

                <Swiper
                    draggable={true}
                    slidesPerView={slidesPerView}
                    spaceBetween={50}
                    className={'w-5/6 top-0 relative left-0 h-1/2'}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        reverseDirection: false,
                        disableOnInteraction: true,
                    }}
                    normalizeSlideIndex={true}
                >
                    {items.map(({ urlId, name, price, photos }, index) => (
                        <SwiperSlide className={'bg-transparent'} key={index}>
                            <Card width={'100%'} title={name} price={price} url={photos} id={urlId} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}