import './App.css';
import React, { useState } from "react";
import marked from "https://cdn.skypack.dev/marked@3.0.7";
import initialText from './initialText';

// Main component
const App = () => {
  const [text, setText] = useState(initialText);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="text-center">
      <div>
        <h2 className="font-weight-bold text-uppercase text-primary fs-1">Editor</h2>
        <textarea
          id="editor"
          value={text}
          rows="10"
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <h2 className="mt-3 font-weight-bold text-uppercase text-primary fs-1">Output</h2>
        <Preview markdown={text}/>
      </div>
    </div>
  );
};

// Configured marked to interpret line breaks
marked.setOptions({
  breaks: true,
});

// Renderer instance for marked
const renderer = new marked.Renderer();

const Preview = ({ markdown }) => {
  const renderedMd = marked(markdown, {renderer});
  return (
    <div 
      id="preview"
      dangerouslySetInnerHTML={{ __html: renderedMd }}></div>
  );
};

export default App;
