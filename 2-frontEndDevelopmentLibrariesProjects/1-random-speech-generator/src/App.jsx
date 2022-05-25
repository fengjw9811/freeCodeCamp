import React, { useState } from 'react'
import { quote, backgroundColor } from './quote'
import './App.css'

export default function App() {
    const length1 = quote.length
    const length2 = backgroundColor.length
    const [number, setNumber] = useState(Math.floor(Math.random() * (length1)))
    const [color, setColor] = useState(Math.floor(Math.random() * (length2)))
    document.body.style.backgroundColor = backgroundColor[color]
    const change = () => {
        let newNumber = Math.floor(Math.random() * (length1))
        let newColor = Math.floor(Math.random() * (length2))
        while (number === newNumber) {
            newNumber = Math.floor(Math.random() * (length1))
        }
        while (color === newColor) {
            newColor = Math.floor(Math.random() * (length2))
        }
        setNumber(newNumber)
        setColor(newColor)
    }
    return (<div id="entirety" >
        <div>
            <div id="sentence" style={{ color: backgroundColor[color] }}>
                {quote[number].sentence}
            </div>
            <div id="author" style={{ color: backgroundColor[color] }} >
                ——{quote[number].author}
            </div>
            <button onClick={change} style={{ backgroundColor: backgroundColor[color] }}> 换一个 </button>
        </div>
        <div id="me" >
            by fengjw
        </div>
    </div>
    )
}