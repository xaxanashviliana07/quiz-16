import { useState, useEffect } from "react";
import axios from "axios";
import Header from './components/Header'
import Content from './components/Content'
import Icon from './assets/images/loupe.png'

import './App.css'

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (username) {
        const res = await axios
          .get(`https://api.github.com/users/${username}`)
          .catch((error) => {
            setUserData(null);
            setError("This user doesn't exist");
          });
        if (res) {
          setError(null);
          setUserData({
            id: res.data.id,
            login: res.data.login,
            bio: res.data.bio,
            avatar_url: res.data.avatar_url,
          });
        }
      }
    };
    fetchData();
  }, [username]);

  return (
    <>
      
      <div className="container">
        <Header/>
        <div className="search-container">
          <img className="search-icon" src={Icon}/>
          <input className="input" type="text" placeholder="Search GitHub username..." value={username}
            onChange={(e) => setUsername(e.target.value)}></input>
          <button className="search-btn">Search</button>
      
          
        </div>
        <div>
          {error && <p>{error}</p>}

          {userData && <Content userData={userData} />}
        </div>
      </div>
    </>
  )
}

export default App
