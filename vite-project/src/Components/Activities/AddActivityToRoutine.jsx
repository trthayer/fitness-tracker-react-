import React, { useState } from 'react';
import { addActivityToRoutine } from '../../api/activities';
import Button from '../Button';

const AddActivityToRoutine = ({ activityToRoutines, setActivityToRoutines, token }) => {
    const [activityId, setActivityId] = useState("");
    const [count, setCount] = useState("");
    const [duration, setDuration] = useState("");
    
    return (
        <div>
            <form>
            <label htmlFor="activityId">Activty ID</label>
                <input
                value={activityId}
                type="text"
                placeholder="Activity ID"
                onChange={(e) => setActivityId(e.target.value)}
                ></input>
            <label htmlFor="count">Activty Count</label>
                <input
                value={count}
                type="text"
                placeholder="Activity Count"
                onChange={(e) => setCount(e.target.value)}
                ></input>
            <label htmlFor="duration">Duration:</label>
                <input
                value={duration}
                type="text"
                placeholder="Duration"
                onChange={(e) => setDuration(e.target.value)}
                ></input>
            </form>
            <Button
                action={async () => {
                    const token = localStorage.getItem("token");
                    const newActivityToRoutine = await addActivityToRoutine(activityId, count, duration, token);
                    setActivityToRoutines([newActivityToRoutine, ...activityToRoutines]);
                }}
                content={"Add an Activity"}
            />

        </div>
    )
}

    export default AddActivityToRoutine