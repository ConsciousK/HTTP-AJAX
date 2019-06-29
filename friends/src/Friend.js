import React from "react";
import { Link }  from "react-router-dom"

function Friend(props) {

    if (!props.friend) {
		return <div>Loading...</div>
    }
    
    return (
        <div>
            <div>
                <h3>{props.friend.name}</h3>
                <Link to={`/edit/${props.friend.id}`}>Edit</Link>
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