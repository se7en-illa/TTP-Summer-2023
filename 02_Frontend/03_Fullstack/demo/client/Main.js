import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      const { data } = await axios.get("/api/students");
      setStudents(data);
    }

    fetchStudents();
  }, []);

  return (
    <>
      <h1>Students list</h1>
      <ul id="main">
        {students.map((student) => (
          <li>
            {student.name} | {student.registrationId}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Main;
