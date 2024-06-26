const robots = require("robotjs");
const tmi = require("tmi.js")

// irc client for capturing chat
const client = new tmi.Client({
  channels: [ 'ctrlaltcookie' ]
});

client.connect();

// spit out mouse pos
// setInterval(() => {
//   console.log(robots.getMousePos());
// }, 500);

const squares = {
  "a1": { x: 480, y: 861 },
  "a2": { x: 480, y: 790 },
  "a3": { x: 480, y: 680 },
  "a4": { x: 480, y: 580 },
  "a5": { x: 480, y: 490 },
  "a6": { x: 480, y: 390 },
  "a7": { x: 480, y: 300 },
  "a8": { x: 480, y: 200 },
  "b1": { x: 580, y: 890 },
  "b2": { x: 580, y: 790 },
  "b3": { x: 580, y: 690 },
  "b4": { x: 580, y: 590 },
  "b5": { x: 580, y: 490 },
  "b6": { x: 580, y: 390 },
  "b7": { x: 580, y: 290 },
  "b8": { x: 580, y: 200 },
  "c1": { x: 680, y: 890 },
  "c2": { x: 680, y: 790 },
  "c3": { x: 680, y: 690 },
  "c4": { x: 680, y: 590 },
  "c5": { x: 680, y: 490 },
  "c6": { x: 680, y: 390 },
  "c7": { x: 680, y: 290 },
  "c8": { x: 680, y: 200 },
  "d1": { x: 780, y: 890 },
  "d2": { x: 780, y: 790 },
  "d3": { x: 780, y: 690 },
  "d4": { x: 780, y: 590 },
  "d5": { x: 780, y: 490 },
  "d6": { x: 780, y: 390 },
  "d7": { x: 780, y: 290 },
  "d8": { x: 780, y: 200 },
  "e1": { x: 880, y: 890 },
  "e2": { x: 880, y: 790 },
  "e3": { x: 880, y: 690 },
  "e4": { x: 880, y: 590 },
  "e5": { x: 880, y: 490 },
  "e6": { x: 880, y: 390 },
  "e7": { x: 880, y: 290 },
  "e8": { x: 880, y: 200 },
  "f1": { x: 980, y: 890 },
  "f2": { x: 980, y: 790 },
  "f3": { x: 980, y: 690 },
  "f4": { x: 980, y: 590 },
  "f5": { x: 980, y: 490 },
  "f6": { x: 980, y: 390 },
  "f7": { x: 980, y: 290 },
  "f8": { x: 980, y: 200 },
  "g1": { x: 1050, y: 890 },
  "g2": { x: 1050, y: 790 },
  "g3": { x: 1050, y: 690 },
  "g4": { x: 1050, y: 590 },
  "g5": { x: 1050, y: 490 },
  "g6": { x: 1050, y: 390 },
  "g7": { x: 1050, y: 290 },
  "g8": { x: 1050, y: 200 },
  "h1": { x: 1143, y: 890 },
  "h2": { x: 1143, y: 790 },
  "h3": { x: 1143, y: 690 },
  "h4": { x: 1143, y: 590 },
  "h5": { x: 1143, y: 490 },
  "h6": { x: 1143, y: 390 },
  "h7": { x: 1143, y: 290 },
  "h8": { x: 1143, y: 200 },
}

const squareKeys = Object.keys(squares)

squareKeys.forEach(square => {
  const {x, y} = squares[square]
  robots.moveMouse(x, y);
});

client.on("message", (channel, tags, message, self)=> {
  const text = message.toLocaleLowerCase();
  processMoves(text);
});

/**
 * 
 * @param {string} message
 * @returns {boolean}
 */
const notChess = (message) => {
  let firstChar = message[0];
  return legalNotation(firstChar) && message.includes("to") || message.includes("takes");
}

const legalNotation = (char) => char.match(/[a-h]/)?.length > 0

/**
 * processes movessesese
 * @param {string} message 
 */
const processMoves = (message) => {
  if (message === "") return;
  if (!notChess(message)) return;
  // looking for 6 characters after removing all spaces
  const messageNoSpace = message.replace(/ /g, "");
  if (messageNoSpace.length > 9) return;
  try {
    const moves = message.split(" ");
    const squareOne = squares[moves[0]];
    const squareTwo = squares[moves[2]];
    if (squareOne === undefined || squareTwo === undefined) return;
    robots.moveMouse(squareOne?.x, squareOne?.y);
    robots.mouseToggle("down");
    robots.dragMouse(squareTwo?.x, squareTwo?.y);
    robots.mouseToggle("up");
  } catch (e) {
    console.log("e")
  }
}
