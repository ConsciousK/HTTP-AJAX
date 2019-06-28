import React from "react";
import Friend from "./Friend";


function FriendsList(props) {
  return (
    <div>
      {props.friends.map(friend => {
        return (
        <div key={friend.id}>
            <Friend
                friend={friend}
            />
        </div>
        );
      })}
    </div>
  );
}

export default FriendsList;