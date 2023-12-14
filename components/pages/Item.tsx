'use client'

import { ItemProps } from '@/types/includes'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

export default function Item({ id }: ItemProps) {
    const [data, setdata] = useState({
        name: '',
        price: 0,
        images: [],
        description: '',
        stock: 0,
    })
 
    axios.post('/api/item', {
        itemId: id,
    }).then((response) => {
        if (response.status === 200) {
            console.log(response.data)
        }
    })

    return (
        <>
            <div className={'items-center flex-col justify-center content-center flex flex-1 w-screen h-screen bg-white'}>

            </div>
        </>
    )
}