export const createNewActivity = async (name, description, token) => {
  console.log("name", name)
  console.log("description", description)
  try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`,
              },
            body: JSON.stringify({
              name: name,
              description: description,
            }),
          });

          const results = await response.json();
          
          // console.log("This is a new created activity", results)
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

      console.log("This activity will be added to a routine", results);
      return results;
    } catch (error) {
      console.error(error)
    }
  };

//PATCH /api/activities/:activityId
export const UpdateActivity = async (activityId, name, description, token) => {
    console.log(token);

   
    try {
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activityId}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
            name,
            description,
        }),
    });
    const data = await response.json();
    console.log("these are my updated activites...", data);
    return data;
   
    } catch (error) {
        console.error(error)
        
    }
}

// PATCH /api/routine_activities/:routineActivityId
const UpdateRoutineActivity = async (routineActivityId, count, duration) => {
    
    try {
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/api/routine_activities/${routineId}`,{
            method: "PATCH",
            body: JSON.stringify({

                routineActivityId,
                count,
                duration,
        }),
    });
    const data = await response.json();
    console.log("these are my updated routine activites...", data);
    return data;

    } catch (error) {
        console.error(error)
        
    }
}



// DELETE /api/routine_activities/:routineActivityId
export const DeleteRoutineActivity = async (routineActivityId, count, duration) => {
  try {
    const response = await fetch (`http://fitnesstrac-kr.herokuapp.com/api/api/routine_activities/${routineActivityId}`, {
      method: 'DELETE',
      body: JSON.stringify({
        
        routineActivityId,
        count,
        duration,
      })
    })
    const data = response.json();
    console.log("These are my deleted routine activities...", data)
    return data;
  } catch (error) {
    console.error(error)
    
  }
}
