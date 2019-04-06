"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RenderDisplayAlbum_1 = require("../DisplayAlbum/RenderDisplayAlbum");
const React = require("react");
exports.RenderAlbums = (props) => {
    return (React.createElement("div", { className: "Albums" }, props.albums.map((album) => React.createElement("div", { key: album.id }, RenderDisplayAlbum_1.RenderDisplayAlbum(album)))));
};
