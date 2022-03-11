import DefaultUserAvatar from "../../assetss/ava.jpg";
import "./Users.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let totalPage = Math.ceil(props.totalCount / props.count);
  let pagesArr = [];
  for (let i = 1; i <= totalPage; i++) {
    pagesArr.push(i);
  }

  return (
    <div>
      {props.preloader === false ? (
        <div className={"users"}>
          <div className="users__pagination">
            {pagesArr.map((p) => {
              return (
                <span
                  key={p}
                  className={props.activePag === p && "active"}
                  onClick={() => props.onSetActivePag(p)}
                >
                  {p}
                </span>
              );
            })}
          </div>
          {props.users.map((user) => {
            return (
              <div className="users__user" key={user.id}>
                <div className="user__accbody">
                  <div className="user__accbody--avatar">
                    <img
                      src={
                        user.photos.small !== null || undefined
                          ? user.photos.small
                          : DefaultUserAvatar
                      }
                      alt="Avatar"
                    />
                  </div>
                  <div className="user__accbody--name">
                    <h2>
                      <NavLink to={"/profile/" + user.id}>{user.name}</NavLink>
                    </h2>
                  </div>
                </div>
                <div className="users__follow">
                  <button onClick={() => props.onFollow(user.id)}>
                    {user.followed ? "Unfollow" : "Follow"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Users;
