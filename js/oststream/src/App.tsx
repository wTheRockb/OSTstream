import * as React from 'react';
import {RenderAlbums} from "./components/Albums/Albums";
import './style.scss'


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
