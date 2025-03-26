import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateTeacherPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  // const nav = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5005/teachers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetch is working: ", data);
        setTitle(data.title);
        setDescription(data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleUpdateLesson(event) {
    event.preventDefault();
    const updateLesson = {
      title,
      description,
    };
    axios
      .patch(`http://localhost:5005/teachers/${id}`, updateLesson)
      .then((res) => {
        console.log("successfully updated", res.data);
        // nav("/teacher/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <form onSubmit={handleUpdateLesson}>
        <label>
          Lesson title
          <input
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </label>
        <label>
          Lesson description:
          <input
            type="text"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </label>
        <button>Update</button>
      </form>
    </div>
  );
};
export default UpdateTeacherPage;
