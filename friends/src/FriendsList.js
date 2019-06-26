import React from "react";
import Friend from "./Friend";


function FriendsList(props) {
  return (
    <div>
      {props.friends.map(item => {
        return (
        <div key={item.id}>
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