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
};

function decode(expr) {
    let startPos = 0;
    let decoded = "";
    for (let i = 0; i < expr.length/10; i++) {
      let letterNums = expr.slice(startPos, startPos + 10);
      startPos += 10;
      if (letterNums == "**********") {
        decoded = decoded + ' ';
      }
      else {
          let elemMorse = ''
          for (let j = 0; j < 10; j = j + 2) {
          let elemLeter = letterNums.substr(j, 2);
          if ( elemLeter == '00') {elemMorse = elemMorse + '';}
          else if ( elemLeter == '10') { elemMorse = elemMorse + '.';}
          else if ( elemLeter == '11') { elemMorse = elemMorse + '-';}
          }
          decoded += MORSE_TABLE[elemMorse];
      }
    }
    return decoded
}

module.exports = {
    decode


}

