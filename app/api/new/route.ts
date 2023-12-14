import { prisma } from '@/db/connect'
import { config } from '@/extra/config'

export async function POST(req: Request) {
    const items = await prisma.products.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })

    if (!items) {
        return Response.json({}, {
            status: 404,
        })
    }
    
    return Response.json({
        'items': items.slice(0, 6),
    }, {
        status: 200,
    })
}