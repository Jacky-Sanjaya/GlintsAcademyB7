import React, { useState } from 'react'
import { Data } from "../file/data"
import Logo from "../img/LOGO.png"
import "../App.css"

export default function Simple() {
    const [toggle, setToggle] = useState(false)
    const [count, setCount] = useState(0)

    const list = <ul>
        {Data.map((item) => {
            return <li className="list">{item.name} {item.age}</li>
        })}
    </ul>

    const handleOn = () => {
        setToggle(true)
    }

    const handleOff = () => {
        setToggle(false)
    }
    let component;
    if (toggle == true) {
        component = (
            <div className="btn-container">
                <h1 className="text">Simple Toggle</h1>
                <img className="image1" src={Logo} alt="bulb" />
                <div>
                    <button className="btn" onClick={handleOn}>ON</button>
                    <button className="btn" onClick={handleOff}>OFF</button>
                    {toggle}
                </div>
                <div className="counter">
                    <h1 className="text">Counter</h1>
                    <h1 className="text">{count}</h1>
                    <button className="btn" onClick={() => setCount(count - 1)}>-</button>
                    <button className="btn" onClick={() => setCount(count + 1)}>+</button>
                </div>
                <h1 className="text">React List</h1>
                {list}
            </div >
        )
    } else {
        component = (
            <div className="btn-container">
                <h1 className="text">Simple Toggle</h1>
                <img className="image" src={Logo} alt="bulb" />
                <div>
                    <button className="btn" onClick={handleOn}>ON</button>
                    <button className="btn" onClick={handleOff}>OFF</button>
                    {toggle}
                </div>
                <div className="counter">
                    <h1 className="text">Counter</h1>
                    <h1 className="text">{count}</h1>
                    <button className="btn" onClick={() => setCount(count - 1)}>-</button>
                    <button className="btn" onClick={() => setCount(count + 1)}>+</button>

                </div>
                <h1 className="text">React List</h1>
                {list}
            </div>
        )
    }



    return (
        <div className="container">
            {component}



        </div>
    )
}