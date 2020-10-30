const checkPalindrome =()=> {
    let text = string.length;

    for (let i = 0; i < text / 2; i++) {
        if (string[i] !== string[text - 1 - i]) {
            return 'Not a palindrome';
        }
    }
    return 'Palindrome';
}

let string = ('racecar');
let value = checkPalindrome(string);

console.log(value);