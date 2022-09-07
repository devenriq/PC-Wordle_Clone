const keyboard = document.querySelector("#keyboard");
const keyboardLetters = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "delete"],
];

const listElements = [];
let myAnswer = [];
const secretWord = ["c", "o", "o", "k", "i", "e"];

keyboardLetters.map((letters) => {
  const list = document.createElement("ul");
  letters.map((letter) => {
    const listItem = document.createElement("li");
    switch (letter) {
      case "enter":
        listItem.innerHTML = `
          <button onclick='checkWord()' id="letter">${letter}</button>
        `;
        break;

      case "delete":
        listItem.innerHTML = `
          <button onclick='deleteLetter()' id="letter">${letter}</button>
        `;
        break;

      default:
        listItem.innerHTML = `
          <button onclick='pressLetter()' id="letter">${letter}</button>
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
  console.log("Revisando Palabra");
};

const deleteLetter = () => {
  console.log("Borrando letra");
};

const pressLetter = () => {
  const button = event.target;
  console.log(button.textContent);
};
