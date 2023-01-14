import React, { useState, useEffect } from "react";
import { getMyRoutines } from "../../api/routines";
import DeletedActivityFromRoutine from "./DeleteRoutineActivity";
import AddActivityToRoutine from "../Activities/AddActivityToRoutine";
import NewRoutine from "./NewRoutines";


export const MyRoutines = ({token, user}) => {
    const [ myRoutines, setMyRoutines ] = useState([]);
    const [ routines, setRoutines ] = useState([]);
    const [ activityToRoutines, setActivityToRoutines ] = useState({});
    const username = user.username

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
        {token ?
            <NewRoutine setRoutines={setRoutines} routines={routines}/>
        : null}
        {token ? 
            <AddActivityToRoutine activityToRoutines={activityToRoutines} setActivityToRoutines={setActivityToRoutines}/>
        : null }
        {token ?
            <DeletedActivityFromRoutine activityToRoutines={activityToRoutines} setActivityToRoutines={setActivityToRoutines}/>
        : null }

       {myRoutines.map(myRoutines => 
          <div key={myRoutines?.id}>
            <h2>Routine: {myRoutines?.name}</h2>
            <h4>By: {myRoutines.creatorName}</h4>
            <h3>Goal: {myRoutines?.goal}</h3>
            
          </div>
        )}
      </div>
    )
}
