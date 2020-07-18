import * as React from 'react';
import './style.scss'
import Navbar from './components/Navbar/Navbar';
import SongPlayer from './components/Player/player';
import { SharedStateProvider } from './store';

const App = () => {
  return (
    <SharedStateProvider>
      <div className="root">
        <Navbar />
        <SongPlayer />
      </div>
    </SharedStateProvider>
  )
}

export default App;
