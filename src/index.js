const parseAnsi = require('./parse-ansi');
const ansi2html = require('./parse-html');

function parseHtml(str) {
    return ansi2html(parseAnsi(str));
}

module.exports = {
    parseAnsi,
    ansi2html,
    parseHtml
}