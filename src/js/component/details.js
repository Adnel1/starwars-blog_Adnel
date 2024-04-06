import React, { Fragment, useState, useContext } from "react";
import { useParams } from 'react-router-dom';

import { Context } from "../store/appContext";

const Details = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    // Joins all the data fetched from the API into a single array
    const allEntities = [...store.characters, ...store.planets, ...store.vehicles];
    // Grabs data of entity by matching id
    const currentEntity = allEntities.find((item) => item.id === id)
    if (!currentEntity) return <></>

    return (
        <div className="container pt-5 pb-5">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="http://via.placeholder.com/640x600" className="img-fluid rounded-start"></img>
                    </div>
                    <div className="col-md-8 text-center">
                        <div className="card-body">
                            <h1 className="card-title">{currentEntity.name}</h1>
                            <p className="card-text">{currentEntity.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-around">
                
            {currentEntity.gender &&
                    <>
                        <div className="text-center">
                            <div><h5>Name</h5></div>
                            <div>{currentEntity.name}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Birth Year</h5></div>
                            <div>{currentEntity.birth_year}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Gender</h5></div>
                            <div>{currentEntity.gender}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Height</h5></div>
                            <div>{currentEntity.height}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Skin Color</h5></div>
                            <div>{currentEntity.skin_color}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Eye Color</h5></div>
                            <div>{currentEntity.eye_color}</div>
                        </div>
                    </>
                }

                {currentEntity.gravity &&
                    <>
                        <div className="text-center">
                            <div><h5>Name</h5></div>
                            <div>{currentEntity.name}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Diameter</h5></div>
                            <div>{currentEntity.diameter}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Orbital Period</h5></div>
                            <div>{currentEntity.orbital_period}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Gravity</h5></div>
                            <div>{currentEntity.gravity}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Population</h5></div>
                            <div>{currentEntity.population}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Climate</h5></div>
                            <div>{currentEntity.climate}</div>
                        </div>
                    </>
                }

                {currentEntity.model &&
                    <>
                        <div className="text-center">
                            <div><h5>Name</h5></div>
                            <div>{currentEntity.name}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Model</h5></div>
                            <div>{currentEntity.model}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Vehicle Class</h5></div>
                            <div>{currentEntity.vehicle_class}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Manufacturer</h5></div>
                            <div>{currentEntity.manufacturer}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Cost</h5></div>
                            <div>{currentEntity.cost_in_credits}</div>
                        </div>
                        <div className="text-center">
                            <div><h5>Speed</h5></div>
                            <div>{currentEntity.max_atmosphering_speed}</div>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

export default Details