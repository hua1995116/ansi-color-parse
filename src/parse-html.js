function ansi2html(ansiList, wrap = '') {
    let html = '';
    for (let i = 0; i < ansiList.length; i++) {
        const htmlFrame = ansiList[i];

        const {background = '', text, foreground = ''} = htmlFrame;
        if(background && foreground) {
            if(text.includes('\n')) {
                html += wrap;
                continue;
            }
            html += fontBgCode(text, foreground, background);
            continue;
        }
        if (background || foreground) {
            const color = background ? `bg-${background}` : foreground;
            let textColor = bgCode(text, color);

            textColor = textColor.replace(/\n/g, wrap);
            // if(text.includes('\n')) {
            //     html += wrap;
            //     continue;
            // }
            
            html += textColor;
            continue;
        }
        if (text.includes('\n')) {
            const textColor = text.replace(/\n/g, wrap);
            html += textColor;
            continue;
        }
        html += singleCode(text);
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