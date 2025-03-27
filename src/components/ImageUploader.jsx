import React, { useState } from "react";
import { API_URL } from "../config/apiConfig";

const ImageWithTextarea = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const response = await fetch(`${API_URL}/imgAnswer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const result = await response.json();
    setMessage(result.message);
    setText("");
  };

  return (
    <div className="center-all">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Describe the picture..."
        className=""
      />
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
      {message && <p className="text-green">{message}</p>}
    </div>
  );
};

export default ImageWithTextarea;
