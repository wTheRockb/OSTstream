import {DisplayAlbum, DisplayAlbumProps} from "../DisplayAlbum/DisplayAlbum";
import * as React from "react";


interface AlbumsProps {
  albums: DisplayAlbumProps[];
}


export const RenderAlbums: React.FunctionComponent<AlbumsProps> = (props: AlbumsProps) => {
  return(
    <div className="Albums">
      <p> "hi" </p>
      {props.albums.forEach( album =>
        DisplayAlbum(album)
      )}

    </div>
  )
};
