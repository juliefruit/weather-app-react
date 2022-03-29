import React from "react";
import axios from "axios";

export default function Weather(){
        
    function getTemp(response){
            let temp = Math.round(response.data.main.temp);
            let city = "Vancouver";
            alert(`The temperature in ${city} is ${temp} °C`)
        }
        
        let apiKey = "1fad0a2b796c76984806752d55e86c73";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(getTemp);    

        return (
            <div>
                <h1>Hello from Weather</h1>
            </div>
        );
}
