import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";



const TeacherPage = () => {
   const [teachers, setTeachers] = useState([]);
 const { module } = useParams();
  
  //const [language, setLanguage] = useState("Albanian");
  useEffect(() => {

    console.log("module id:", module);

    axios
      .get(`http://localhost:5005/teachers?url=${module}`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setTeachers(response.data);
        } else {
          console.error("Invalid data format:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching teachers:", error));
  }, [module]);
  /*const filteredTeachers =
    teachers?.filter((teacher) => teacher.language === language) || [];*/

  return (
    <div>
      {/* <label>Select Language: </label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="Spanish">Spanish</option>
        <option value="Albanian">Albanian</option>
      </select> */}
      <ul>
        {teachers.length > 0 ? (
          teachers.map((teacher) => (
            <li key={teacher.id}>
              <h3>{teacher.title}</h3>
              <p>{teacher.description}</p>
              <Link to={`/teacher/${teacher.url}`}>Go to student page</Link>
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
