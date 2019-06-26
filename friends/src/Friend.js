import React from "react";

function Friend(props) {
    return (
        <div>
            <div>
                <h3>{props.friend.name}</h3>
            </div>

            <div>
                <strong>Age:</strong><span className="prop">{props.friend.age}</span>
            </div>

            <div>
                <strong>Email:</strong> <span className="prop">{props.friend.email}</span>
            </div>
        </div>
    );
}

export default Friend;