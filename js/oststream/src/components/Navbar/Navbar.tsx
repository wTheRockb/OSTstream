import * as React from "react";
import "./style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams
} from "react-router-dom";
import { RenderAlbums } from "../Albums/Albums";
import AlbumCloseUp from "../AlbumCloseUp/AlbumCloseUp";
import { isUndefined } from "util";

const Navbar = () => {
  return (
    <Router>
      <div className="navbar__root">
        <div className="navbar__inner">
          <ul className="navbar__list">
            <li>
              <NavLink
                to="/home"
                activeClassName="navbar__active-link"
                className="navbar__nav-link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/albums"
                activeClassName="navbar__active-link"
                className="navbar__nav-link"
              >
                Albums
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recently-played"
                activeClassName="navbar__active-link"
                className="navbar__nav-link"
              >
                Recently Played
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                activeClassName="navbar__active-link"
                className="navbar__nav-link"
              >
                search
              </NavLink>
            </li>
          </ul>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/albums/:id">
            <AlbumCloseUpContent />
          </Route>
          <Route path="/albums">
            <RenderAlbums />
          </Route>
          <Route path="/playlists">
            <Playlists />
          </Route>
          <Route path="/recently-played">
            <RecentlyPlayed />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const AlbumCloseUpContent = () => {
  let { id } = useParams();

  if (isUndefined(id) || Number.isNaN(parseInt(id))) {
    return <h1>Error, unparseable album id</h1>;
  } else {
    return <AlbumCloseUp albumId={parseInt(id)} />;
  }
};

const Home = () => {
  return <h2>Home</h2>;
};

const Playlists = () => {
  return <h2>Playlists</h2>;
};

const RecentlyPlayed = () => {
  return <h2>Recently Played</h2>;
};

const Search = () => {
  return <h2>Search</h2>;
};

export default Navbar;
