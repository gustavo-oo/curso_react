export default function handler(request, response){
    if(request.method === "GET"){
        handleGet(response)
    }else{
        response.status(405).send()
    }   
}

function handleGet(response){
    response.status(200).json({
        id: 3,
        name: 'Maria',
        age: 33
    })
}