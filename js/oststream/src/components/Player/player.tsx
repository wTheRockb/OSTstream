import * as React from "react";
// import ReactPlayer from 'react-player';
// // import ReactPlayer from 'react-player/lazy';

// const config = {
//     file: {
//         forceAudio: true
//     }
// };

// Render a YouTube video player



const RenderPlayer: React.FunctionComponent<{}> = () => {
    return (
        <div className="player__root">
            {/* <ReactPlayer url=".\Katamari Damacy Soundtrack - 05 - Lonely Rolling Star-7_QydNXI_ok.mp3"
            config={config}
            /> */}
            <audio controls src="https://oststream.s3.amazonaws.com/tracks/Katamari+Damacy+Soundtrack+-+05+-+Lonely+Rolling+Star-7_QydNXI_ok.mp3"/>
        </div>
    )
}

export default RenderPlayer;