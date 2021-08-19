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

const handleUpdate = async (request) => {
  const response = await fetch(url+"/songs/"+request._id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request)
  })
  getSongs()
}

  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Playlist songs={songs} addToFavorites={addToFavorites} handleUpdate={handleUpdate}/>
        <FavoriteSongs songs={songs} removeFromFavorites={removeFromFavorites} handleUpdate={handleUpdate} />
        <Form label="Add New Song" song={emptySong} handleSubmit={handleCreate} handleUpdate={handleUpdate}/>
      </div>

    </div>
  );
}

export default App;
