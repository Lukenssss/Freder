import { prisma } from '@/db/connect'

export async function POST(req: Request) {
    const items = await prisma.products.findMany({})

    if (!items) {
        return Response.json({}, {
            status: 404,
        })
    }

    return Response.json({
        'items': items,
    }, {
        status: 200,
    })
}