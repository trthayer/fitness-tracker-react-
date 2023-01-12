import React, {useState, useEffect} from "react";
import { UpdateActivity } from "../api/activities";
import NewActivity from "./NewActivities";
import UpdatedActivity from "./UpdatedActivity";


export const Activities = () => {
    const [  activities, setActivities ] = useState([]);
    const [ activityId, setActivityId ] = useState([]);
    const [ name, setName ] = useState([])
    const [ description, setDescription ] = ([]);

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

   //console.log(activities);
  

return (
        <div className="activities">
            <h1 className="activities-title">Activities</h1>
            <NewActivity setActivities={setActivities} activities={activities}/>
            
            {activities?.map(activity =>
                    <div key={activity?.id}>
                        <h2>{activity?.name}</h2>
                        <h3>{activity?.description}</h3>
                        <UpdatedActivity setActivities={setActivities} activities={activities} activityId={activity?.id}/>
                    </div>)}
            
        </div>
    )
  }


