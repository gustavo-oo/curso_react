export default function handler(request, response){
    const code = request.query.code

    response.status(200).json({
        id: code,
        name: `Maria ${code}`
    })
}