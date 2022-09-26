// Variable declarations
const URL =
	"https://raw.githubusercontent.com/aaronnech/Who-Wants-to-Be-a-Millionaire/master/questions.json";
const gameContainer = document.querySelector(".game-container");
const startBtn = document.querySelector(".start");
const questionContainer = document.querySelector(".question-container");
const answersContainer = document.querySelector(".answers");
const nextQuestionBtn = document.querySelector(".next-question");
const secondGuessBtn = document.querySelector(".second-guess-button");
const fiftyFiftyBtn = document.querySelector(".fifty-fifty");
const countDownClock = document.querySelector(".timer");
const gameStatusContainer = document.querySelector(".game-status-container");
const nextQuestionContainer = document.querySelector(
	".next-question-container"
);
const pointsContainer = document.querySelector(".points-container");
// selecting audio files
const letsPlayAudio = document.getElementById("lets-play");
const easyAudio = document.getElementById("easy");
const wrongAnswerAudio = document.getElementById("wrong-answer");
const correctAnswerAudio = document.getElementById("correct-answer");

// let gameState = false;
let gameOn = false;
let timesToGuess = 1;
let correctAnswer;
let questionList;
let listOfAnswers;
let currentTime;
// Variables for the randomQuestionGenerator();
let data;
let currentQuestion = {};
let randomGameNum = 0;
let randomQuestionNum = 0;
let questionsAsked = [];
let timeoutId;
let intervalId;
let points = 0;

// Functions
const randomNumHelperFunc = num => Math.floor(Math.random() * num);
const dataLoad = async () => {
	data = await fetch(URL).then(res => res.json());
};
const randomQuestionGenerator = () => {
	randomGameNum = randomNumHelperFunc(4);
	randomQuestionNum = randomNumHelperFunc(15);
	
	const questionAlreadyAsked = questionsAsked.findIndex(item => item[randomGameNum] === randomQuestionNum) === -1;
	
	if (questionAlreadyAsked) {
		currentQuestion[randomGameNum] = randomQuestionNum;
		questionsAsked.push(currentQuestion);
		currentQuestion = {};
	} else {
		randomQuestionGenerator();
	}
};
const fiftyFiftyGenerator = num => {
	let randomFirst;
	let randomSecond;
	// Generate first random number
	randomFirst = randomNumHelperFunc(4);
	while (randomFirst === num) {
		randomFirst = randomNumHelperFunc(4);
	}

	randomSecond = randomNumHelperFunc(4);
	while (randomSecond === randomFirst || randomSecond === num) {
		randomSecond = randomNumHelperFunc(4);
	}
	// hide two wrong answers
	document.querySelector(`[id='${randomFirst}']`).style.visibility = "hidden";
	document.querySelector(`[id='${randomSecond}']`).style.visibility = "hidden";
};
const startTimerMusic = () => {
	timer();
	// start audio
	letsPlayAudio.play();
	letsPlayAudio.volume = 0.3;
	timeoutId = setTimeout(() => {
		easyAudio.play();
		easyAudio.volume = 0.3;
	}, 4000);
};
const stopTimerMusic = () => {
	clearTimeout(timeoutId);
	clearInterval(intervalId);
	letsPlayAudio.pause();
	letsPlayAudio.currentTime = 0;
	easyAudio.pause();
	easyAudio.currentTime = 0;
	wrongAnswerAudio.pause();
	wrongAnswerAudio.currentTime = 0;
	correctAnswerAudio.pause();
	correctAnswerAudio.currentTime = 0;
};
const resetPoints = () => {
	points = 0;
	pointsContainer.textContent = `${points} / 12`;
};
const gameOver = () => {
	gameOn = false;
	// stopping audio
	stopTimerMusic();
	wrongAnswerAudio.play();
	wrongAnswerAudio.volume = 0.3;
	gameContainer.classList.add("hidden");
	gameStatusContainer.classList.remove("hidden");
	gameStatusContainer.textContent =
		points === 1
			? `Game over. You earned ${points} point.`
			: `Game over. You earned ${points} points.`;
	startBtn.textContent = "START";
	pointsContainer.classList.add("hidden");
};
const correctAnswerFunc = () => {
	points += 1;
	if (points < 12) {
		stopTimerMusic();
		correctAnswerAudio.play();
		correctAnswerAudio.volume = 0.3;
		nextQuestionContainer.classList.remove("hidden");
		gameStatusContainer.classList.remove("hidden");
		gameContainer.classList.add("hidden");
		gameStatusContainer.textContent = "CORRECT";
		pointsContainer.textContent = `${points} / 12`;
	} else {
		stopTimerMusic();
		correctAnswerAudio.play();
		correctAnswerAudio.volume = 0.3;
		gameStatusContainer.classList.remove("hidden");
		gameContainer.classList.add("hidden");
		gameStatusContainer.textContent =
			"CONGRATULATIONS! You've become a Millionaire!";
		pointsContainer.textContent = `${points} / 12`;
	}
};
const nextQuestionFunc = () => {
	nextQuestionContainer.classList.add("hidden");
	stopTimerMusic();
	gameOn = true;
	gameContainer.classList.remove("hidden");
	gameStatusContainer.classList.add("hidden");
	startBtn.textContent = "QUIT";
	timesToGuess = 1;

	let answers = "";
	randomQuestionGenerator();
	startTimerMusic();

	correctAnswer = "";
	correctAnswer =
		data["games"][randomGameNum]["questions"][randomQuestionNum]["correct"];
	questionList =
		data["games"][randomGameNum]["questions"][randomQuestionNum]["content"];

	questionList.forEach((item, index) => {
		answers += `<li id="${index}">${item}</li>`;
	});

	questionContainer.textContent =
		data["games"][randomGameNum]["questions"][randomQuestionNum]["question"];
	answersContainer.innerHTML = answers;
};
const timer = () => {
	currentTime = new Date().getTime();
	intervalId = setInterval(() => {
		const interval = Math.floor(
			(40000 + currentTime - new Date().getTime()) / 1000
		);
		countDownClock.textContent = interval;
		if (interval === 0) {
			gameState = false;
			clearInterval(intervalId);
			gameOver();
		}

		return interval;
	}, 100);
};

// Event Listeners
window.addEventListener("load", async () => {
	await dataLoad();
});
startBtn.addEventListener("click", () => {
	if (!gameOn) {
		stopTimerMusic();
		resetPoints();
		secondGuessBtn.classList.remove("hidden");
		fiftyFiftyBtn.classList.remove("hidden");
		nextQuestionFunc();
		pointsContainer.classList.remove("hidden");
	} else {
		resetPoints();
		stopTimerMusic();
		gameOver();
	}
});
nextQuestionBtn.addEventListener("click", () => nextQuestionFunc());
secondGuessBtn.addEventListener("click", () => {
	// change let timesToGuess to 2
	timesToGuess = 2;
	// hide the x2 button
	secondGuessBtn.classList.add("hidden");
});
fiftyFiftyBtn.addEventListener("click", () => {
	// Remove two wrong answers
	fiftyFiftyGenerator(correctAnswer);
	// hide the 50:50 button
	fiftyFiftyBtn.classList.add("hidden");
});
answersContainer.addEventListener("click", e => {
	if (e.target.id == correctAnswer) {
		e.target.classList.add("hidden");
		correctAnswerFunc();
	} else {
		e.target.classList.add("hidden");
		timesToGuess -= 1;
		if (timesToGuess <= 0) {
			stopTimerMusic();
			gameOver();
		}
	}
});
