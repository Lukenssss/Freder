'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddButton() {
    const router = useRouter()

    return (
        <>
            <div className={'items-center m-5 after:border-b-2 justify-center content-center flex w-72 h-16 rounded-lg cursor-pointer bg-white border-2 border-b-4 border-soft'}>

            </div>
        </>
    )
}