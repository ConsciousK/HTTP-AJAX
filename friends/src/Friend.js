import React from "react";

function Friend(props) {
    return (
        <div className="characterBox">
            <p className="characterItem">
                <h3>{props.friend.name}</h3>
            </p>
            <p className="characterItem">
                <strong>Age:</strong><span className="prop">{props.friend.age}</span>
            </p>
            <p className="characterItem">
                <strong>Email:</strong> <span className="prop">{props.friend.email}</span>
            </p>
        </div>
    );
}

export default Friend;