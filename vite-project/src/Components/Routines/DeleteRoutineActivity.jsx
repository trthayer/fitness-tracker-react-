import React, { useState } from "react";
import { DeleteRoutineActivity } from "../../api/activities";
import Button from "../Button";


const DeletedActivityFromRoutine = ({activityToRoutines, setActivityToRoutines, token}) => {
    const [activityId, setActivityId] = useState("");
    const [count, setCount] = useState("");
    const [duration, setDuration] = useState("");

    return (
        <div>
            
            <Button
                action={async () => {
                    const token = localStorage.getItem("token");
                    const newActivityToRoutine = await DeleteRoutineActivity(activityId, count, duration, token);
                    setActivityToRoutines([newActivityToRoutine, ...activityToRoutines]);
                }}
                content={"Delete Activity"}
            />

        </div>
    )
}


export default DeletedActivityFromRoutine