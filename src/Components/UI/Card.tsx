import React from 'react'

interface props {
    bg: string
    children: Object
}

const Card: React.FC<props> = (props: props) => {
    return (
        <div className={`rounded-lg shadow-md flex flex-col p-2 overflow-hidden my-3 ${props.bg}`}>{props.children}</div>
    )
}

export default Card;