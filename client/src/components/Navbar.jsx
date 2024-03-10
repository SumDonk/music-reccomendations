import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css'

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data here and update the state
    // setUser({ name: 'John Doe', profilePicture: '/path/to/profile/picture' });
  }, []);

  return (
    <nav className={styles.navbar}>
      <h1>Music Recs</h1>
      <div>
      <button className='btn btn-info'>Artists</button>
      <button className='btn btn-info'>Tracks</button>
      </div>
      <div>
        {user ? (
          <div>
            <img src={user.profilePicture} alt="Profile" />
            <span>{user.name}</span>
          </div>
        ) : (
          <button className='btn btn-success'>Login</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
