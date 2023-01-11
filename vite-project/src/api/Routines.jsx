export const getRoutinesByActivity = async (activityId) => {
    try {
      const respose = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activityId}/routines`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const results = await response.json();
      
      console.log("These are Routines by Actiity", results)
      return results;
    } catch (error) {
      console.error(error)
    }
  };

  export const createNewRoutine = async (name, goal, token) => {
    try {
      const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
        method: "POST",
        headers: {
          // 'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          goal: goal,
        })
      });
  
      const results = await response.json();
  
      console.log("This is a newly created routine", results);
      return results;
    } catch (error) {
      console.error(error)
    }
  };


  // DELETE /api/routines/:routineId