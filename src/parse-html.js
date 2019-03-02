function ansi2html(ansiList, wrap = '') {
    let html = '';
    for (let i = 0; i < ansiList.length; i++) {
        const htmlFrame = ansiList[i];

        const {background = '', text, foreground = ''} = htmlFrame;
        if(background && foreground) {
            html += fontBgCode(text, foreground, background);
            if(text.includes('\n')) {
                html += wrap;
            }
            continue;
        }
        if(background || foreground) {
            const color = background ? `bg-${background}` : foreground;
            html += bgCode(text, color);
            if(text.includes('\n')) {
                html += wrap;
            }
            continue;
        }
        html += singleCode(text);
        if(text.includes('\n')) {
            html += wrap;
        }
    }
    html += ''
    return html;
}

function fontBgCode(value, color, bgColor) {
    return `<span class="${color} bg-${bgColor}">${value}</span>`
}

function bgCode(value, color) {
    return `<span class="${color}">${value}</span>`
}

function singleCode(value) {
    return `<span>${value}</span>`
}

module.exports = ansi2html;