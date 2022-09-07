const keyboard = document.querySelector("#keyboard");
const keyboardLetters = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "delete"],
];

const listElements = [];
let myAnswer = [];
const secretWord = ["c", "o", "o", "k", "i", "e"];
let positions = [];

keyboardLetters.map((letters) => {
  const list = document.createElement("ul");
  letters.map((letter) => {
    const listItem = document.createElement("li");
    switch (letter) {
      case "enter":
        listItem.innerHTML = `
          <button onclick='checkWord()' id="${letter}">${letter}</button>
        `;
        break;

      case "delete":
        listItem.innerHTML = `
          <button onclick='deleteLetter()' id="${letter}">${letter}</button>
        `;
        break;

      default:
        listItem.innerHTML = `
          <button onclick='pressLetter()' id="${letter}">${letter}</button>
        `;
        break;
    }
    list.append(listItem);
  });
  listElements.push(list);
  console.log(listElements);
});

keyboard.append(...listElements);

const checkWord = () => {
  if (myAnswer.join("") === secretWord.join("")) {
    console.log("Ganaste un oso de peluche");
  } else {
  }
};

const deleteLetter = () => {
  myAnswer.pop();
  console.log(myAnswer);
};

const pressLetter = () => {
  const button = event.target;
  if (myAnswer.length < 6) {
    myAnswer.push(button.id);
  }
  console.log(myAnswer);
};
