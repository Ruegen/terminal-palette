# 🎨 Terminal Palette

*Terminal Pallette* allows you to call methods on your strings to change the style  (limited), color or background you log to the terminal.

I wanted something similar to [Chalk](https://github.com/chalk/chalk) with the ability to call the methods on a string. Terminal Palette uses the package [ansi-styles](ansi-styles) 

Note: This will polutte the string object adding to the prototype of String

## Styles

### Modifiers

- `reset`
- `bold`
- `dim`
- `italic` *(Not widely supported)*
- `underline`
- `inverse`
- `hidden`
- `strikethrough` *(Not widely supported)*

### Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `gray` ("bright black")
- `redBright`
- `greenBright`
- `yellowBright`
- `blueBright`
- `magentaBright`
- `cyanBright`
- `whiteBright`

### Background colors

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`
- `bgBlackBright`
- `bgRedBright`
- `bgGreenBright`
- `bgYellowBright`
- `bgBlueBright`
- `bgMagentaBright`
- `bgCyanBright`
- `bgWhiteBright`


e.g.
```js
const terminalPalette = require('terminal-palette')

console.log(`hello ${'world'.red().bgYellow()}`.blue())
```