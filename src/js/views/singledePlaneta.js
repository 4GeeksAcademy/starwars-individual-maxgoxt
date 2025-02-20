// import  "../../styles/planeta.css"
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlaneta = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    console.log(store.detalledePlaneta);
    console.log("hola");


    useEffect(() => {
        actions.obtenerPlanetaSingle(params.theid + 1)
    }, [])
    return (
        <div className="jumbotron container" >
            <div className="jumbotron d-flex align-items-center">
                <div className="jumbotron-content">
                    <div className="container">
                        <div className="row bg-black p-5 bg-gradient bg-opacity-75">
                            <div className="col-md-6" style={{marginBottom:"20px"}}>
                                {parseInt(params.theid) !== 1 ?
                                     <img alt="esto es una imagen de un planeta"
                                     src={"https://starwars-visualguide.com/assets/img/planets/" + (parseInt(params.theid)) + ".jpg"} style={{width:"100%"}} />
                                     :
                                    <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" style={{width:"100%"}}/>}
                            </div>
                            <br/>
                            <div className="col-md-6 text-white">
                                <h1>{store.detalledePlaneta.name} </h1>
                                <p>It is a lonnog established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                    </div>

                    <div className="container-flex py-4">
                        <div className="row">
                            <div className="col">
                                <div className="card bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Name</h5>
                                        <p className="card-text">
                                            {store.detalledePlaneta.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Climate</h5>
                                        <p className="card-text">
                                            {store.detalledePlaneta.climate}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Population</h5>
                                        <p className="card-text">
                                            {store.detalledePlaneta.population}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Orbital Period</h5>
                                        <p className="card-text">
                                            {store.detalledePlaneta.orbital_period}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Rotation Period</h5>
                                        <p className="card-text">
                                            {store.detalledePlaneta.rotation_period}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Diameter</h5>
                                        <p className="card-text">
                                            {store.detalledePlaneta.diameter}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br />

            <Link to="/">
                <span className="btn btn-outline-warning ml-auto" role="button">
                    Back home


                </span>
            </Link>
            <br />

        </div>
    );
};