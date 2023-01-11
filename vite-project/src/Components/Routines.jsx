import React, {useState, useEffect} from "react";
import NewRoutine from "./NewRoutines";


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
            <NewRoutine setRoutines={setRoutines} routines={routines}/>
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

