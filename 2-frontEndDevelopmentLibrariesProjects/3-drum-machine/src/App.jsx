import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Switch, Slider } from 'antd'
import KeyBoard from './component/keyboard';

export default function App() {
    const [volume, setVolume] = useState(0.5)
    const [mute, setMute] = useState(false)
    const onChange = (checked) => {
        setMute(!checked)
    }
    const onAfterChange = (value) => {
        setVolume(value / 100)
    }
    return (
        <div style={{ width: '400px', height: '300px', margin: '240px auto', position: 'relative' }}>
            <div>
                <KeyBoard text="Q" number='0' volume={volume} mute={mute}></KeyBoard>
                <KeyBoard text="W" number='1' volume={volume} mute={mute}></KeyBoard>
                <KeyBoard text="E" number='2' volume={volume} mute={mute}></KeyBoard>
            </div>
            <div>
                <KeyBoard text="A" number='3' volume={volume} mute={mute}></KeyBoard>
                <KeyBoard text="S" number='4' volume={volume} mute={mute}></KeyBoard>
                <KeyBoard text="D" number='5' volume={volume} mute={mute}></KeyBoard>
            </div>
            <div>
                <KeyBoard text="Z" number='6' volume={volume} mute={mute}></KeyBoard>
                <KeyBoard text="X" number='7' volume={volume} mute={mute}></KeyBoard>
                <KeyBoard text="C" number='1' volume={volume} mute={mute}></KeyBoard>
            </div>
            <div style={{ float: 'right' }}>
                <Switch checkedChildren="音量" unCheckedChildren="静音" defaultChecked onChange={onChange} />
            </div>
            <div style={{ width: '300px' }}>
                <Slider defaultValue={50} onAfterChange={onAfterChange} disabled={mute} />
            </div>
        </div>
    )
}
