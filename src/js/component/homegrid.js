import React, { Fragment, useState, useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Link } from "react-router-dom";

const HomeGrid = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">

            <div className="pt-2 pb-2">
                <h3 className="text-danger">Characters</h3>
            </div>
            <div className="row flex-nowrap overflow-auto mb-5 g-0">
                {store.characters.map((character, index) => (
                    <div className="card col-3 me-4 mb-3" key={index}>
                        <img className="card-img-top" src="http://via.placeholder.com/640x360"></img>
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            <p className="card-text">{character.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Gender: {character.gender}</li>
                            <li className="list-group-item">Hair Color: {character.hair_color}</li>
                            <li className="list-group-item">Eye Color: {character.eye_color}</li>
                        </ul>
                        <div className="card-body d-flex justify-content-between">
                            <Link to={`/details/${character.id}`} className="btn btn-outline-primary">
                                Learn More!
                            </Link>
                            <button onClick={() => actions.toggleFavorites(character.id, !store.favorites.includes(character.id))} className={store.favorites.includes(character.id) ? 'btn button-active' : 'btn btn-outline-warning heart-button'}>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-2 pb-2">
                <h3 className="text-danger">Planets</h3>
            </div>
            <div className="row flex-nowrap overflow-auto mb-5 g-0">
                {store.planets.map((planet, index) => (
                    <div className="card col-3 me-4 mb-3" key={index}>
                        <img className="card-img-top" src="http://via.placeholder.com/640x360"></img>
                        <div className="card-body">
                            <h5 className="card-title">{planet.name}</h5>
                            <p className="card-text">{planet.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Population: {planet.population}</li>
                            <li className="list-group-item">Climate: {planet.climate}</li>
                            <li className="list-group-item">Terrain: {planet.terrain}</li>
                        </ul>
                        <div className="card-body d-flex justify-content-between">
                            <Link to={`/details/${planet.id}`} className="btn btn-outline-primary">
                                Learn More!
                            </Link>
                            <button onClick={() => actions.toggleFavorites(planet.id, !store.favorites.includes(planet.id))} className={store.favorites.includes(planet.id) ? 'btn button-active' : 'btn btn-outline-warning heart-button'}>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-2 pb-2">
                <h3 className="text-danger">Vehicles</h3>
            </div>
            <div className="row flex-nowrap overflow-auto mb-5 g-0">
                {store.vehicles.map((vehicle, index) => (
                    <div className="card col-3 me-4 mb-3" key={index}>
                        <img className="card-img-top" src="http://via.placeholder.com/640x360"></img>
                        <div className="card-body">
                            <h5 className="card-title">{vehicle.name}</h5>
                            <p className="card-text">{vehicle.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Vehicle Class: {vehicle.vehicle_class}</li>
                            <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                            <li className="list-group-item">Cost: {vehicle.cost_in_credits}</li>
                        </ul>
                        <div className="card-body d-flex justify-content-between">
                            <Link to={`/details/${vehicle.id}`} className="btn btn-outline-primary">
                                Learn More!
                            </Link>
                            <button onClick={() => actions.toggleFavorites(vehicle.id, !store.favorites.includes(vehicle.id))} className={store.favorites.includes(vehicle.id) ? 'btn button-active' : 'btn btn-outline-warning heart-button'}>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeGrid