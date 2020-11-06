"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./App.css");
const Albums_1 = require("./components/Albums/Albums");
class App extends React.Component {
    render() {
        return (React.createElement("div", { className: "App" }, Albums_1.RenderAlbums({
            albums: [{
                    id: 1,
                    name: "name1",
                    game_series: "gs1",
                    album_cover_uri: "uri"
                }]
        })));
    }
}
exports.default = App;
