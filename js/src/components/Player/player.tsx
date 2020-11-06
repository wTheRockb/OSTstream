import * as React from "react";
import { connect } from "react-redux";
import "./style.scss";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Track } from 'src/types/Track';
import { OstStreamState } from 'src/types/Index';

interface SongPlayerProps {
    readonly currentlyPlayedSong?: Track;
}

const SongPlayer: React.FunctionComponent<SongPlayerProps> = (props) => {

    return (
        <div className="player__root">
            <div className="player__song-display">
               song title
               {props.currentlyPlayedSong && props.currentlyPlayedSong.title}
            </div>
            <div className="player__audio">
            <AudioPlayer
                autoPlay
                src="http://example.com/audio.mp3"
                onPlay={() => console.log("onPlay")}
                // other props here
            />
            </div>
        </div>
    )
}

const mapStateToProps = (state: OstStreamState): SongPlayerProps => ({
    currentlyPlayedSong: state.currentlyPlayingState.currentlyPlaying,
})

export default connect(mapStateToProps)(SongPlayer);