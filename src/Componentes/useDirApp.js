import axios  from 'axios';
import { useState, useEffect } from 'react';

const useDirApp = () => {

    const [clima,setClima]=useState(null);

    useEffect(()=>{
        let error=()=>console.log("Error");

        let exito=posicion=>{
        var lat= posicion.coords.latitude;
        var lon= posicion.coords.longitude;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=307298b190f88060b9d58d5a9e6d892b`)
        .then(res=>setClima(res.data));
        }
        
        navigator.geolocation.getCurrentPosition(exito,error);
     
    },[]); 
    return clima;
};

export default useDirApp;