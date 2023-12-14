'use client'

import Item from '@/components/pages/Item'
import { useParams, useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()
    const params = useParams()

    return (
        <>
            <Item id={params.itemId as string} />
        </>
    )
}