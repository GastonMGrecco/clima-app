import { useState, useEffect } from 'react';
import noche from "../noche.gif";
import dia from "../imgfondo.gif";
import useDirApp from "./useDirApp";

function Clima() {
    const conversorKC = (kelvin, grado) => [Math.round(kelvin - 273.15), grado];
    const conversorKF = (kelvin, grado) => [Math.round((kelvin - 273.15) * 9 / 5 + 32), grado];
    const clima=useDirApp();
    const [tempe, setTempe] = useState([]);
    const [imagen,setImagen] = useState([]);
    useEffect(()=>{
        setTempe(conversorKC(clima?.main.temp, "°C"));
        setImagen(`http://openweathermap.org/img/wn/${clima?.weather[0].icon}@2x.png`);
        },
        [clima?.main.temp,`http://openweathermap.org/img/wn/${clima?.weather[0].icon}@2x.png`]);
    
    const conversor = () => {
        if (tempe[1] === "°C") {
            setTempe(conversorKF(clima?.main.temp, "°F"));
        } else {
            setTempe(conversorKC(clima?.main.temp, "°C"));
        }
    };
    
    console.log(clima);
    
    return (

        <div className="fondo" style={  clima?.weather[0].icon === "01n" ||
                                        clima?.weather[0].icon === "02n" ||
                                        clima?.weather[0].icon === "03n" ||
                                        clima?.weather[0].icon === "04n" ||
                                        clima?.weather[0].icon === "09n" ||
                                        clima?.weather[0].icon === "10n" ||
                                        clima?.weather[0].icon === "11n" ||
                                        clima?.weather[0].icon === "13n" ||
                                        clima?.weather[0].icon === "50n" ?
                                        { backgroundImage: `url("${noche}")` } :
                                        { backgroundImage: `url("${dia}")` }}>
            <div className='tarjeta'>
                <h1>País: {clima?.sys.country}</h1>
                <h2>Ciudad: {clima?.name}</h2>
                <img src={imagen} alt="imagen" />
                <p>Temperatura: {tempe} </p>
                <p>Humedad: {clima?.main.humidity} % </p>
                <p>Visibilidad: {clima?.visibility} metros</p>
                <button onClick={conversor}>{tempe[1] === "°C" ? "Fahrenheit" : "Celsius"}</button>
            </div>
        </div>
    );
}

export default Clima;