import React from 'react'
import "./Style.css"
import TagGif from "../../component/TagGif"


export default function Giphy() {
    return (
        <div className="wrap">
            <h1>Giphy</h1>
            <div className="containers">
                <TagGif />

            </div>
        </div>
    )
}