import React, { useEffect, useState } from 'react'
import { REACT_APP_API_KEY } from "./API"
import axios from "axios"


const TagGif = () => {
    const [random, setRandom] = useState("")
    const [tag, setTag] = useState("")

    const API_KEY = REACT_APP_API_KEY

    const handleRandomClick = () => {
        handleRandomGif(tag)
    }

    const handleRandomGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const { data } = await axios.get(url)

        const response = data.data.images.downsized_large.url
        setRandom(response)
    }
    useEffect(() => {
        handleRandomGif(tag)
    }, [tag])

    return (
        <div>
            <div>
                <h1>TAG GIF = {tag}</h1>
                <img width="500" src={random} alt="Random GIF" />

            </div>
            <div>
                <input className="input" value={tag} onChange={(e) => setTag(e.target.value)} />
            </div>
            <button className="button1" onClick={handleRandomClick}>RANDOMIZE</button>
        </div>
    )
}

export default TagGif