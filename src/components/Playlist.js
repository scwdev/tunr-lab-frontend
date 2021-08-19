import React from 'react'
import Song from '../components/Song'

const Playlist = (props) => {
    const loaded = () => {

        const songMap = () => (
            props.songs.map((song, index) => (
                <Song song={song} handleUpdate={props.handleUpdate} />
            ))
        )
        
        return (
        <div className ="playlist">
            <h1> Playlist 1 </h1> 
                <div className="songContainer">
                    {songMap()}
                </div>
        </div>
        )
    }
    const loading = () => {
        return <div>Playlist loading...</div>
    }
    return props ? loaded() : loading()
}

export default Playlist