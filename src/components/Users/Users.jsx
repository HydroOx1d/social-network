import DefaultUserAvatar from "../../assetss/ava.jpg";
import "./Users.css";
import React from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'

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
                  {!user.followed ? (
                    <button onClick={() => {
                      axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + user.id, null, {
                        withCredentials: true,
                        headers: {
                          'API-KEY' : "80fef642-e7fd-43ef-8b25-aaf185dbdf76"
                        }
                      }).then(res => {
                        if(res.data.resultCode == 0) {
                          props.onFollow(user.id);
                        }
                      })
                    }}>
                      follow
                    </button>
                  ) : (
                    <button onClick={() => {
                      axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + user.id, {
                        withCredentials: true,
                        headers: {
                          'API-KEY' : "80fef642-e7fd-43ef-8b25-aaf185dbdf76"
                        }
                      }).then(res => {
                        if (res.data.resultCode == 0) {
                          props.onUnFollow(user.id);
                        }
                      })
                    }}>
                      Unfollow
                    </button>
                  )}
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
