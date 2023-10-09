import React from 'react'
import marked from "https://cdn.skypack.dev/marked@3.0.7";
import './Previewer.css';

// Configured marked to interpret line breaks
marked.setOptions({
    breaks: true,
  });
  
  // Renderer instance for marked
  const renderer = new marked.Renderer();
  
  const Previewer = ({ markdown }) => {
    const renderedMd = marked(markdown, {renderer});
    return (
      <>
      <div className='border-one'>
      <h2 className="text-header">Output</h2>
        <div 
            id="preview"
            dangerouslySetInnerHTML={{ __html: renderedMd }}
            className='border rounded'
            ></div>
        </div>
      </>
    );
  };

  export default Previewer;