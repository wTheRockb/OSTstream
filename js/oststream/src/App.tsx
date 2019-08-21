import * as React from 'react';
import './App.css';
import {RenderAlbums} from "./components/Albums/Albums";


class App extends React.Component {
  public render() {
    return (
      <div className="App">
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
