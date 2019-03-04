const parseAnsi = require('./parse-ansi');
const ansi2html = require('./parse-html');

function parseHtml(str, wrap) {
    return ansi2html(parseAnsi(str), wrap);
}

module.exports = {
    parseAnsi,
    ansi2html,
    parseHtml
}