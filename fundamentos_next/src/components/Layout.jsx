import style from "../styles/Layout.module.css"

import Link from "next/link"

export default function Layout(props){
    return(
        <div className={style.layout}>
            <div className={style.header}>
                <h1>{props.title || "PLEASE ADD A TITLE"}</h1>
                <Link href="/">
                    Voltar
                </Link>
            </div>
            
            <div className={style.content}>
                {props.children}
            </div>
        </div>
    )
}