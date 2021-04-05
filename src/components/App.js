import React  from "react";
import Cars from "../cars";
import {Market}   from "./Market";


function App() {
    console.log(Cars)

    return (
        <div className="inventory">
            {Cars.map((element,item) => (
                <Market key={item} carId={element.brand} carYear={element.year} carEngine={element.engine} carPower={element.horsePower} carType={element.type} carPhoto={element.image}/>
            ))}
            
            </div>

    )}

export default App;