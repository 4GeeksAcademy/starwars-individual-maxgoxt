import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import imagen from "../../img/how-to.png";

export const HomeCardPlanet = props => {
    const [fav2, setFav2] = useState("far fa-heart");
    const refs2 = useRef([]);

    const { store, actions } = useContext(Context);
    

    useEffect(() => {
        refs2.current = refs2.current.slice(0, props.length); // Maintain the same number of refs as items
    }, [props.length]);

    const toggleFavorite2 = index => {
        const newFav = [...refs2.current];
        newFav[index].className = newFav[index].className !== "far fa-heart" ? "far fa-heart" : "fas fa-heart";
        refs2.current = newFav;
        actions.cargarFavorito(props.name, props.index);
        console.log(props.name)
    };

  

    return (
        <div className="text-white my-5">
            <div className="card mx-3" style={{ width: "18rem", flex: '0 0 250px' }}>
                {props.index === 0 ?
                <img src='https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png' className="card-img-top" alt='imagen' />:
            <img src={"https://starwars-visualguide.com/assets/img/planets/" + (props.index + 1) + ".jpg"} className="card-img-top" alt='imagen' /> }
            <div className="card-body bg-dark">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="mb-3">
                        <label>Population:</label><span> {props.population}</span><br />
                        <label>Terrain:</label><span> {props.terrain}</span><br />
                    </div>
                    <div className="d-flex justify-content-between">
                        <Link to={"/singlePlaneta/" + (props.index + 1)}>
                            <button type="button" className="btn btn-outline-primary">Learn more!</button>
                        </Link>
                        <input
                            type="checkbox"
                            className="btn-check"
                            id={"btn-check-outlined" + props.index }
                            autoComplete="off"
                        />
                        <label
                            className="btn btn-outline-warning"
                            htmlFor={"btn-check-outlined" + props.index + 1}
                            id = {props.index}
                            onClick={() => toggleFavorite2(props.index)}>
                            <i className={fav2} ref={el2 => (refs2.current[props.index] = el2)} id={props.name}></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        
    )
};

HomeCardPlanet.propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    name: PropTypes.string,
    terrain: PropTypes.string,
    population: PropTypes.string,
};

HomeCardPlanet.defaultProps = {
    changeColor: null,
}