const keyboard = document.querySelector("#keyboard");
const grid = document.querySelector("#grid");

const keyboardLetters = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "delete"],
];

const listElements = [];
let myAnswer = [];
const secretWord = ["c", "o", "o", "k", "i", "e"];
let positions = [];
let attempts = 0;

const rows = [];

for (let row = 0; row < 6; row++) {
  const list = document.createElement("ul");
  for (let column = 0; column < 6; column++) {
    const listItem = document.createElement("li");
    listItem.classList.add("row-item");
    listItem.id = `${row}-${column}`;
    list.append(listItem);
  }

  list.classList.add("grid-row");
  rows.push(list);
}

grid.append(...rows);

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
  if (myAnswer.length === 6) {
    if (myAnswer.join("") === secretWord.join("")) {
      console.log("Ganaste un oso de peluche");
    } else {
      for (let i = 0; i < 6; i++) {
        switch (true) {
          case myAnswer[i] === secretWord[i]:
            positions.push("green");
            break;
          case secretWord.includes(myAnswer[i]):
            positions.push("brown");
          default:
            positions.push("gray");
            break;
        }
      }
      console.log(positions);
    }
  } else {
    alert(`Your response is just ${myAnswer.length} long. Please, complete it`);
  }
};

const deleteLetter = () => {
  if (myAnswer.length === 0) {
    alert(`Your answer is in blanc`);
  }
  myAnswer.pop();
  console.log(myAnswer);
};

const pressLetter = () => {
  const button = event.target;
  if (myAnswer.length < 6) {
    const currentItem = document.getElementById(
      `#${attempts}-${myAnswer.length}`
    );
    // currentItem.textContent = button.textContent;
    console.log(button.textContent);
    myAnswer.push(button.id);
    console.log(myAnswer);
    // console.log(currentItem);
  } else {
    alert(`Your word is complete`);
  }
};
