import * as React from 'react';
import './App.css';
import {RenderAlbums} from "./components/Albums/Albums";


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {<RenderAlbums/>}
      </div>
    );
  }
}

export default App;
