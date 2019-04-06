import * as React from 'react';
import './App.css';
import {RenderAlbums} from "./components/Albums/Albums";


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and BLAp to reload.
        </p> */}
        {RenderAlbums({
          albums: [{
            id: 1,
            name: "name1",
            game_series: "gs1",
            album_cover_uri: "uri"
          }]
        })}
      </div>
    );
  }
}

export default App;
