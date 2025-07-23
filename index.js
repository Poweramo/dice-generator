const firstDice = document.getElementById("first-dice");
const secondDice = document.getElementById("second-dice");
const rollButton = document.getElementById("roll");

const numbers = [1, 2, 3, 4, 5, 6];
let index = Math.floor(Math.random() * 10);

const rollingFirstDice = () => {
	if (index < 6) {
		firstDice.textContent = numbers[index];
		index = Math.floor(Math.random() * 10);
	} else {
		index = Math.floor(Math.random() * 10);
		rollingFirstDice();
	}
};
const rollingSecondDice = () => {
	if (index < 6) {
		secondDice.textContent = numbers[index];
		index = Math.floor(Math.random() * 10);
	} else {
		index = Math.floor(Math.random() * 10);
		rollingSecondDice();
	}
};

rollButton.addEventListener("click", () => {
	rollingFirstDice();
	rollingSecondDice();
});
