const keyboard = document.querySelector("#keyboard");
const keyboardLetters = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "delete"],
];

const listElements = [];

keyboardLetters.map((letters) => {
  const list = document.createElement("ul");
  letters.map((letter) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <button onclick='pressLetter()' id="letter">${letter}</button>
    `;
    list.append(listItem);
  });
  listElements.push(list);
  console.log(listElements);
});

keyboard.append(...listElements);

const pressLetter = () => {
  const button = event.target;
  console.log(button.textContent);
};
