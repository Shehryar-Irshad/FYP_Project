import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You can also use the built-in 'fetch' function

function Userprofile() {
  const [recentLogins, setRecentLogins] = useState([]);

  useEffect(() => {
    // Fetch recent login data
    const fetchRecentLogins = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/login/`,{
        headers:{},

        });

        if (response.status === 200) {
          setRecentLogins(response.data);
        }
      } catch (error) {
        console.error('Error fetching recent logins:', error);
      }
    };

    fetchRecentLogins();
  }, []);

  return (
    <div>
      <h2>Recently Logged In Users</h2>
      <ul>
        {recentLogins.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default Userprofile;
