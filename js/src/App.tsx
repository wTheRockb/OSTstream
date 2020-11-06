import * as React from 'react';
import './style.scss'
import Navbar from './components/Navbar/Navbar';
import SongPlayer from './components/Player/player';


const App = () => {
  
  return (
      <div className="root">
        <Navbar />
        <SongPlayer />
      </div>
  )
}

export default App;
