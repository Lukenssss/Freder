'use client'

import { ItemProps } from '@/types/includes'
import axios from 'axios'
import { Playfair_Display, Roboto } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const playfair = Playfair_Display({
    weight: ['400'],
    subsets: ['latin'],
})

const roboto = Roboto({
    weight: ['300'],
    subsets: ['latin'],
})

export default function Item({ id }: ItemProps) {
    const [items, setItems] = useState<any>()

    const formatter = Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
    })
    const price = formatter.format(items?.price)
 
    axios.post('/api/item', {
        itemId: id,
    }).then((response) => {
        if (response.status === 200) {
            setItems(response.data.item)
        }
    })

    return (
        <>
            <div className={'items-center relative flex-col justify-center content-center flex flex-1 w-screen h-screen bg-white'}>
                <div className={'absolute right-0 top-0 w-2/6 h-4/6 bg-transparent'}>
                    <div className={'m-10'}>
                        <h1 className={'text-2xl'} style={playfair.style}>{items?.name}</h1>
                        <p className={'mt-2'} style={roboto.style}>{price}</p>
                    </div>
                </div>

                <Swiper
                    draggable={true}
                    slidesPerView={1}
                    spaceBetween={50}
                    direction={'horizontal'}
                    className={'w-2/5 bg-transparent m-12 absolute left-12 top-0 h-1/2'}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        reverseDirection: false,
                        disableOnInteraction: true,
                    }}
                    normalizeSlideIndex={true}
                >
                    {items?.photos.map((value, index) => (
                        <SwiperSlide className={'bg-transparent'} key={index}>
                            <Image
                                src={value}
                                alt={items?.name}
                                width={1000}
                                height={1000}
                                className={'w-full h-full'}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}