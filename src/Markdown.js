import React, { useState, useEffect } from 'react';
import markdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'  // 引入github风格的代码高亮样式
import "./styles.css";
import "./catfish.css";

const md = new markdownIt({
  // 设置代码高亮的配置
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});


export default function Markdown() {

  const [htmlString, setHtmlString] = useState('');
  const [textString, setTextString] = useState('');

  useEffect(() => {
    setTextString(localStorage.getItem('text'));
    setHtmlString(parse(htmlString));
  }, [])

  const parse = (text) => setHtmlString(md.render(text));
  return (
    <div className="mdContainer">
      <textarea
        className="edit"
        value={textString}
        onChange={(e)=> {
          localStorage.setItem('text', e.target.value)
          parse(e.target.value)
          console.log(e.target.value)
          console.log(htmlString)
        }} // 编辑区内容每次改变更新htmlString
      >
      </textarea>
      <div
        className="show"
        id="write"
        dangerouslySetInnerHTML={{__html: htmlString}} // html字符串解析成真正的html标签
      >
      </div>
    </div>
  );
}
