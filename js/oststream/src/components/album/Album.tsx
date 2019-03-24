import * as React from 'react';

export interface DisplayAlbumProps {
    name: string;
    album_cover_uri: string;
    game_series: string;
}

const DisplayAlbum: React.SFC<DisplayAlbumProps> = props => {

    return (
        <div className="displayAlbum">
            helo i am album
        </div>
    )
}
