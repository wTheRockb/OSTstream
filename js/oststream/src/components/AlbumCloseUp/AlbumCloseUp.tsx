import * as React from "react";
import "./style.scss";
import { useState, useEffect } from "react";
import BackendApiClient from 'src/api/api';
import { AlbumDetails } from 'src/types/AlbumDetails';

interface AlbumCloseUpProps {
    albumId: number;
}

const initialAlbumData: AlbumDetails = {
    album: {
        id: 0,
        name: "Album Loading",
        gameId: 0,
        publishDate: "",
        imageUri: "",
    },
    trackList: [],
}

const AlbumCloseUp: React.FC<AlbumCloseUpProps> = (props: AlbumCloseUpProps) => {
  const [albumData, setAlbumData] = useState(initialAlbumData);

  useEffect(() => { // TODO change to backendapiclient call
    const fetchData = async () => {
      const result = await BackendApiClient.getAlbumDetails(props.albumId)
      setAlbumData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="album-close-up__root">
      <div>{albumData.album.name}</div>
    </div>
  );
};

export default AlbumCloseUp;
