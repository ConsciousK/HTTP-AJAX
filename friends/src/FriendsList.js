import React from "react";
import Friend from "./Friend";


function FriendsList(props) {
  return (
    <div  key={props.friends.id}>
      {props.friends.map(item => {
        return (
        <div>
            <Friend
                friend={item}
            />
        </div>
        );
      })}
    </div>
  );
}

export default FriendsList;