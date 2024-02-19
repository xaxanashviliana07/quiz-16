import { useState } from "react";

function Content({ userData }) {
  return (
    <>
      <div className="user-container">
        <div className="avatar-container">
          <img
            src={userData.avatar_url ? userData.avatar_url : defaultAvatar}
            className="avatar-img"
          />
        </div>
        <div className="user-information">
          <h1>github data</h1>
          <h3>Id: {userData.id}</h3>
          <h3>Username: {userData.login}</h3>
        </div>
      </div>
    </>
  );
}

export default Content;