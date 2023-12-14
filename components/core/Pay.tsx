'use client'

import axios from 'axios'
import { BiLogoDiscord } from 'react-icons/bi'
import mp from '@/public/svg/mp.svg'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PayButton() {
    const router = useRouter()

    const buy = async () => {
        const response = await axios.post('/api/pay', {
            description: 'Apuntes',
            price: 1000,
            quantity: 1,
        }).then((response) => {
            return response.data.url
        })
        
        router.replace(response)
    }

    return (
        <>
            <div onClick={() => buy()} className={'items-center m-5 after:border-b-2 justify-center content-center flex w-72 h-16 rounded-lg cursor-pointer bg-white border-2 border-b-4 border-soft'}>
                <Image 
                    src={mp}
                    width={300}
                    height={300}
                    className={'w-10 h-10'}
                    alt={''}
                />
            </div>
        </>
    )
}