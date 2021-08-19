import React from 'react'

const Song = (props) => {
    const loaded = () => {
        return (
        <div>
            <div>Title: {}</div>
            <div>Artist: {}</div>
            <div>Song Length: {}</div>
        </div>
        )
    }
    const loading = () => {
        return <div>Songs loading...</div>
    }
    return props ? loaded() : loading()
}
export default Song