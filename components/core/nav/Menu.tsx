'use client'

import axios from 'axios'
import { BiLogoDiscord } from 'react-icons/bi'
import mp from '@/public/svg/mp.svg'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ModalProps } from '@/types/includes'
import { Playfair_Display, Roboto } from 'next/font/google'

const playfair = Playfair_Display({
    weight: ['400'],
    subsets: ['latin'],
})

const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin'],
})

export default function Modal({ opened }: ModalProps) {
    const router = useRouter()
    const [open, setOpen] = useState(opened)

    if (!opened) {
        return null
    }

    return (
        <>
            <div onBlur={() => {
                setOpen(false)
            }} className={'items-center left-0 justify-center content-center absolute top-[5.75rem] z-10 flex w-screen h-24 bg-white border-b-black/10 border-b'}>
                <p className={'left-14 absolute'} style={playfair.style}>Contacto</p>

                <ul className={'absolute flex flex-col left-44'}>
                    <li style={roboto.style} onClick={() => router.push('https://instagram.com/frered')} className={'list-none cursor-pointer text-xxs hover:text-gray-500 my-2'}>
                        Instagram: @freder
                    </li>
                    <li style={roboto.style} className={'list-none cursor-pointer text-xxs hover:text-gray-500 my-1'}>
                        Whatsapp: +54 9 11 23120984
                    </li>
                </ul>
            </div>
        </>
    )
}