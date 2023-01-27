import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

function WeatherPage(){
    //dispatch setup
    const dispatch = useDispatch();
    const [location, setLocation] = useState('');


    useEffect(()=>{

        dispatch ({
            type: 'FETCH_WEATHER',
            payload: 'Minnesota'.toLowerCase(),
        })
        
    }, []);


    return(
        <h1>WEATHERPAGE COMPONENT</h1>
    )

}

export default WeatherPage;