import React from 'react'

export default function Home(props) {
    return (
        <div>
            <div id="heading">
                <h1>{props.heading}</h1>
            </div>
            <div className='userInput'>
                
                {props.userInput}
                
            </div>
        </div>
    )
}
