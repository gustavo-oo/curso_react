import { useState } from "react";
import Layout from "../components/Layout";

export default function State(){
    const [counter, setCounter] = useState(0)
    
    return (
        <Layout>
            <h1>State: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
        </Layout>
    )
}