import { useState } from "react"

import Layout from "../components/Layout"

export default function Integration(){

    const [client, setClient] = useState({})
    const [client_id, setClientId] = useState(0)

    async function getClient(){
        const response = await fetch(`http://localhost:3001/api/client/${client_id}`)
        const data = await response.json()
        setClient(data)
    }
    

    return(
        <Layout>
            <div>
                <input type="number" 
                    min={0}
                    value={client_id} 
                    onChange={(event) => setClientId(event.target.value)}
                />

                <button onClick={() => getClient()}>Get Info</button>
            </div>
            <div>
                <ul>
                    <li>Code: {client.id}</li>
                    <li>Name: {client.name}</li>
                </ul>
            </div>
        </Layout>
    )
}