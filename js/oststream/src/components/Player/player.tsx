import * as React from "react";
import { useState } from "react";
import "./style.scss";
import { useSharedState } from '../../store';
import ReactHowler from 'react-howler';

interface AudioComponentProps {
    songQueue: string[];
    songFinishAction: () => void;
}

const AudioComponent: React.FunctionComponent<AudioComponentProps> = props => {
    const [playing, setPlaying] = useState(false);
    const [mute, setMute] = useState(false);
    const [volume, setVolume] = useState(1.0);
    const [playerRef, setPlayerRef] = useState();
    const [duration, setDuration] = useState();

    const toggleMute = () => setMute(!mute);
    const setDurationWrapper = () => setDuration(playerRef?.duration);
    const togglePlaying = () => setPlaying(!playing);
    const setPlayerRefRuntimeWrapper = (ref: any) => setPlayerRef(ref);
    const setVolumeWrapper = (e: any) => setVolume(e.target.value)
    return (
        <div className="player__root">
            <ReactHowler
                src="https://oststream.s3.amazonaws.com/tracks/Katamari+Damacy+Soundtrack+-+05+-+Lonely+Rolling+Star-7_QydNXI_ok.mp3"
                volume={volume}
                playing={playing}
                mute={mute}
                ref={setPlayerRefRuntimeWrapper}
                onLoad={setDurationWrapper}
            />

            <label>
                Mute:
            <input
                    type='checkbox'
                    checked={mute}
                    onChange={toggleMute}
                />
            </label>
            <p>
                {'Status: '}
                {(playerRef?.seek !== undefined) ? playerRef?.seek : '0.00'}
                {' / '}
                {duration !== undefined ? duration.toFixed(2) : 'NaN'}
            </p>
            <div className='volume'>
                <label>
                    Volume:
            <span className='slider-container'>
                        <input
                            type='range'
                            min='0'
                            max='1'
                            step='.05'
                            value={volume}
                            onChange={setVolumeWrapper}
                            style={{ verticalAlign: 'bottom' }}
                        />
                    </span>
                    {volume.toFixed(2)}
                </label>
            </div>
            <button onClick={togglePlaying}>
                {(playing) ? 'Pause' : 'Play'}
            </button>
        </div>
    )
}

const SongPlayer: React.FunctionComponent<{}> = () => {
    const [globalState] = useSharedState();

    // TODO write a function to be passed as event when song ends (pop another song from queue and re-render subcomponent)
    // maybe a function for each of the controls even

    const songUris = globalState.songQueue.map(song => song.uri)

    return (
        <div className="player_root">
            <AudioComponent
                songQueue={songUris}
                songFinishAction={() => { }}
            />
        </div>
    )
}

export default SongPlayer;