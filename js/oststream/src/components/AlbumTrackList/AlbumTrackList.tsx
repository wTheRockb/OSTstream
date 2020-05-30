import * as React from "react";
import "./style.scss";
import { Track } from "src/types/Track";

interface AlbumTrackListProps {
  readonly tracks: Track[];
}

export const AlbumTrackList: React.FunctionComponent<AlbumTrackListProps> = (
  props: AlbumTrackListProps
) => {
  return (
    <div className="album-track-list">
      <table>
        <tbody>
          <tr className="album-track-list__header">
            <th className="album-track-list__header-SONG"> SONG </th>
            <th className="album-track-list__header-ARTIST"> ARTIST </th>
            <th className="album-track-list__header-TIME"> TIME </th>
          </tr>
          {props.tracks.map((track) => {
            return (
              <tr className="album-track-list__row">
                <td className="album-track-list__row-SONG"> {track.title}</td>
                <td className="album-track-list__row-ARTIST">
                  {" "}
                  {track.artist}{" "}
                </td>
                <td className="album-track-list__row-TIME"> {track.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
