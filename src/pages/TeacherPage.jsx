import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { LuSquarePlus } from "react-icons/lu";
import { RiEditBoxLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";

const TeacherPage = () => {
  const [teachers, setTeachers] = useState([]);
  const { module } = useParams();
  // const nav = useNavigate();

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

  return (
    <div>
      <ul>
        {teachers.length > 0 ? (
          teachers.map((teacher) => (
            <li key={teacher.id}>
              <h3>{teacher.title}</h3>
              <p>{teacher.description}</p>
              <Link to={`/update/${teacher.id}`}>
                <RiEditBoxLine />
              </Link>
            </li>
          ))
        ) : (
          <p>No teachers available in this language.</p>
        )}
      </ul>
      <div className="all-icons">
        <Link to={`/create/${module}`}>
          <LuSquarePlus />
        </Link>

        <RiDeleteBinLine />
      </div>
    </div>
  );
};

export default TeacherPage;
