import React, {useState, useEffect} from "react";




export const Activities = () => {
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

export const createNewActivity = async (name, description, token) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
            method: "POST",
            headers: {
                // 'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`,
              },
            body: JSON.stringify({
              name: name,
              description: description,
            }),
          });

          const results = await response.json();
          
          console.log("This is a new created activity", results)
          return results        
    } catch (error) {
        console.error(error)
    }
};

export const addActivityToRoutine = async (activityId, count, duration) => {
    try {
      const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${activityId}/activities`, {
        method: "POST",
        body: JSON.stringify({
          activityId: activityId,
          count: count, 
          duration: duration,
        })
      });

      const results = await response.json();

      console.log("This activy will be added to a routine", results);
      return results;
    } catch (error) {
      console.error(error)
    }
  };



//PATCH /api/activities/:activityId

// PATCH /api/routine_activities/:routineActivityId

// DELETE /api/routine_activities/:routineActivityId