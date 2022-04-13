import Link from "next/link"

import styles from "../styles/Navegator.module.css"

export default function Navegator(props){
    return (
        <div className={styles.navegator} style={{
            backgroundColor: props.color ?? 'dodgerblue'
        }}>
             <Link href={props.href} passHref>
                <a> {props.linkName} </a>
            </Link>
        </div>
    )
}