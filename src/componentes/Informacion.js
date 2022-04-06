import React from "react"
import Comic from "./Comic"
import Serie from "./Serie"

export default function Informacion(props) {

    const comicsItems = props.comics.items.map(item => {
        return (
            <Comic 
              nombre={item.name}
              link={item.resourceURI}
            />
        )
    })

    const seriesItems = props.series.items.map(item => {
        return (
            <Serie 
              nombre={item.name}
              link={item.resourceURI}
            />
        )
    })

    return (
        <div className="informacion">
            <div className="superheroe">
                <img className="superheroe-imagen" src={props.imagen} alt="imagen personaje"/>
                <h1 className="superheroe-nombre">{props.nombre}</h1>
            </div>
            <div className="secciones">
                <div className="comics">
                    <h2 className="comics-titulo">COMICS</h2>
                    <p className="comics-disponibles">Comics disponibles: {props.comics.available}</p>
                    {comicsItems}
                </div>
                <div className="series">
                    <h2 className="series-titulo">SERIES</h2>
                    <p className="series-disponibles">Series disponibles: {props.series.available}</p>
                    {seriesItems}
                </div>
            </div>
        </div>
    )
}