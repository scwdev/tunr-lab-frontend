import React from 'react'

import { toMinutes } from "../functions/song-length.js"

const Song = (props) => {
    const loaded = () => {
        
        const song = props.song

        const favStatus = () => {
            if (song.favorite === false) return <i class="far fa-heart"></i>
            if (song.favorite === true) return <i class="fas fa-heart"></i>
        }

        const favToggle = () => {
            const newSong = {...song}
            if (newSong.favorite === true) {
                newSong.favorite = false
            } else if (newSong.favorite === false) {
                newSong.favorite = true
            }
            props.handleUpdate(newSong)
        }

        return (
        <div className="song">
            <div>Title: {song.title}</div>
            <div>Artist: {song.artist}</div>
            <div>Song Length: {toMinutes(song.time)}</div>
            <button onClick={favToggle} >{favStatus()}</button>
            <button className="delete" onClick={() => {props.deleteSong(song)}}>Delete</button>
        </div>
        )
    }
    const loading = () => {
        return <div>Songs loading...</div>
    }
    return props ? loaded() : loading()
}
export default Song