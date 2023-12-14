'use client'

import axios from 'axios'
import { BiLogoDiscord } from 'react-icons/bi'
import mp from '@/public/svg/mp.svg'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Form() {
    const router = useRouter()

    return (
        <>
            <div className={'items-center m-5 after:border-b-2 justify-center content-center flex w-72 h-16 rounded-lg cursor-pointer bg-white border-2 border-b-4 border-soft'}>

            </div>
        </>
    )
}