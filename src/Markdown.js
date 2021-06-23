import React, { useState } from 'react';
import markdownIt from 'markdown-it';
import "./styles.css";

const md = new markdownIt()

export default function Markdown() {

  const [htmlString, setHtmlString] = useState('');
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
    </div>
  );
}
