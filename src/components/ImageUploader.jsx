import React, { useState } from "react";
import alFoodImg from "../images/taveKosi.webp";
const ImageWithTextarea = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5005/imgAnswer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const result = await response.json();
    setMessage(result.message);
    setText(""); // Clear textarea after submitting
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      {/* Display image from public folder */}
      {/* <img src={alFoodImg} alt="Displayed" className="" /> */}

      {/* Textarea for input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
        className=""
      />
      <button
        onClick={handleSubmit}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Submit
      </button>
      {/* Success Message */}
      {message && <p className="text-green-600 mt-2">{message}</p>}
    </div>
  );
};

export default ImageWithTextarea;
