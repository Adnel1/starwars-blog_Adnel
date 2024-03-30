import React, { Fragment, useContext } from "react";

import { Context } from "../store/appContext";

const HomeGrid = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">

            <div className="pt-2 pb-2">
                <h3 className="text-danger">CHARACTERS</h3>
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
                            <a href="#" className="btn btn-outline-primary">Go somewhere</a>
                            <a href="#" className="btn btn-outline-warning">heart</a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-2 pb-2">
                <h3 className="text-danger">PLANETS</h3>
            </div>
            {/* {store.planets.map(planets => (
                <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '10px' }}>
                    {JSON.stringify(planets)}
                </div>
            ))} */}
            <div className="row flex-nowrap overflow-auto mb-5 g-0">
                {store.planets.map((planets, index) => (
                    <div className="card col-3 me-4 mb-3" key={index}>
                        <img className="card-img-top" src="http://via.placeholder.com/640x360"></img>
                        <div className="card-body">
                            <h5 className="card-title">{planets.name}</h5>
                            <p className="card-text">{planets.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Population: {planets.population}</li>
                            <li className="list-group-item">Climate: {planets.climate}</li>
                            <li className="list-group-item">Terrain: {planets.terrain}</li>
                        </ul>
                        <div className="card-body d-flex justify-content-between">
                            <a href="#" className="btn btn-outline-primary">Go somewhere</a>
                            <a href="#" className="btn btn-outline-warning">heart</a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-2 pb-2">
                <h3 className="text-danger">VEHICLES</h3>
            </div>
            <div className="row flex-nowrap overflow-auto mb-5 g-0">
                {store.vehicles.map((vehicles, index) => (
                    <div className="card col-3 me-4 mb-3" key={index}>
                        <img className="card-img-top" src="http://via.placeholder.com/640x360"></img>
                        <div className="card-body">
                            <h5 className="card-title">{vehicles.name}</h5>
                            <p className="card-text">{vehicles.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Vehicle Class: {vehicles.vehicle_class}</li>
                            <li className="list-group-item">Manufacturer: {vehicles.manufacturer}</li>
                            <li className="list-group-item">Cost: {vehicles.cost_in_credits}</li>
                        </ul>
                        <div className="card-body d-flex justify-content-between">
                            <a href="#" className="btn btn-outline-primary">Go somewhere</a>
                            <a href="#" className="btn btn-outline-warning">heart</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeGrid