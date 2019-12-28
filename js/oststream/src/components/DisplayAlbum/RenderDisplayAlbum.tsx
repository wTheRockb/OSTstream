import * as React from 'react';
import './style.scss'

export interface DisplayAlbumProps {
  readonly id: number;
  readonly title: string;
  readonly album_cover_uri: string;
  readonly game_series: string;
}

export const RenderDisplayAlbum: React.FunctionComponent<DisplayAlbumProps> = (props: DisplayAlbumProps) => {
  return (
    <div className="displayAlbum">
      <img src={props.album_cover_uri} className="displayAlbum__cover"/>
      <div className="displayAlbum__title"> {props.title}</div>
      {/* <div className="displayAlbum__gameSeries">Game Series: {props.game_series}</div> */}
      <img src={props.album_cover_uri}/>
    </div>
  )
};
