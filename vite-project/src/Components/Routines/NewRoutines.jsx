import React, { useState } from 'react';
import { createNewRoutine } from '../../api/routines';
import Button from '../Button';

const NewRoutine = ({ routines, setRoutines }) => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");

    return (
        <div>
            <form>
            <label htmlFor="name">Routine Name:</label>
                <input
                value={name}
                type="text"
                placeholder="Routine Name"
                onChange={(e) => setName(e.target.value)}
                ></input>
            <label htmlFor="goal">Routine Goal:</label>
                <input
                value={goal}
                type="text"
                placeholder="Routine Goal"
                onChange={(e) => setGoal(e.target.value)}
                ></input>
            </form>
            <Button
                action={async () => {
                    const token = localStorage.getItem("token");
                    const newRoutine = await createNewRoutine(name, goal, token);
                    setRoutines([newRoutine, ...routines]);
                }}
                content={"Create New Routine"}
            />

        </div>
    )
}


    export default NewRoutine