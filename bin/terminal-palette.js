// Ruegen Aschenbrenner
// utilizes ansi-styles package
const style = require('ansi-styles')

const modifiers = [
    'reset',
    'bold',
    'dim',
    'italic',
    'underline',
    'inverse',
    'hidden',
    'strikethrough' 
]

const textColors = [
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
    'gray',
    'redBright',
    'greenBright',
    'yellowBright',
    'blueBright',
    'magentaBright',
    'cyanBright',
    'whiteBright'
]

const backgroundColors = [
    'bgBlack',
    'bgRed',
    'bgGreen',
    'bgYellow',
    'bgBlue',
    'bgMagenta',
    'bgCyan',
    'bgWhite',
    'bgBlackBright',
    'bgRedBright',
    'bgGreenBright',
    'bgYellowBright',
    'bgBlueBright',
    'bgMagentaBright',
    'bgCyanBright',
    'bgWhiteBright'
]

//pollute the String object with colors, backgrounds and modifiers
// e.g.
// String.prototype.blue = function() {
//     return `${style.blue.open}${this}${style.blue.close}`
// }

textColors.forEach(color => {
    String.prototype[color] = function() {
        return `${style[color].open}${this}${style[color].close}`
    }
})

backgroundColors.forEach(color => {
    String.prototype[color] = function() {
        return `${style.bgColor[color].open}${this}${style.bgColor[color].close}`
    }
})

modifiers.forEach(modifier => {
    String.prototype[modifier] = function() {
        return `${style.modifier[modifier].open}${this}${style.modifier[modifier].close}`
    }
})

module.exports = this