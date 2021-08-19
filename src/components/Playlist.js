import React from 'react'
import Song from '../components/Song'

const Playlist = (props) => {
    const loaded = () => {
        
        const songMap = () => (
            props.songs.map((song, index) => (
                <Song title={song.title} artist={song.artist} length={song.time} />
            ))
        )
        
        return (
        <div>
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