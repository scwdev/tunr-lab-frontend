//import logo from './logo.svg';
import './App.css';
import Playlist from './components/Playlist';
import Header from './components/Header'
import FavoriteSongs from './components/FavoriteSongs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Playlist/>
      <FavoriteSongs/>
    </div>
  );
}

export default App;
