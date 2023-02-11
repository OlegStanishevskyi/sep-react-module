import {useEffect, useState} from "react";
import axios from "axios";

const Launches = () => {
    const [launches,setLaunches] = useState([])
    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v3/launches/').then(value => value.data).then(value => setLaunches(value))
    },[])
    return (
        <div>
            {launches.filter(value => value.launch_year!=='2020').map(item =>{
                return(
                    <div>
                        flight_number :{item.flight_number}
                        mission_name :{item.mission_name}
                        launch_year :{item.launch_year}
                    </div>
                )
            })}
        </div>
    );
};

export {Launches};