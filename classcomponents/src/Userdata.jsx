// This code is intended to fetch and display user data.
// Identify and correct the problem to make it work.
import React, { useState, useEffect } from "react";
function Userdata() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
export default Userdata;
