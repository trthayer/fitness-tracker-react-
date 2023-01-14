import React, { useState } from "react";
import { UpdateRoutine } from "../../api/routines";
import Button from "../Button";


const UpdatedRoutine = ({ routineId, routines, setRoutines}) => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");

    return (
        <div>
            <form>
            <label htmlFor="name">Routine Name</label>
                <input
                value={name}
                type="text"
                placeholder="Routine Name"
                onChange={(e) => setName(e.target.value)}
                ></input>
            <label htmlFor="goal">Goal</label>
                <input
                value={goal}
                type="text"
                placeholder="Goal"
                onChange={(e) => setGoal(e.target.value)}
                ></input>
            </form>
            <Button
                action={async () => {
                    const token = localStorage.getItem("token")
                    const updatedRoutines = await UpdateRoutine(routineId, name, goal, token);
                    console.log("Updated Routine log", updatedRoutines)
                    setRoutines({updatedRoutines, ...routines});
                }}
                content={"Update Routine"}
            />
        </div>
    )
}

export default UpdatedRoutine