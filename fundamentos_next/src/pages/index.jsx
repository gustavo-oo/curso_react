import Navegator from '../components/Navegator'

export default function Home(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegator href="/style" linkName="Style"/>
            <Navegator href="/example" linkName="Example" color="red"/>
            <Navegator href="/jsx" linkName="Jsx" color="green"/>
            <Navegator href="/navegation" linkName="Simple Navegation" color="purple"/>
            <Navegator href="/client/123" linkName="Dynamic Navegation" color="gray"/>
            <Navegator href="/state" linkName="State" color="pink"/>
            <Navegator href="/integration" linkName="Integration" color="#EFC050"/>
            <Navegator href="/static" linkName="Static Generation" color="#DFCFBE"/>
            <Navegator href="/server-side" linkName="Server-side Rendering" color="#9B2335"/>
        </div>
    )
}