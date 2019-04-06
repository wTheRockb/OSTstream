"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.RenderDisplayAlbum = (props) => {
    return (React.createElement("div", { className: "displayAlbum" },
        "Name: ",
        props.name,
        "Game Series: ",
        props.game_series));
};
