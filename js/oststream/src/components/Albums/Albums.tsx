import {RenderDisplayAlbum, DisplayAlbumProps} from "../DisplayAlbum/RenderDisplayAlbum";
import React, { useState, useEffect } from 'react';
import './style.scss'

const axios = require('axios').default;



export const RenderAlbums: React.FunctionComponent<{}> = () => {


  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://127.0.0.1:8000/albums/',
      );
      setAlbums(result.data);
    };
    fetchData();
  }, []);

  console.log(albums)
  return(
    <div className="albums__root">
        <div className="albums__album-container">
        {albums.map( (album: DisplayAlbumProps) =>
            <RenderDisplayAlbum {...album} />
        )}
      </div>
    </div>
  )
};
