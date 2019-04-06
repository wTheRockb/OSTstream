import {RenderDisplayAlbum, DisplayAlbumProps} from "../DisplayAlbum/RenderDisplayAlbum";
import * as React from "react";


interface AlbumsProps {
  readonly albums: DisplayAlbumProps[];
}


export const RenderAlbums: React.FunctionComponent<AlbumsProps> = (props: AlbumsProps) => {
  return(
    <div className="Albums">
      {props.albums.map( (album: DisplayAlbumProps) =>
        <div key={album.id}>
          {RenderDisplayAlbum(album)}
        </div>
      )}
    </div>
  )
};
