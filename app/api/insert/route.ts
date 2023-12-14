import { prisma } from '@/db/connect'
import { config } from '@/extra/config'
import mercadopago from 'mercadopago'

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN as string,
})

export async function POST(req: Request) {
    const { purchaseId } = await req.json()

    console.log(purchaseId)

    return Response.json({}, {
        status: 200,
    })
}