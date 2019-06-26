import React from "react";
import Friend from "./Friend";


function FriendsList(props) {
  return (
    <div>
      {props.friends.map(item => {
        return (
          <Friend
            friend={item}
          />
        );
      })}
    </div>
  );
}

export default FriendsList;