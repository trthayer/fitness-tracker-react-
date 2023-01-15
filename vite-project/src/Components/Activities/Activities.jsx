import React, {useState, useEffect} from "react";
import NewActivity from "./NewActivities";
import UpdatedActivity from "./UpdatedActivity";


export const Activities = () => {
    const [  activities, setActivities ] = useState([]);
    const token = localStorage.getItem('token');
    
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
            <h1 className="activities-title"><u>Activities</u></h1>
            {token ?
            <NewActivity setActivities={setActivities} activities={activities}/>
            : null}
            
            {activities?.map((activity) => {
                return (
                    <div className="map-activities" key={activity?.id}>
                        <h2>Activity: {activity?.name}</h2>
                        <h3>Description: {activity?.description}</h3>
                        {token ?
                        <UpdatedActivity setActivities={setActivities} activities={activities} activityId={activity?.id}/>
                        : null}
                    </div>
                );
            })}            
        </div>
    )
  }


