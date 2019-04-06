import * as React from 'react';

export interface DisplayAlbumProps {
  name: string;
  album_cover_uri: string;
  game_series: string;
}

export const DisplayAlbum: React.FunctionComponent<DisplayAlbumProps> = (props: DisplayAlbumProps) => {
  return (
    <div className="displayAlbum">
      Name: {props.name}
      Game Series: {props.game_series}
    </div>
  )
};
