import { useEffect, useState } from "react";

export default (url, method = 'get') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        fetch(url, {method: method})
            .then(response => response.json())
            .then(json => setResponse({
                ...response, 
                data: json,
                loading: false
            }))
    }, [url, method])

    return response
}