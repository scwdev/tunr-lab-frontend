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

useEffect(() => {getSongs()}, []) 

  return (
    <div className="App">
      <Header/>
      <Playlist/>
      <FavoriteSongs/>
    </div>
  );
}

export default App;
