import React from 'react'
import Song from '../components/Song'

const Playlist = (props) => {
    const loaded = () => {
        return (
        <div>
            <h1> Playlist 1 </h1> 
            <h3>For all your playlist needs!</h3>
                <div className="songContainer">
                    <Song/>
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