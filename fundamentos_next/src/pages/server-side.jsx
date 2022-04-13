import Layout from "../components/Layout";

export function getServerSideProps(){
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function ServerSide(props){
    return (
        <Layout title="Server-side Content">
            <div>{props.number}</div>
        </Layout>
    )
}