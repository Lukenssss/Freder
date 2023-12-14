'use client'

import PayButton from '@/components/core/Pay'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import Header from '@/components/core/nav/Header'
import Alerts from '@/components/core/nav/Alerts'
import Card from '@/components/core/Card'
import { Playfair_Display } from 'next/font/google'
import axios from 'axios'

const playfair = Playfair_Display({
    weight: ['400'],
    subsets: ['latin'],
})

export default function Home() {
    const [items, setItems] = useState<any>([])
    const [index, setIndex] = useState(0)
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
                    initialSlide={index}
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
                    onSlideChange={(swiper) => {
                        setIndex(swiper.activeIndex)
                    }}
                >
                    {items.map(({ urlId, name, price, photos }, index) => (
                        <SwiperSlide className={'bg-transparent'} key={index}>
                            <Card title={name} price={price} url={photos} id={urlId} />
                        </SwiperSlide>
                    ))}
                    {/* <SwiperSlide className={'bg-transparent'}>
                        <Card title={'Buzo Creme Chill'} price={40000} url={'https://freres.ar/wp-content/uploads/2023/11/Productos-Noviembre-6-scaled.jpg'} id={'1'} />
                    </SwiperSlide>
                    <SwiperSlide className={'bg-transparent'}>
                        <Card title={'Buzo Pantan Fly'} price={45000} url={'https://freres.ar/wp-content/uploads/2023/05/Productos-Mayo-23-21-scaled.jpg'} id={'2'} />
                    </SwiperSlide>
                    <SwiperSlide className={'bg-transparent'}>
                        <Card title={'Jean Corder'} price={27500} url={'https://freres.ar/wp-content/uploads/2023/11/Prendas-Octubre-2-7-scaled.jpg'} id={'3'} />
                    </SwiperSlide>
                    <SwiperSlide className={'bg-transparent'}>
                        <Card title={'Remera Croco Creme'} price={15000} url={'https://freres.ar/wp-content/uploads/2023/10/Prendas-Octubre-scaled.jpg'} id={'4'} />
                    </SwiperSlide>
                    <SwiperSlide className={'bg-transparent'}>
                        <Card title={'Remera Olive Lisa'} price={12500} url={'https://freres.ar/wp-content/uploads/2023/11/prendas_septiembre_8-scaled.jpeg'} id={'5'} />
                    </SwiperSlide>
                    <SwiperSlide className={'bg-transparent'}>
                        <Card title={'Pantalon Tracki Azul'} price={25000} url={'https://freres.ar/wp-content/uploads/2023/07/Prendas-Julio-6-scaled.jpg'} id={'6'} />
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </>
    )
}