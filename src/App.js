import React, { useEffect, useState } from "react"
import './App.css';
import Playlist from './components/Playlist';
import Header from './components/Header'
import FavoriteSongs from './components/FavoriteSongs';
import Form from './components/Form';


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

// UPDATE
const handleUpdate = async (request) => {
  const response = await fetch(url+"/songs/"+request._id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request)
  })
  getSongs();
}

// DELETE
const deleteSong = (song) => {
  console.log('delete function-', song)
  fetch(url + "/songs/" + song._id, {
    method: "delete",
  }).then(() => {
    getSongs();
  });
};

  return (
    <div className="App">
      <Header/>
      <Playlist songs={songs} handleUpdate={handleUpdate} deleteSong={deleteSong}/>
      <FavoriteSongs songs={songs} handleUpdate={handleUpdate} deleteSong={deleteSong} />
      <h4>ADD A NEW SONG</h4>
      <Form label="ADD A NEW SONG" song={emptySong} handleSubmit={handleCreate} handleUpdate={handleUpdate}/>
    </div>
  );
}

export default App;
