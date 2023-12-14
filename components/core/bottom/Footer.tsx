'use client'

import { useEffect, useRef, useState } from 'react'
import { Playfair_Display, Roboto } from 'next/font/google'
import { CiSearch } from 'react-icons/ci'
import { PiBagThin } from 'react-icons/pi'

const roboto = Roboto({
    weight: ['300'],
    subsets: ['latin'],
})

export default function Footer() {
    return (
        <>
            <div className={'items-center flex-col justify-center relative top-0 left-0 content-center flex w-screen h-24 bg-white border-t border-t-black/10'}>

            </div>
        </>
    )
}