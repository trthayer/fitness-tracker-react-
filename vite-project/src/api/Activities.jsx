

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

      console.log("This activity will be added to a routine", results);
      return results;
    } catch (error) {
      console.error(error)
    }
  };



//PATCH /api/activities/:activityId
export const UpdateActivity = async (id, name, description) =>{
    
    try {
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${id}`, {
              method: "PATCH",
              body: JSON.stringify({

              name,
              description,
          })
    });
    const data = await response.json();
    return data;
        
         
        
    } catch (error) {
        console.error(error);
        
    }

}
            
         
     
         
   
        
       
    
         

    
    
    


// PATCH /api/routine_activities/:routineActivityId

// DELETE /api/routine_activities/:routineActivityId