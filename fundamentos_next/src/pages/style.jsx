import styles from '../styles/Style.module.css'
import Layout from '../components/Layout'

export default function Style(){
    return(
        <Layout title="Module CSS Example">
            <div className={styles.purple}>
                <h1>Style using CSS Module</h1>
            </div>
        </Layout>
    )
}