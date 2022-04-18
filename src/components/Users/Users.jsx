import DefaultUserAvatar from "../../assetss/ava.jpg";
import "./Users.css";
import React from "react";
import { NavLink } from "react-router-dom";
import {Pagination} from '../common/Pagination/Pagination'

const Users = (props) => {


  return (
    <div>
      <div className={"users"}>
        <Pagination
          onSetActivePag={props.onSetActivePag}
          activePag={props.activePag}
          totalCount={props.totalCount}
          count={props.count}
        />
        {props.preloader === false ? (
          <>
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
                        <NavLink to={"/profile/" + user.id}>
                          {user.name}
                        </NavLink>
                      </h2>
                    </div>
                  </div>
                  <div className="users__follow">
                    {!user.followed ? (
                      <button
                        disabled={props.isFollowing.some((id) => id == user.id)}
                        className={
                          props.isFollowing.some((id) => id == user.id)
                            ? "is-disable"
                            : null
                        }
                        onClick={() => {
                          props.onFollow(user.id);
                        }}
                      >
                        follow
                      </button>
                    ) : (
                      <button
                        disabled={props.isFollowing.some((id) => id == user.id)}
                        className={
                          props.isFollowing.some((id) => id == user.id)
                            ? "is-disable"
                            : null
                        }
                        onClick={() => {
                          props.onUnFollow(user.id);
                        }}
                      >
                        Unfollow
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Users;
