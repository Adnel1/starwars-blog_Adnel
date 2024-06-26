import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  // Joins all the data fetched from the API into a single array
  const allEntities = [...store.characters, ...store.planets, ...store.vehicles];
  
  const getEntity = (id) => {
    return allEntities.find((item) => item.id === id)
  }

  return (
    <nav className="navbar navbar-light bg-black">
      <div className="container d-flex justify-content-between">
        <a href="/" className="navbar-brand"><img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png" alt="Star Wars logo" width="100" /></a>
        <div className="dropdown">
          <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="false" aria-expanded="false">
            <span className="me-2">Favorites</span>
            <span className="favorite-counter me-2 text-dark">{store.favorites.length}</span>
          </button>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuClickable">
            {store.favorites.length > 0 &&
              <>
                {store.favorites.map((item, index) => (
                  <div className="d-flex justify-content-between dropdown-item" key={index}>
                    <span>{getEntity(item).name}</span>
                    <span className="trash" onClick={() => actions.deleteItem(item)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                      </svg>
                    </span>
                  </div>
                ))}
              </>
            }
            {!store.favorites.length &&
              <div className="d-flex justify-content-center dropdown-item">
                No favorites yet
              </div>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};