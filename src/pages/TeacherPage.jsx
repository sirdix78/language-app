import React, { useEffect, useState } from "react";
import axios from "axios";

const TeacherPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [language, setLanguage] = useState("Albanian");
  useEffect(() => {
    axios
      .get("http://localhost:5005/teachers")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setTeachers(response.data);
        } else {
          console.error("Invalid data format:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching teachers:", error));
  }, []);
  const filteredTeachers =
    teachers?.filter((teacher) => teacher.language === language) || [];

  return (
    <div>
      <label>Select Language: </label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="Spanish">Spanish</option>
        <option value="Albanian">Albanian</option>
      </select>
      <ul>
        {filteredTeachers.length > 0 ? (
          filteredTeachers.map((teacher) => (
            <li key={teacher.id}>
              <h3>{teacher.title}</h3>
              <p>{teacher.description}</p>
            </li>
          ))
        ) : (
          <p>No teachers available in this language.</p>
        )}
      </ul>
    </div>
  );
};

export default TeacherPage;
