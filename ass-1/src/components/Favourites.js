import React from "react";
import { Link } from "react-router-dom";
import FavouritesToken from "./FavouritesToken";

const Favourites = ({ handleDeleteFav, favourites }) => (
  <div className="favourites-container">
    <h3>Favorites</h3>
    {favourites.map((m, i) => (
      <FavouritesToken movie={m} key={i} handleDeleteFav={handleDeleteFav} />
    ))}
  </div>
);

export default Favourites;
