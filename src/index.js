const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    expr = expr.split('');
    let arrNumber = [];
    let arrDotsDashes = [];
    let stringWords = [];
  
    for (let i = 0; i < expr.length; i+= 10) {
      arrNumber.push(expr.slice(i, i+10));
    }
  
    for (let i = 0; i < arrNumber.length; i++) {
      arrDotsDashes.push([]);
      for (let j = 0; j < arrNumber[i].length; j += 2) {
        if (arrNumber[i][j] == 1 && arrNumber[i][j + 1]  == 1) {
          arrDotsDashes[i].push('-');
        } else if (arrNumber[i][j] == 1 && arrNumber[i][j + 1]  == 0) {
          arrDotsDashes[i].push('.');
        } else if (arrNumber[i][j] == '*' && arrNumber[i][j + 1]) {
          arrDotsDashes[i].push(' ');
          j = 10;
        }
      }
    }
  
    for (let i = 0; i < arrDotsDashes.length; i++) {
      arrDotsDashes[i] = arrDotsDashes[i].join('');
      arrDotsDashes[i] = MORSE_TABLE[arrDotsDashes[i]];
    }
    
    stringWords = arrDotsDashes.join('');
    return stringWords;
}

module.exports = {
    decode
}