interface ButtonProps{
    children: any
    className?: string
    color?: string
    onClick?: () => void
}

export default function Button(props: ButtonProps){
    const color = props.color ?? 'gray'
    return(
        <div>
            <button
                onClick={() => props.onClick()}
                className={`
                    bg-gradient-to-r from-${color}-400 to-${color}-700
                    text-white px-4 py-2 rounded-md
                    ${props.className}`}>

                {props.children}
            </button>
        </div>
    )
}