import React, { useEffect } from 'react'
//这里要异常注意必须使用import导入音频路径，而不是直接用字符串
import mp3URL from './mp3/index'
import './index.css'

export default function KeyBoard(props) {
    const playMp3 = (e) => {
        e.preventDefault();
        const mp3 = new Audio(mp3URL[props.number])
        mp3.volume = props.mute ? 0 : props.volume
        e.target.style.backgroundColor = '#ffa500'
        setTimeout(() => {
            e.target.style.backgroundColor = '#808080'
        }, 100)
        mp3.play()
    }
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown); // 添加全局事件
        return () => {
            window.removeEventListener('keydown', onKeyDown); // 销毁
        };
    }, [])
    const onKeyDown = (e) => {
        if (e.key.toUpperCase() === props.text) {
            const div = document.getElementById(e.key.toUpperCase())
            div.click()
        }
    }
    return (
        <a href="###">
            <div id={props.text} className="bgc" style={{ width: '100px', height: '90px', textAlign: 'center', fontSize: '30px', lineHeight: '90px', borderRadius: '10px', margin: '3px 5px', display: 'inline-block' }} onClick={playMp3}>
                {props.text}
            </div>
        </a>
    )
}
