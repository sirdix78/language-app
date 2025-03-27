import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import PuzzleGame from "../components/PuzzleGame";
import QuizGame from "../components/QuizGame";
import ImageUploader from "../components/ImageUploader";
import { API_URL } from "../config/apiConfig";
const StudentPage = () => {
  const [students, setStudents] = useState([]);
  const { module } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("module id:", module);
    axios
      .get(`${API_URL}/students?url=${module}`)
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
    <div className="student-container">
      <ul>
        {students.length > 0 ? (
          students.map((student) => (
            <li key={student.id}>
              <h3>{student.title}</h3>
              <p>{student.description}</p>

              <span className="center-all">
                {student.video && (
                  <ReactPlayer
                    url={student.video}
                    controls
                    width="640px"
                    height="360px"
                    style={{ margin: "0 auto", display: "block" }}
                  />
                )}
              </span>
              <PuzzleGame />
              <hr></hr>
              <QuizGame />
              <hr></hr>
              <img className="student-img" src={student.image}></img>
              <ImageUploader />
            </li>
          ))
        ) : (
          <p>No students available in this language.</p>
        )}
      </ul>

      <button
        onClick={() => {
          navigate(-1);
        }}
        className="back-btn"
      >
        Back
      </button>
    </div>
  );
};

export default StudentPage;
