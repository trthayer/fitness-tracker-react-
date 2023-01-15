import React from "react";
import { useState } from "react";
import { DeleteRoutine } from "../../api/Routines";
import Button from "../Button";


const DeletedRoutine = ({routineId, routines, setRoutines}) => {
    const [ name, setName ] = useState("");
    const [ goal, setGoal ] = useState("");

    return (
        <div>
            
            <Button
                action={async () => {
                    const token = localStorage.getItem("token")
                    const deletedRoutines = await DeleteRoutine(routineId, name, goal, token);
                    console.log("Deleted Routine log", deletedRoutines)
                    setRoutines([...routines.filter(routines => routineId !== deletedRoutines.id),]);
                }}
                content={"Delete Routine"}
            />
        </div>
    )
}





export default DeletedRoutine;