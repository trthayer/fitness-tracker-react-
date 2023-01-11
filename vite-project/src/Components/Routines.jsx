import React, {useState, useEffect} from "react";




export const Routines = () => {
    const [ routines, setRoutines ] = useState([]);

   useEffect(() => {
    const getRoutines = async ()=> {
        const response = await fetch ('http://fitnesstrac-kr.herokuapp.com/api/routines');
        const data = await response.json();
        setRoutines(data);
    }
    getRoutines();
   }, [])

    return (
        <div className="routines">
            <h1 className="routines-title">Routines</h1>
            {
                routines.map(routine =>
                    <div key={routine.id}>
                        <h2>{routine.creatorName}</h2>
                        <h3>{routine.name}</h3>
                        <h3>{routine.goal}</h3>
                    </div>)
            }
        </div>
    )
}

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

  export const createNewRoutine = async (name, goal, isPublic, token) => {
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
          isPublic: null
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