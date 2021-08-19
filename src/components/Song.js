import React from 'react'

import { toMinutes } from "../functions/song-length.js"

const Song = (props) => {
    const loaded = () => {
        console.log(props)
        return (
        <div>
            <div>Title: {props.title}</div>
            <div>Artist: {props.artist}</div>
            <div>Song Length: {toMinutes(props.length)}</div>
        </div>
        )
    }
    const loading = () => {
        return <div>Songs loading...</div>
    }
    return props ? loaded() : loading()
}
export default Song