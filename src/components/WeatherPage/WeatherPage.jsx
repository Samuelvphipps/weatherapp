import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function WeatherPage() {
    //dispatch setup
    const dispatch = useDispatch();
    const [location, setLocation] = useState('');
    const weather = useSelector(store => store.weatherReducer);
    console.log('weather is:', weather);
    useEffect(() => {
        dispatch({
            type: 'FETCH_WEATHER',
            payload: 'Minnesota'.toLowerCase(),
        })
    }, []);

    if(!weather.current){
        return(
            <h1>404</h1>
        )
    }

    const getLocationWeather = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'FETCH_WEATHER',
            payload: location.toLowerCase
        })
    }
    console.log(location);

    return (
        <>
            <form onSubmit={getLocationWeather}>
                <input 
                type="text" 
                value={location}
                onChange={evt => setLocation(evt.target.value)}
                ></input>
                <button type="submit">Submit</button>
            </form>
            <h1>WEATHERPAGE COMPONENT</h1>
            <p>Current Temp: {weather.current.temp_f} degrees</p>
            <p>Feels Like: {weather.current.feelslike_f} degrees</p>
            <p>Wind Speed: {weather.current.wind_mph} miles per hour</p>
        </>

    )

}

export default WeatherPage;