import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { LuSquarePlus } from "react-icons/lu";
import { RiEditBoxLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { API_URL } from "../config/apiConfig";
import ReactPlayer from "react-player";

const TeacherPage = () => {
  const [teachers, setTeachers] = useState([]);
  const { module } = useParams();

  useEffect(() => {
    console.log("module id:", module);

    axios
      .get(`${API_URL}/teachers?url=${module}`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setTeachers(response.data);
        } else {
          console.error("Invalid data format:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching teachers:", error));
  }, [module]);

  function handleDelete(id) {
    axios
      .delete(`${API_URL}/teachers/${id}`)
      .then(() => {
        const filteredTeachers = teachers.filter(
          (teacher) => teacher.id !== id
        );
        setTeachers(filteredTeachers);
      })
      .catch((error) => console.error("Error deleting teacher:", error));
  }

  return (
    <div>
      <ul>
        {teachers.length > 0 ? (
          teachers.map((teacher) => (
            <li key={teacher.id}>
              <h3>{teacher.title}</h3>
              <p>{teacher.description}</p>
              {teacher.video && (
                <ReactPlayer
                  url={teacher.video}
                  controls
                  width="640px"
                  height="360px"
                  style={{ margin: "0 auto", display: "block" }}
                />
              )}
              <img className="student-img" src={teacher.image}></img>
              <div className="update-icon">
                <Link to={`/update/${teacher.id}`}>
                  <RiEditBoxLine className="icon" />
                </Link>
                <button onClick={() => handleDelete(teacher.id)}>
                  <RiDeleteBinLine />
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No teachers available in this language.</p>
        )}
      </ul>
      <div className="all-icons">
        <Link to={`/create/${module}`}>
          <LuSquarePlus className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default TeacherPage;
