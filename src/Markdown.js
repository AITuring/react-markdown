import React, { useState } from 'react';
import markdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'  // 引入github风格的代码高亮样式
import "./styles.css";
import "./catfish.css";

const md = new markdownIt({
  // 设置代码高亮的配置
  highlight: function (code, language) {
    if (language && hljs.getLanguage(language)) {
      try {
        return `<pre><code class="hljs language-${language}">` +
               hljs.highlight(code, { language  }).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(code) + '</code></pre>';
}
});

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
        id="write"
        dangerouslySetInnerHTML={{__html: htmlString}} // html字符串解析成真正的html标签
      >
      </div>
    </div>
  );
}
