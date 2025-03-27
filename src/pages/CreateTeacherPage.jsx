import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/apiConfig";
const CreateTeacherPage = () => {
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { module } = useParams();
  const [language, setLanguage] = useState("Albanian");
  const nav = useNavigate();
  function handleCreateLesson(event) {
    event.preventDefault();
    const newLesson = {
      title,
      description,
      url: module,
      language: "albanian",
    };
    fetch(`${API_URL}/teachers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLesson),
    })
      .then((res) => res.json())
      .then((parsed) => {
        console.log("Fetch is working: ", parsed);
        nav(`/teacher/${module}`);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setID("");
        setTitle("");
        setDescription("");
      });
  }
  return (
    <div className="teacher-page">
      <label>Select Language: </label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="Albanian">Albanian</option>
        <option value="Spanish">Spanish</option>
      </select>
      <form onSubmit={handleCreateLesson}>
        <label>Lesson title </label>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <label>Lesson description: </label>
        <input
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <button>Create</button>
      </form>
    </div>
  );
};
export default CreateTeacherPage;
