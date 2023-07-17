import { useState, useEffect } from "react";
export default function Welcome() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("userData"));
    if (items) {
      setUserData(items);
    }
  }, []);
  console.log(userData);
  return <h1>Welcome {userData.fName + " " + userData.lName}</h1>;
}
