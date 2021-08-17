import React from 'react'

interface props {
    children: Object
}
const Scroll:React.FC<props> = (props: props) => {
    return (
        <div className="scroll position-relative overflow-hidden">
          <div className="w-full h-full flex flex-col absolute top-0 left-0 scroll-y">
            { props.children }
          </div>
        </div>
    )
}

export default Scroll;