import React, { useEffect, useState } from "react"
import './App.css';
import Playlist from './components/Playlist';
import Header from './components/Header'
import FavoriteSongs from './components/FavoriteSongs';


function App() {
const [ songs, setSongs ] = useState([])

const url = 'https://tunr-app-nsc.herokuapp.com'

const getSongs = async () => {
  const response = await fetch( url + "/songs" )
  const data = await response.json()
  setSongs(data)
}


const addToFavorites = (song) => {
  console.log("add to favorites", song)
  setSongs([...songs, song])
}

const removeFromFavorites = (song) => {
  const index = songs.findIndex((songy) =>(song === songy))
  const updatedArray = [...songs]
  updatedArray.splice(index, 1)
  setSongs(updatedArray)
}


useEffect(() => {getSongs()}, []) 

  return (
    <div className="App">
      <Header/>
      <Playlist addToFavorites={addToFavorites}/>
      <FavoriteSongs songs={songs} removeFromFavorites={removeFromFavorites}/>
    </div>
  );
}

export default App;
