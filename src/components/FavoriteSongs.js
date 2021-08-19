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
            <div>
                <h1> Favorite Songs List </h1> 
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