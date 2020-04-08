import * as React from "react";
import "./style.scss";
import { useState, useEffect } from "react";
import BackendApiClient from "src/api/api";
import { AlbumDetails } from "src/types/AlbumDetails";


interface AlbumCloseUpProps {
  albumId: number;
}

const initialAlbumData: AlbumDetails = {
  id: 0,
  title: "Album Loading",
  gameId: 0,
  publishDate: "",
  imageUri: "",
  tracks: []
};

const AlbumCloseUp: React.FC<AlbumCloseUpProps> = (
  props: AlbumCloseUpProps
) => {
  const [albumData, setAlbumData] = useState(initialAlbumData);

  useEffect(() => {
    const fetchData = async () => {
      const result = await BackendApiClient.getAlbumCloseUp(props.albumId);
      setAlbumData(result);
    };
    fetchData();
  }, []);
  console.log(albumData);

  return (
    <div className="album-close-up__root">
      <div className="album-close-up__title-holder">
        <img src={albumData.imageUri} className="album-close-up__album-cover" />
        <div className="album-close-up__album-title">
          {albumData.title}
        </div>
      </div>
      <div className="album-close-up__track-holder"></div>
    </div>
  );
};

export default AlbumCloseUp;
