import React from 'react'

const Playlist = (props) => {
    const loaded = () => {
        return (
        <div>
            <h1> Playlist 1 </h1> 
                <div className="songContainer">
                    {/* <Song/> */}
                </div>
        </div>
        )
    }
    const loading = () => {
        return <div>Items loading...</div>
    }
    return props ? loaded() : loading()
}

export default Playlist