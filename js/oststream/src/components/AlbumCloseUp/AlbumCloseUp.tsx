import * as React from "react";
import "./style.scss";
import { useState, useEffect } from "react";
import BackendApiClient from "src/api/api";
import { AlbumDetails } from "src/types/AlbumDetails";
import RenderDisplayAlbum from "../DisplayAlbum/RenderDisplayAlbum";

interface AlbumCloseUpProps {
  albumId: number;
}

const initialAlbumData: AlbumDetails = {
  album: {
    id: 0,
    title: "Album Loading",
    gameId: 0,
    publishDate: "",
    imageUri: ""
  },
  trackList: []
};

const AlbumCloseUp: React.FC<AlbumCloseUpProps> = (
  props: AlbumCloseUpProps
) => {
  const [albumData, setAlbumData] = useState(initialAlbumData);

  useEffect(() => {
    const fetchData = async () => {
      const result = await BackendApiClient.getAlbumDetails(props.albumId);
      setAlbumData(result);
    };
    fetchData();
  }, []);
  console.log(albumData)

  return (
    <div className="album-close-up__root">
      <div>
        <RenderDisplayAlbum {...albumData.album} />
      </div>
    </div>
  );
};

export default AlbumCloseUp;
