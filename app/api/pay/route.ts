import { prisma } from '@/db/connect'
import { config } from '@/extra/config'
import mercadopago from 'mercadopago'
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model'

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN as string,
})

export async function POST(req: Request) {
    const { title, price, quantity } = await req.json()

    const preferences: CreatePreferencePayload = {
        items: [
            {
                title: title,
                unit_price: price,
                quantity: quantity,
                currency_id: 'ARS',
            }
        ],
        back_urls: {
            success: config.urls.base,
            failure: config.urls.base,
            pending: config.urls.base,
        },
        auto_return: 'approved',
    }

    const payment = await mercadopago.preferences.create(preferences)
    console.log(payment)

    return Response.json({  
        'url': payment.response.point_url,
    }, {
        status: 200,
    })
}