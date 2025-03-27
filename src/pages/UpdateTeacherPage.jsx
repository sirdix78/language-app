import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/apiConfig";
import axios from "axios";

const UpdateTeacherPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/teachers/${id}`)
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
      .patch(`${API_URL}/teachers/${id}`, updateLesson)
      .then((res) => {
        console.log("successfully updated", res.data);
        nav(`/teacher/${res.data.url}`);
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
