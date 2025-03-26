import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import PuzzleGame from "../components/PuzzleGame";
import QuizGame from "../components/QuizGame";
import ImageUploader from "../components/ImageUploader";
const StudentPage = () => {
  const [students, setStudents] = useState([]);
  const { module } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("module id:", module);
    axios
      .get(`http://localhost:5005/students?url=${module}`)
      .then((response) => {
        console.log("received response:", response);
        if (Array.isArray(response.data)) {
          setStudents(response.data);
        } else {
          console.error("Invalid data format:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching students:", error));
  }, [module]);

  return (
    <div>
      <ul>
        {students.length > 0 ? (
          students.map((student) => (
            <li key={student.id}>
              <h3>{student.title}</h3>
              <p>{student.description}</p>

              <span>
                {student.video && (
                  <ReactPlayer
                    url={student.video}
                    controls
                    width="640px"
                    height="360px"
                  />
                )}
              </span>
              <PuzzleGame />
              <QuizGame />
              <img src={student.image}></img>
              <ImageUploader />
            </li>
          ))
        ) : (
          <p>No students available in this language.</p>
        )}
      </ul>
    </div>
  );
};

export default StudentPage;
