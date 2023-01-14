import React, {useState, useEffect} from "react";
import UpdatedRoutine from "./UpdatedRoutine";


export const Routines = () => {
    const [ routines, setRoutines ] = useState([]);
    const token = localStorage.getItem('token');

    const handleClick = (e) => {
        e.preventDefault();
    }

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
            
        {routines.map((routine) => {
            return (
            <div key={routine?.id}>
                <h2>{routine?.name}</h2>
                <h4>By: {routine.creatorName}</h4>
                <h3>Goal: {routine?.goal}</h3>
                <div>
                {routine.activities.map((activity) => {
                    return (
                    <div key={activity.id}>
                        <h3>Exercise: {activity.name}</h3>
                        <h4>Description: {activity.description}</h4>
                        <h4>Duration: {activity.duration}</h4>
                        <h4>Count: {activity.count}</h4>
                    </div>
                    );
                })}
                {token ?
                <UpdatedRoutine setRoutines={setRoutines} routines={routines} routineId={routine?.id}/>
                : null }
                </div>
            </div>
            );
        })},
        </div>
    )
}

