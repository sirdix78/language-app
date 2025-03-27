import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config/apiConfig";
import axios from "axios";

const Modules = () => {
  const { type } = useParams();
  const [modules, setModules] = useState([]);
  const [language, setLanguage] = useState("Albanian");

  useEffect(() => {
    axios
      .get(`${API_URL}/modules`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setModules(response.data);
        } else {
          console.error("Invalid data format:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching modules:", error));
  }, []);

  const filteredModules = Array.isArray(modules)
    ? modules.filter((module) => module.language === language)
    : [];
  console.log(filteredModules);
  return (
    <div className="module-container">
      <label>Select Language: </label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="Albanian">Albanian</option>
        <option value="Spanish">Spanish</option>
      </select>
      <ul>
        {filteredModules.map((module) => {
          console.log(module);
          return (
            <li key={module.id}>
              <Link
                className="module-link"
                to={
                  type === "student"
                    ? `/student/${module.url}`
                    : `/teacher/${module.url}`
                }
              >
                {module.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Modules;
