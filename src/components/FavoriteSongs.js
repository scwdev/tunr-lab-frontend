import React from 'react'
import Song from '../components/Song'

const FavoriteSongs = (props) => {
    const loaded = () => {

        const favList = () => (
            props.songs.map((song, index) => {
                if (song.favorite === true) {
                    return (<Song song={song} handleUpdate={props.handleUpdate} />) 
                }
            })
        )

        return (
            <div className="favorites">
                <h1>Your Favorite Songs</h1> 
                <div className="favoriteSongsContainer">
                    {favList()}
                </div>
            </div>
            
        )
    }

    const loading = () => {
        return <div>Favorite Songs loading...</div>
    }
    
    return props ? loaded() : loading()
}

export default FavoriteSongs