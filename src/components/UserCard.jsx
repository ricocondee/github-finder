import React from "react"
import userCardStyles from "../styles/userCard.module.css"

const UserCard = ({name, bio, followers, following, repos, avatar, login }) => {
  return (
    <div className={userCardStyles.container}>
      <img src={avatar} alt={name} id="image"/>
      <h1>{name}</h1>
      <p>{bio}</p>
      <p>{login}</p>
      <div className={userCardStyles.details}>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Repos: {repos}</p>
      </div>
    </div>
  );
}

export default UserCard