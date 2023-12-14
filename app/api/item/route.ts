import { prisma } from '@/db/connect'
import { config } from '@/extra/config'

export async function POST(req: Request) {
    const { itemId } = await req.json()

    const item = await prisma.products.findUnique({
        where: {
            urlId: itemId,
        },
    })

    if (!item) {
        return Response.json({}, {
            status: 404,
        })
    }

    return Response.json({
        'item': item,
    }, {
        status: 200,
    })
}