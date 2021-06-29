// 暂时用不到的代码

// 代码高亮
// highlight: function (code, language) {
  //   if (language && hljs.getLanguage(language)) {
  //     try {
  //       return `<pre><code class="hljs language-${language}">` +
  //              hljs.highlight(code, { language  }).value +
  //              '</code></pre>';
  //     } catch (__) {}
  //   }

  //   return '<pre class="hljs"><code>' + md.utils.escapeHtml(code) + '</code></pre>';
// }

// TODO warning这种标记等会做吧，先做存储
// md.use(require('markdown-it-container'), 'warning', {

//   validate: function(params) {
//     console.log(params.trim().match(/^warning\s+(.*)$/))
//     return params.trim().match(/^warning\s+(.*)$/);
//   },

//   render: function (tokens, idx) {
//     var m = tokens[idx].info.trim().match(/^warning\s+(.*)$/);

//     if (tokens[idx].nesting === 1) {
//       // opening tag
//       return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';

//     } else {
//       // closing tag
//       return '</details>\n';
//     }
//   }
// });

// console.log(md.render('::: warning click me\n*content*\n:::\n'));
