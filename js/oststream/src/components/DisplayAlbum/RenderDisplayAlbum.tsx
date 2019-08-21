import * as React from 'react';

export interface DisplayAlbumProps {
  readonly id: number;
  readonly name: string;
  readonly album_cover_uri: string;
  readonly game_series: string;
}

export const RenderDisplayAlbum: React.FunctionComponent<DisplayAlbumProps> = (props: DisplayAlbumProps) => {
  return (
    <div className="displayAlbum">
      Name: {props.name}
      Game Series: {props.game_series}
      <img src={props.album_cover_uri}/>
    </div>
  )
};
