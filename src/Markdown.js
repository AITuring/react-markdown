import React, { useState } from 'react';
import markdownIt from 'markdown-it';
import "./styles.css";

const md = new markdownIt();

export default function Markdown() {

  const [htmlString, setHtmlString] = useState('');

  const parse = (text) => setHtmlString(md.render(text));
  return (
    <div className="mdContainer">
      <textarea
        className="edit"
        onChange={(e)=> parse(e.target.value)} // 编辑区内容每次改变更新htmlString
      >
      </textarea>
      <div
        className="show"
        dangerouslySetInnerHTML={{__html: htmlString}} // html字符串解析成真正的html标签
      >
      </div>
    </div>
  );
}
