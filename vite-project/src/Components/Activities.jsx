import React, {useState, useEffect} from "react";
import { UpdateActivity } from "../api/activities";
import NewActivity from "./NewActivities";


export const Activities = () => {
    const [  activities, setActivities ] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
    }
    
    useEffect(() => {
    const getActivities = async ()=> {
        const response = await fetch ('http://fitnesstrac-kr.herokuapp.com/api/activities');
        const data = await response.json();
        // console.log("these are the activiites...", data);
        setActivities(data);
    }
    getActivities();
   }, [])

   return (
        <div className="activities">
            <h1 className="activities-title">Activities</h1>
            <NewActivity setActivities={setActivities} activities={activities}/>
                {activities.map(activity =>
                    <div key={activity.id}>
                        <h2>{activity.name}</h2>
                        <h3>{activity.description}</h3>
                        <button 
                        type="button"
                        >Edit</button>
                    </div>)}
            
        </div>
    )
  }


