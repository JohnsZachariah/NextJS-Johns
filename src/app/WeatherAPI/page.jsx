
'use client'
import React, {useState, useEffect } from 'react'

import axios from 'axios'


const page = () => {
    const [city,setCity] = useState("Kochi")

    const [weather,setWeather] = useState()

    const [loading, setLoading] = useState(false);

    const getWeather = async () => {


    try {
      setLoading(true);

      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            appid:"ae13467a0e7d1946d7a59f9645f9b51b",
            units: "metric",
          },
        },
      );

      setWeather(response.data);
       console.log(response.data);
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
  };



useEffect(() => {
    getWeather()

}, [])

  
console.log(weather)


  return (
   
    <div className="justify-center items-center flex flex-col gap-4">
            
       
           <h1 className="text-4xl text-green-500">City Name: {weather?.name}</h1>
           <div className="text-2xl">
           <p>Latitude={weather?.coord?.lat}</p>
           <p>Longitude={weather?.coord?.lon}</p>

           <p>Humidity:{weather?.main?.humidity}</p>
           <p>Pressure:{weather?.main?.pressure}</p>
            </div>
    </div>
 


  )
}

export default page