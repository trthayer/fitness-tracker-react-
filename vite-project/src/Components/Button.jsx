import React from "react";

const Button = ({ action, content, nameOfClass }) => {
    // console.log("Button Action", action)
    return (
        <div>
            <button className={nameOfClass} onClick={action}>{content}</button>
        </div>
    )
}

export default Button