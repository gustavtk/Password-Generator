const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let generateBtn = document.getElementById('generatepass');

let password1 = document.getElementById('password1');

let password2 = document.getElementById('password2');
let passwordLength = 15;

generateBtn.addEventListener('click', function () {
  password1.value = '';
  password2.value = '';
  for (let i = 0; i < passwordLength; i++) {
    let randomPassword = Math.floor(Math.random() * characters.length);
    let randomPassword2 = Math.floor(Math.random() * characters.length);
    password1.value += characters[randomPassword];
    password2.value += characters[randomPassword2];
  }
});
// Copy password to clipboard
let copyBtn1 = document.querySelector('.copy1');
let copyBtn2 = document.querySelector('.copy2');

copyBtn1.addEventListener('click', function () {
  password1.select();
  document.execCommand('copy');

  let originalText = password1.value;
  password1.value = 'Copied!';
  setTimeout(() => {
    password1.value = originalText;
  }, 2000);
});

copyBtn2.addEventListener('click', function () {
  password2.select();
  document.execCommand('copy');

  let originalText = password2.value;
  password2.value = 'Copied!';
  setTimeout(() => {
    password2.value = originalText;
  }, 2000);
});