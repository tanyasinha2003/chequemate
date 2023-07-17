import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
export default function Welcome() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("userData"));
    if (items) {
      setUserData(items);
    }
  }, []);
  console.log(userData);
  return (
    <Container>
      <h1>Welcome {userData.fName + " " + userData.lName}</h1>
      <p>You are {userData.age} years old.</p>
    </Container>
  );
}
