import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateTeacherPage = () => {
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const nav = useNavigate();
  const { module } = useParams();

  function handleCreateLesson(event) {
    event.preventDefault();
    const newLesson = {
      title,
      description,
      //   language,
    };
    fetch("http://localhost:5005/teachers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLesson),
    })
      .then((res) => res.json())
      .then((parsed) => {
        console.log("Fetch is working: ", parsed);
        // nav("/teacher");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setID("");
        setTitle("");
        setDescription("");
      });
    nav(`/teacher/${module}`);
  }
  return (
    <div>
      <form onSubmit={handleCreateLesson}>
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
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateTeacherPage;
