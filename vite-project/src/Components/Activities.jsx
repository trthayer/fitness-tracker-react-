import React, {useState, useEffect} from "react";




const Activities = () => {
    const [  activities, setActivities ] = useState([]);

   useEffect(() => {
    const getActivities = async ()=> {
        const response = await fetch ('http://fitnesstrac-kr.herokuapp.com/api/activities');
        const data = await response.json();
        console.log("these are the activiites...", data);
        setActivities(data);
    }
    getActivities();
   }, [])

    return (
        <div className="activities">
            <h1 className="activities-title">Activities</h1>
            {
                activities.map(activity =>
                    <div key={activity.id}>
                        <h2>{activity.name}</h2>
                        <h3>{activity.description}</h3>
                    </div>)
            }
        </div>
    )
}

export default Activities;