import React from 'react'

export default function MyButton(props) {
    return (
        <div>
            <button onClick={()=>props.clicked()}>Click Me Bro!</button>
        </div>
    )
}
