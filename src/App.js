import React from "react";
import Navbar from "./components/Navbar";
import Travelcard from "./components/Travecard";
import Footer from "./components/Footer";
import data from "./data"

export default function App(){

    const cards=data.map((item)=>{
        return <Travelcard
        key={item.id}
        item={item}
/>
    })

    return(
        <div>
        <Navbar />
        <div className="cards">
        {cards}
        </div>
        <Footer />
        </div>
    )
}