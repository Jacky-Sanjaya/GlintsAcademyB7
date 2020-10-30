function LetterChanges(str) {
    var letters = str.split("");
    var strKosong = "";
    var i;
    for (i = 0; i < str.length; i++) {
        strKosong += shift(str.charAt(i));
    }
    return strKosong;
}
function shift(str) {
    var rtn = false;
    var alphabet = ["a", "b", "c", "d", "E", "f", "g", "h", "I", "j", "k", "l", "m", "n", "O", "p", "q", "r", "s", "t", "U", "v", "w", "x", "y", "z"];
    for (i = 0; i < alphabet.length; i++) {
        if (str.toUpperCase() === alphabet[i].toUpperCase()) {
            if (i === 25) rtn = alphabet[0];
            else rtn = alphabet[i + 1];
        }
    }
    if (!rtn) rtn = str;
    return rtn;
}

console.log(LetterChanges("coba disini ya"))
