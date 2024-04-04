import React, { Fragment, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  // Joins all the data fetched from the API into a single array
  const allEntities = [...store.characters, ...store.planets, ...store.vehicles];

  // Grabs data of entity by matching id
  const currentEntity = allEntities.find((item) => item)

  console.log(currentEntity)

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex justify-content-between">
        <a href="/" className="navbar-brand"><img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="" width="100" height="60" /></a>
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="me-2">Favorites</span>
            <span className="favorite-amount me-2 p-1">{store.favorites.length}</span>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {store.favorites.map((item, index) => (
            <div className="d-flex justify-content-between dropdown-item" key={index}>
              {item === currentEntity.id &&
                <>
                  <span>{currentEntity.name}</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                    </svg>
                  </span>
                </>
              }
            </div>
          ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
