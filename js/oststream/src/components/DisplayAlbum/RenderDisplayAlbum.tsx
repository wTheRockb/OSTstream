import * as React from "react";
import "./style.scss";
import { Album } from "src/types/Album";

const RenderDisplayAlbum: React.FunctionComponent<Album> = (props: Album) => {
  return (
    <div className="displayAlbum">
      <img src={props.imageUri} className="displayAlbum__cover" />
      <div className="displayAlbum__title"> {props.title}</div>
      <img src={props.imageUri} />
    </div>
  );
};

export default RenderDisplayAlbum;
