import React from 'react'
import Song from '../components/Song'

const FavoriteSongs = (props) => {
    const loaded = () => {

        //fucntion to check if songFavourite = true

        return (
            <div className="favorites">
                <h1> Favorite Songs List </h1> 
                <div className="favoriteSongsContainer">
                    {/* <Song length={439} label="remove from Favorites"/> */}
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