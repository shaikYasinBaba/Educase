import React, { useEffect, useState } from "react";
import "./index.css"; // make sure this is correctly linked or styles copied to global CSS

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="account-page">
      <div className="account-card">
        <h2 className="account-title">Account Settings</h2>
        <div className="account-header">
          <div className="profile-pic-wrapper">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="profile-pic"
            />
            <div className="camera-icon">📷</div>
          </div>
          <div className="user-info">
            <h3>{user.name}</h3>
            <p className="user-email">{user.email}</p>
          </div>
        </div>
        <p className="user-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Home;
