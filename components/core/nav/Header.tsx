'use client'

import { useEffect, useRef, useState } from 'react'
import { Playfair_Display, Roboto } from 'next/font/google'
import { CiMenuBurger, CiSearch } from 'react-icons/ci'
import { PiBagThin, PiXThin } from 'react-icons/pi'
import { VscMenu, VscClose } from 'react-icons/vsc'
import Image from 'next/image'
import Icon from '@/public/images/Icon.png' 
import { useRouter } from 'next/navigation'
import Modal from './Modal'

const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin'],
})

export default function Header() {
    const [opened, setOpened] = useState(false)
    const [modalOpened, setModalOpened] = useState(false)
    const router = useRouter() 

    return (
        <>
            <div className={'items-center flex-col justify-center relative border-b-black/10 border-b left-0 content-center flex w-screen h-14 bg-transparent'}>
                <ul className={'md:flex flex-row absolute hidden left-10'}>
                    <li className={'mx-3'}>
                        <a href={'/shop'} className={'text-xxs tracking-widest'} style={roboto.style}>SHOP</a>
                    </li>
                    <li className={'mx-3'}>
                        <a href={'/journal'} className={'text-xxs tracking-widest'} style={roboto.style}>JOURNAL</a>
                    </li>
                    <li className={'mx-3'}>
                        <a onClick={() => {
                            modalOpened ? setModalOpened(false) : setModalOpened(true)
                        }} className={'text-xxs cursor-pointer tracking-widest'} style={roboto.style}>AYUDA</a>
                    </li>
                </ul>
                {opened ? <VscClose className={'absolute md:hidden text-lg left-7'} onClick={() => setOpened(false)} /> : <VscMenu className={'absolute md:hidden text-lg left-7'} onClick={() => setOpened(true)} />}

                <h1 className={'text-3xl cursor-pointer'} onClick={() => router.push('/')}>🥤</h1>
                {/* <Image 
                    onClick={() => router.push('/')}
                    alt={''}
                    className={'w-10 h-10 cursor-pointer'}
                    width={500}
                    height={500}
                    src={Icon}
                /> */}

                <ul className={'absolute right-5 md:right-10 flex flex-row'}>
                    <li className={'mx-3'}>
                        <a href={'/'}><CiSearch className={'text-xl'} /></a>
                    </li>
                    <li className={'mx-3'}>
                        <a href={'/cart'}><PiBagThin className={'text-xl'} /></a>
                    </li>
                </ul>
            </div>

            <Modal opened={modalOpened} />
        </>
    )
}