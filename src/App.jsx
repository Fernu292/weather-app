import { useState } from 'react';
import './App.css';
//Components
import Header from './Components/Header';
import Cuestionario from "./Components/Cuestionario";
import Clima from './Components/Clima';


const App = () => {

    const [clima, setClima] = useState({ 
        city: '', 
        country: ''
    });

    const[time, setTime] = useState({})

    const [show, setShow] = useState(false);
    
    
    
    const handleApi = async (city, country)=>{
        const ApiKey = '1dcdb6aa8a5c78f69a584a6fc4247b03';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}`;

        const respuesta = await fetch(url);

        const Weather = await respuesta.json();

        const {main, weather} = Weather;

        const { temp_max, temp_min, humidity } = main;
        const [{description}] = weather;

        const Time ={
            Temp_max: temp_max,
            Temp_min: temp_min,
            Humidity: humidity,
            Description: description
        }

        setTime(Time);
        setShow(true);
    }

    const {busqueda} = clima;


    return ( 
        <div className = 'header'>
            <Header />
            <Cuestionario 
            setClima={setClima}
            handleApi = {handleApi}
            />

            {show ? <Clima busqueda={busqueda} time={time} />: null}

        </div>
     );
}
 
export default App;