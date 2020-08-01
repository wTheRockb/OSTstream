import * as React from "react";
import { useState, useRef } from "react";
import "./style.scss";
import { useSharedState } from '../../store';
import ReactHowler from 'react-howler';
// import { isNotUndefined } from 'src/util/typeGuard';
import { useAudioPlayer } from 'src/providers/audioPlayerProvider';

// TODO write a progress bar thing

interface AudioComponentProps {
    songQueue: string[];
    songFinishAction: () => void;
}

const AudioComponent: React.FunctionComponent<AudioComponentProps> = props => {
    const progressBarRef = useRef<HTMLDivElement>(null);
    const {
      status,
      duration,
      togglePlayPause,
      currentTime,
      seek,
    } = useAudioPlayer()!;
    const playing = status === 'playing';
    const position = (currentTime / duration) * 100 || 0;

    return (
        <div className="player__root">
            <ReactHowler
                src="https://oststream.s3.amazonaws.com/tracks/Katamari+Damacy+Soundtrack+-+05+-+Lonely+Rolling+Star-7_QydNXI_ok.mp3"
                volume={volume}
                playing={playing}
                mute={mute}
                ref={setPlayerRefRuntimeWrapper}
                onLoad={setDurationWrapper}
                onStop={handleOnStop}
                onPlay={handleOnPlay}
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
                {/* {!isNaN(seek) ? seek : '0.00'} */}
                {count}
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
                            step='.01'
                            value={volume}
                            onChange={setVolumeWrapper}
                            style={{ verticalAlign: 'bottom' }}
                        />
                    </span>
                    {/* TODO fix  console warning here, do NaN check for */}
                    {volume * 100}
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