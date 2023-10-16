import { useState, useEffect } from "react";
import getUser from "../hooks/useGetUser";
import UserCard from "../components/UserCard";
import "../styles/App.css";

const Home = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser(username);
        setUser(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchUser();
  }, [username]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUsername(event.target.value);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="search" placeholder="username" onKeyDown={handleKeyDown} />
        {user?.message === 'Not Found' ? <p>No user</p> : <UserCard
          avatar={user?.avatar_url}
          name={user?.name}
          login={user?.login}
          bio={user?.bio}
          followers={user?.followers}
          following={user?.following}
          repos={user?.public_repos}
        />}
      </form>
    </div>
  );
};

export default Home;
