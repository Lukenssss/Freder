import { prisma } from '@/db/connect'
import { config } from '@/extra/config'

export async function POST(req: Request) {
    const items = await prisma.products.create({
        data: {
            urlId: 3,
            name: 'Pantalon Track Azul ',
            price: 28000,
            stockS: 6,
            stockM: 4,
            stockL: 2,
            stockXL: 9,
            description: 'El mejor pantalon track de todos, solo por una cosa. La unica calidad!',
            photos: [
                'https://freres.ar/wp-content/uploads/2023/07/Prendas-Julio-6-scaled.jpg',
                'https://freres.ar/wp-content/uploads/2023/07/Detalles-Julio_9-1280x1924.jpg',
                'https://freres.ar/wp-content/uploads/2023/07/Detalles-Julio_10-1280x1924.jpg',
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