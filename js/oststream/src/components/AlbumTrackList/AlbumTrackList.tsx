import * as React from "react";
import "./style.scss";
import { Track } from "src/types/Track";
import { useDispatch } from 'react-redux';
import { CurrentlyPlayingDispatch } from '../CurrentlyPlaying/ducks/types';
import CurrentlyPlayingActions from '../CurrentlyPlaying/ducks/actions';
// import TimerSvg from './timer.svg';

interface AlbumTrackListProps {
  readonly tracks: Track[];
}


export const AlbumTrackList: React.FunctionComponent<AlbumTrackListProps> = (
  props: AlbumTrackListProps
) => {

  const dispatch = useDispatch<CurrentlyPlayingDispatch>();

  const getRestOfAlbum = (track: Track): Track[] => {
    const idx = props.tracks.findIndex(element => element == track);
    return props.tracks.slice(idx);
  }


  const playTrack = (track: Track) => {
    return () => {
      const rest = getRestOfAlbum(track);
      const toQueue = [track].concat(rest);
      dispatch(CurrentlyPlayingActions.addSongsToQueue({ songs: toQueue }))
    }
  }

  return (
    <div className="album-track-list">
      <table className="album-track-list__table">
        <tbody>
          <tr className="album-track-list__header">
            <th className="album-track-list__header-PLAY" />
            <th className="album-track-list__header-SONG"> SONG </th>
            <th className="album-track-list__header-ARTIST"> ARTIST </th>
            <th className="album-track-list__header-TIME">
              {/* <TimerSvg/> */}
            TIME
             </th>
          </tr>
          {props.tracks.map((track) => {
            return (
              <tr className="album-track-list__row" key={track.id}>
                <td className="album-track-list__row-SONG"> <button onClick={playTrack(track)}> play </button> </td>
                <td className="album-track-list__row-SONG">{track.title}</td>
                <td className="album-track-list__row-ARTIST">{track.artist}</td>
                <td className="album-track-list__row-TIME">{track.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
