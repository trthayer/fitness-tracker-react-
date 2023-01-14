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
      // console.log("API console log", name, goal, token)
      const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
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

// PATCH
export const UpdateRoutine = async (routineId, name, goal, token) => {
  try {
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
      })
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error)
  }
}

export const getMyRoutines = async (username, token) => {
  try {
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
  // console.log("response", response)     
  const data = await response.json();
  return data;
} catch (error) {
  console.error(error)
}
}
  // DELETE /api/routines/:routineId
  export const DeleteRoutine = async (routineId, name, goal, token) => {
    try {
      const response = await fetch (`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          goal,
        }),
      })
      const data = response.json();
      return data;
    } catch (error) {
      console.error(error)
      
    }
  }