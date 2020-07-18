import * as React from "react";
import "./style.scss";
import { useSharedState } from '../../store';
import ReactHowler from 'react-howler';

interface AudioComponentProps {
    songQueue: string[];
    songFinishAction: () => void;
}

const AudioComponent: React.FunctionComponent<AudioComponentProps> = props => {
    return (
        <div className="player__root">
            <ReactHowler
                src="https://oststream.s3.amazonaws.com/tracks/Katamari+Damacy+Soundtrack+-+05+-+Lonely+Rolling+Star-7_QydNXI_ok.mp3"
                />
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