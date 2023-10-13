import React, { useState } from "react";

function ProfileImage(props) {
  const [text, setText] = useState("First Last");

  const handleTextChange = () => {
    var name = "Norsang Nyandak";
    setText(name);
  };

  return (
    <div className="Profile">
      <img src={props.src} />
      <h1>{text}</h1>
      <button onClick={handleTextChange}>Name</button>
    </div>
  );
}

export default ProfileImage;
