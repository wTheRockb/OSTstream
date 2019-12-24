import {RenderDisplayAlbum, DisplayAlbumProps} from "../DisplayAlbum/RenderDisplayAlbum";
import React, { useState, useEffect } from 'react';


const axios = require('axios').default;

// interface AlbumsProps {
//   readonly albums: DisplayAlbumProps[];
// }


export const RenderAlbums: React.FunctionComponent<{}> = () => {

  // const [data, setData] = useState({ albums: [] });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'http://127.0.0.1:8000/albums/',
  //     );
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);

  const [data, setData] = useState({ albums: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://127.0.0.1:8000/albums/',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return(
    <div className="Albums">
      {data.albums.map( (album: DisplayAlbumProps) =>
        <div key={album.id}>
          {RenderDisplayAlbum(album)}
        </div>
      )}
    </div>
  )
};
