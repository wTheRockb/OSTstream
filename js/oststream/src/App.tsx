import * as React from 'react';
import './style.scss'
import Navbar from './components/Navbar/Navbar';
import RenderPlayer from './components/Player/player';


 const App = () => {
  return (
    <div>
    <Navbar/>
    <RenderPlayer/>
   </div>
   )
}

export default App;
