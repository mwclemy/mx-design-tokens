const fs = require('fs')

const themes = require('./dist/index.js')

const colorKeys = ['Color', 'BackgroundColor', 'BorderColor', 'TextColor']

fs.unlinkSync('docs/tokens.md')

const stream = fs.createWriteStream('docs/tokens.md', { flags: 'a' })
Object.keys(themes.light).forEach(key => {
  stream.write(`## ${key}\n`)
  if (colorKeys.indexOf(key) !== -1) {
    stream.write(`
| Key | Value | Color |
| --- | ----- | ----- |
`)
  } else {
    stream.write(`
| Key | Value |
| --- | ----- |
`)
  }

  Object.keys(themes.light[key]).forEach(childKey => {
    const value = themes.light[key][childKey]

    if (colorKeys.indexOf(key) !== -1) {
      if (value.indexOf('#') !== -1) {
        stream.write(
          `| ${childKey} | ${value} | ![${value}](https://placehold.it/15/${
            value.split('#')[1]
          }/000000?text=+) |\n`,
        )
      } else {
        stream.write(`| ${childKey} | ${value} | N/A | \n`)
      }
    } else {
      stream.write(`| ${childKey} | ${themes.light[key][childKey]} |\n`)
    }
  })
})

stream.end()
