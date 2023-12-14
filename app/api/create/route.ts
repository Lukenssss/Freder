import { prisma } from '@/db/connect'
import { config } from '@/extra/config'

export async function POST(req: Request) {
    const { itemId } = await req.json()

    const items = await prisma.products.create({
        data: {
            urlId: '1',
            name: 'Remera Oversize Croco',
            price: 21000,
            stockS: 10,
            stockM: 4,
            stockL: 10,
            stockXL: 10,
            description: 'El mejor buzo de todos, solo por una cosa. La unica calidad!',
            photos: [
                'https://freres.ar/wp-content/uploads/2023/10/Prendas-Octubre-1280x1280.jpg',
                'https://freres.ar/wp-content/uploads/2023/10/Prendas-Octubre-1-1280x1280.jpg',
            ],
        }
    })

    if (!items) {
        return Response.json({}, {
            status: 404,
        })
    }

    return Response.json({}, {
        status: 200,
    })
}