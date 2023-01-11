import React, { useState } from 'react';
import { createNewActivity } from '../api/activities';
import Button from './Button';

const NewActivity = ({ activities, setActivities }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <form>
            <label htmlFor="name">Activity Name:</label>
                <input
                value={name}
                type="text"
                placeholder="Activity Name"
                onChange={(e) => setName(e.target.value)}
                ></input>
            <label htmlFor="description">Description:</label>
                <input
                value={description}
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                ></input>
            </form>
            <Button
                action={async () => {
                    const token = localStorage.getItem("token");
                    const newActivity = await createNewActivity(name, description, token);
                    console.log("This is a new created activity", newActivity)
                    setActivities([newActivity, ...activities]);
                }}
                content={"Create New Activity"}
            />

        </div>
    )
}


    export default NewActivity