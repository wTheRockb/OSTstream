import * as React from "react";
import "./style.scss";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const SongPlayer: React.FunctionComponent<{}> = () => {
    // TODO write a function to be passed as event when song ends (pop another song from queue and re-render subcomponent)
    // maybe a function for each of the controls even

    return (
        <div className="player_root">
            <AudioPlayer
                autoPlay
                src="http://example.com/audio.mp3"
                onPlay={() => console.log("onPlay")}
                // other props here
            />
        </div>
    )
}

export default SongPlayer;