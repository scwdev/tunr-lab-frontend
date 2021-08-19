import React, { useEffect, useState } from "react"
import './App.css';
import Playlist from './components/Playlist';
import Header from './components/Header'
import FavoriteSongs from './components/FavoriteSongs';
import Form from './Form';


function App() {
const [ songs, setSongs ] = useState([])

const url = 'https://tunr-app-nsc.herokuapp.com'

const emptySong = {
  title: "",
  artist: "",
  time: ""
};

const [selectedSong, setSelectedSong] = useState(emptySong);

const getSongs = async () => {
  const response = await fetch( url + "/songs" )
  const data = await response.json()
  setSongs(data)
}

useEffect(() => {getSongs()}, []) 

// CREATE
const handleCreate = (newSong) => {
  fetch(url + "/songs", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSong),
  }).then(() => {
    getSongs();
  });
};

  return (
    <div className="App">
      <Header/>
      <Playlist/>
      <FavoriteSongs/>

      <h4>ADD A NEW SONG</h4>
      <Form label="ADD A NEW SONG" song={emptySong} handleSubmit={handleCreate} />
    </div>
  );
}

export default App;
