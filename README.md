# ansi-color-parse

# Usage
```
npm install ansi-color-parse

```

```javascript
const {parseAnsi, ansi2html, parseHtml} = require('ansi-color-parse');

const str = "\u001b[34mHello\u001b[39m World\u001b[31m!\u001b[39m";

const parseList = parseAnsi(str);

console.log(parseList);
// [ { foreground: 'blue', text: 'Hello' },
//   { text: ' World' },
//   { foreground: 'red', text: '!' } ]

console.log(ansi2html(parseList));
// <span class="blue">Hello</span><span> World</span><span class="red">!</span>

console.log(parseHtml(str));
//<span class="blue">Hello</span><span> World</span><span class="red">!</span>

```

# License

MIT

Copyright (c) 2018 蓝色的秋风
