
export const feedback = [
    {
        id: 1,
        message:"Best For fastFood"
    },
    {
        id: 2,
        message:"service is satisfy"
    }
]

export async function GET() {
    return Response.json({
        status: 200,
        message: 'Hello World'
    })
}