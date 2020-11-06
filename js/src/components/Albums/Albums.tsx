import RenderDisplayAlbum from "../DisplayAlbum/RenderDisplayAlbum";
import React, { useState, useEffect } from "react";
import "./style.scss";
import { Album } from 'src/types/Album';

const axios = require("axios").default;

export const RenderAlbums: React.FunctionComponent<{}> = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  useEffect(() => {
    // TODO change to backendapiclient call
    const fetchData = async () => {
      const result = await axios("http://127.0.0.1:8000/api/albums/");
      setAlbums(result.data);
    };
    fetchData();
  }, []);


  return (
    <div className="albums__root">
      <div className="albums__album-container">
        {albums.map(album => (
          <RenderDisplayAlbum key={album.id} {...album} />
        ))}
      </div>
    </div>
  );
};
