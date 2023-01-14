import React, { useState } from 'react';
import { UpdateActivity } from '../../api/activities';
import Button from '../Button';


const UpdatedActivity = ({ activityId, activities, setActivities }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");     

        return (
        <div>
            <form>
            <label htmlFor="name">Update Activity Name: </label>
                <input
                value={name}
                type="text"
                placeholder="Activity Name"
                onChange={(e) => setName(e.target.value)}
                ></input>
            <label htmlFor="description">Update Description: </label>
                <input
                value={description}
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                ></input>
            </form>
            <Button
                action={async () => {
                    const token = localStorage.getItem("token")
                    // console.log("this is the token...", token)
                    const updatedActivities = await UpdateActivity(activityId, name, description, token);
                    //console.log("This is an", updatedActivities)
                    setActivities([updatedActivities, ...activities]);
                }}
                content={"Update Activity"}
            />
            </div>
        )
}


export default UpdatedActivity;