import * as React from "react";
import "./style.scss";
import { Album } from "src/types/Album";
import { Link } from "react-router-dom";

const RenderDisplayAlbum: React.FunctionComponent<Album> = (props: Album) => {
  return (
    <div className="displayAlbum">
     <Link to={`/albums/${props.id}`}>
        <img src={props.imageUri} className="displayAlbum__cover" />
        <div className="displayAlbum__title">
         {props.title}
        </div>
      </Link>
    </div>
  );
};

export default RenderDisplayAlbum;
