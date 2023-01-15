import React, { useState, useEffect } from "react";
import { getMyRoutines } from "../../api/routines";
import DeletedActivityFromRoutine from "./DeleteRoutineActivity";
import AddActivityToRoutine from "../Activities/AddActivityToRoutine";
import NewRoutine from "./NewRoutines";
import DeletedRoutine from "./DeletedRoutine";
import UpdatedRoutine from "./UpdatedRoutine";


export const MyRoutines = ({token, user}) => {
    const [ myRoutines, setMyRoutines ] = useState([]);
    const [ routines, setRoutines ] = useState([]);
    const [ activityToRoutines, setActivityToRoutines ] = useState({});
    const username = user.username
    // console.log("myRoutines username", username)

    useEffect (() => {
      const getRoutines = async () => {
        const allMyRoutines = await getMyRoutines(username, token)
        setMyRoutines(allMyRoutines);
      }
      getRoutines();
    }, [])

    return (
      <div className="myroutines">
        <h1 className="myroutines-title">My Routines</h1>
        <NewRoutine setRoutines={setRoutines} routines={routines}/>
        
        {myRoutines.map((myRoutine) => {
          return (
            <div key={myRoutine?.id}>
              <h2>Routine: {myRoutine?.name}</h2>
              <h4>By: {myRoutine.creatorName}</h4>
              <h3>Goal: {myRoutine?.goal}</h3>
                  <UpdatedRoutine setRoutines={setRoutines} routines={routines} routineId={myRoutine?.id}/>
                  <AddActivityToRoutine activityToRoutines={activityToRoutines} setActivityToRoutines={setActivityToRoutines}/>
                  <DeletedActivityFromRoutine activityToRoutines={activityToRoutines} setActivityToRoutines={setActivityToRoutines}/>
                  <DeletedRoutine setRoutines={setRoutines} routines={routines} routineId={routines?.id}/>
            </div>
          );
        })}
      </div>
    )
}
