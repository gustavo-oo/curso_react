import Layout from "../../components/Layout"
import { useRouter } from "next/router"

export default function Code(props){
    const router = useRouter()

    return(
        <Layout>
            <h1>Code: {router.query.code}</h1>
        </Layout>
    )
}