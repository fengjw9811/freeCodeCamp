import React, { useRef, useState } from 'react'
import './App.css'
import { marked } from 'marked'

export default function App() {
    const ref = useRef()
    const [content, setContent] = useState('')
    const preview = () => {
        setContent(marked(ref.current.value))
    }
    return (
        <div>
            <textarea ref={ref} id="editor" placeholder='请输入md代码' onChange={preview}></textarea>
            <div id="foot">preview</div>
            <div id="preview" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    )
}
