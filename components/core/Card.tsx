'use client'

import axios from 'axios'
import { BiLogoDiscord } from 'react-icons/bi'
import mp from '@/public/svg/mp.svg'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CardProps } from '@/types/includes'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['300'],
    subsets: ['latin'],
})

export default function Card({ url, id, title, price, width }: CardProps) {
    const router = useRouter()

    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
    })
    const finalPrice = formatter.format(price as number)

    return (
        <>
            <div onClick={() => {
                router.push(`/${id}`)
            }} style={{
                backgroundImage: `url('${url}')`,
                backgroundSize: 'cover',
                width: width,
            }} className={'items-center justify-center content-center flex w-full h-full cursor-pointer bg-white'}>
                <div className={'absolute bottom-3 left-5'}>
                    <p style={roboto.style} className={'text-xs my-1'}>{title}</p>
                    <p style={roboto.style} className={'text-xs'}>{finalPrice}</p>
                </div>
            </div>
        </>
    )
}