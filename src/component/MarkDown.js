import React, { useState } from "react";
import Previewer from './Previewer';
import initialText from "../initialText";
import './MarkDown.css'

// Main component
const MarkDown = () => {
  const [text, setText] = useState(initialText);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="mark-style">
      <div id="editor">
        <h2 className="text-header">Editor</h2>
        <textarea
          id="editor"
          value={text}
          rows="10"
          onChange={handleChange}
          className="textarea-style shadow rounded"
        ></textarea>
      </div>
      <div className="pt-5">
        <Previewer markdown={text}/>
      </div>
    </div>
  );
};

export default MarkDown;