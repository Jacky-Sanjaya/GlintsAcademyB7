const letterCapitalize = (str) => {

  let strKosong = ""
  let text = str.split(' ')

  for (let i = 0; i < text.length; i++) {
    strKosong += text[i][0].toUpperCase() + text[i].slice(1) + ' '
  }

  return strKosong
}

console.log(letterCapitalize("a bb ccc dddd eeeee fffff gggggg"))