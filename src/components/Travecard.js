import React from "react"

export default function Travelcard(props){
    return(
        <section className="travel-card">
        <div className="img-container">
        <img className="place--img" src={require(`./../Images/${props.item.img}`)} />
        </div> 
        <div className="card-details">
            <div className="card-details--topbar">
             <div><img  className="location-logo" src={require("./../Images/location.jpg")}/></div>
             <div className="location-country">{props.item.country}</div>
             <div className="location-link"><a href={props.item.link}>Click Here to view on Map</a></div>
            </div>
            <div className="location-place">{props.item.place}</div>
            <div className="duration-date">{props.item.date}</div>
            <div className="location-description">{props.item.description}</div>
        </div>
        </section>
    )
}