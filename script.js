var btnNext = document.getElementById("next");
// var btnNext = document.getElementById("next")
 words = [
	{
		question :  'Free surface of a liquid behaves like a sheet and tends to contract to the smallest possible area due to the',
		option : ['force of adhesion','force of friction','centrifugal force','force of cohesion'],
		answer : 'force of cohesion' 
	},
	{
		question :  'GNLF stands for',
		option : ['Gorkha National Liberation Front','Gross National Liberation Form','Both option A and B','None of the above'],
		answer : 'Gorkha National Liberation Front' 
	},
	{
		question :  'Study at SQI, Succeed _______',
		option : ['Anytime','Anyhow','Anywhere','Accurately'],
		answer : 'Anywhere' 
	},
	{
		question :  'SQI has campuses in',
		option : ['Ogbomoso, Ibadan, Lagos','Ogbomoso,Osogbo, Abeokuta','Abuja,Delta,Ibadan','Ogbomoso,Ibadan'],
		answer : 'Ogbomoso,Ibadan' 
	},
	{
		question :  'SQI College of ICT offers all of these courses except ',
		option : ['Robotics','Graphics Design','Software Developments','Geology'],
		answer : 'Geology' 
	},
	{
		question :  'SQI has a President and a Founder. What is his name?',
		option : ['Dr. Femi Adeyemi','Dr. Adeyemi Adefemi','Dr. Adeyemi Aderinto','Dr. Femi Aderinto'],
		answer : 'Dr. Adeyemi Aderinto' 
	},
	{
		question :  'For safety, the fuse wire used in the mains for household supply of electricity must be made of metal having',
		option : ['low melting point','high resistance','high melting point','low specific heat'],
		answer : 'low melting point' 
	},
	{
		question :  'During World War I Germany was defeated in the Battle of Verdun on the western front and Romania declared war on the eastern front in the year',
		option : ['1914 AD','1915 AD','1916 AD','1917 AD'],
		answer : '1916 AD' 
	},
	{
		question :  'Durand Cup is associated with the game of',
		option : ['Cricket','Football','Hockey','Volleyball'],
		answer : 'Football' 
	},
	{
		question :  '20th August is celebrated as',
		option : ['Earth Day','Sadbhavana Divas','No Tobacco Day','None of these'],
		answer : 'Sadbhavana Divas' 
	},
	{
		question :  'When is the World Population Day observed?',
		option : ['May 31','October 4','December 10','July 11'],
		answer : 'July 11' 
	},
	{
		question :  'January 15 is celebrated as the',
		option : ['Republic Day','Ugadhi','	TeachersDay','Army Day'],
		answer : 'Army Day' 
	},
	{
		question :  'What are three types of lasers?',
		option : ['Gas, metal vapor, rock','Pointer, diode, CD','Diode, inverted, pointer','	Gas, solid state, diode'],
		answer : '	Gas, solid state, diode' 
	},
	{
		question :  'Compact discs, (according to the original CD specifications) hold how many minutes of music?',
		option : ['	74 mins','56 mins','60 mins','	90 mins'],
		answer : '	74 mins' 
	},
]

     btnNext.addEventListener('click', function() {
	var tempWords = [];
  
	if (tempWords.length === 0) {
	  for (var i = 0; i < words.length; i++) {
		tempWords.push(words[i]);
  
	  }
	}
  
	let index = Math.floor(Math.random() * tempWords.length);
	document.getElementById("question").innerHTML=tempWords[index].question;
	 document.getElementById("optionA").innerHTML=tempWords[index].optionA [0];	
	 document.getElementById("optionB").innerHTML=tempWords[index].optionB [1];	
	 document.getElementById("optionC").innerHTML=tempWords[index].optionA [2];	
	 
	 
	
	// let optionA = Math.floor(Math.random() * tempWords.length);
	// document.getElementById("optionA").innerHTML=tempWords[index]?.optionA;
	
	// let optionB = Math.floor(Math.random() * tempWords.length);
	// document.getElementById("optionB").innerHTML=tempWords[index]?.optionB;

	
	// let optionC = Math.floor(Math.random() * tempWords.length);
	// document.getElementById("optionC").innerHTML=tempWords[index]?.optionC;

	// let optionD = Math.floor(Math.random() * tempWords.length);
	// document.getElementById("optionD").innerHTML=tempWords[index]?.optionD;
  });

 

     var question = document.getElementById ('question');
	 var quizContainer = document.getElementById ('quiz-container');	
	 var question = document.getElementById ('question');	
	 var scorecard = document.getElementById ('scorecard');	
	 var option0 = document.getElementById ('option0');	
	 var option1 = document.getElementById ('option1');	
	 var option2 = document.getElementById ('option2');	
	 var option3  = document.getElementById ('option3');	
	 var next = document.querySelectorAll('next');
	 var point = document.getElementById('score');
	 var span = document.querySelectorAll('span');

	 var i = 0;
	 var score = 0;

	 function displayQuestions(){
		// for(var a=0; a<span.length; a++){
		// 	span[a].style.background ='none';
		// }
		// question.innerHTML = 'Q.' + (i + 1)+ ' ' + questionBanks[i]+ question;
		// option1.innerHTML + questionBanks[i].option[0];
		// option2.innerHTML + questionBanks[i].option[1];
		// option3.innerHTML + questionBanks[i].option[2];
		// option4.innerHTML + questionBanks[i].option[3];
		// stat.innerHTML = "Question" + ' ' + 'of' + ' ' + (i + 1) + ' ' + questionBanks.length;
		
	 }
	 
	 console.log(displayQuestions)

// const games = [];
// const gameContainer = document.querySelector(".game-container");
// const startBtn = document.querySelector(".start");
// const questionContainer = document.querySelector(".question-container");
// const answersContainer = document.querySelector(".answers");
// const nextQuestionBtn = document.querySelector(".next-question");
// const secondGuessBtn = document.querySelector(".second-guess-button");
// const fiftyFiftyBtn = document.querySelector(".fifty-fifty");
// const countDownClock = document.querySelector(".timer");
// const gameStatusContainer = document.querySelector(".game-status-container");
// const nextQuestionContainer = document.querySelector(
// 	".next-question-container"
// );
// const pointsContainer = document.querySelector(".points-container");
// // selecting audio files
// const letsPlayAudio = document.getElementById("lets-play");
// const easyAudio = document.getElementById("easy");
// const wrongAnswerAudio = document.getElementById("wrong-answer");
// const correctAnswerAudio = document.getElementById("correct-answer");

// // let gameState = false;
// let gameOn = false;
// let timesToGuess = 1;
// let correctAnswer;
// let questionList;
// let listOfAnswers;
// let currentTime;
// // Variables for the randomQuestionGenerator();
// let data;
// let currentQuestion = {};
// let randomGameNum = 0;
// let randomQuestionNum = 0;
// let questionsAsked = [];
// let timeoutId;
// let intervalId;
// let points = 0;

// // Functions
// const randomNumHelperFunc = num => Math.floor(Math.random() * num);
// const dataLoad = async () => {
// 	data = await fetch(URL).then(res => res.json());
// };
// const randomQuestionGenerator = () => {
// 	randomGameNum = randomNumHelperFunc(4);
// 	randomQuestionNum = randomNumHelperFunc(15);
	
// 	const questionAlreadyAsked = questionsAsked.findIndex(item => item[randomGameNum] === randomQuestionNum) === -1;
	
// 	if (questionAlreadyAsked) {
// 		currentQuestion[randomGameNum] = randomQuestionNum;
// 		questionsAsked.push(currentQuestion);
// 		currentQuestion = {};
// 	} else {
// 		randomQuestionGenerator();
// 	}
// };
// const fiftyFiftyGenerator = num => {
// 	let randomFirst;
// 	let randomSecond;
// 	// Generate first random number
// 	randomFirst = randomNumHelperFunc(4);
// 	while (randomFirst === num) {
// 		randomFirst = randomNumHelperFunc(4);
// 	}

// 	randomSecond = randomNumHelperFunc(4);
// 	while (randomSecond === randomFirst || randomSecond === num) {
// 		randomSecond = randomNumHelperFunc(4);
// 	}
// 	// hide two wrong answers
// 	document.querySelector(`[id='${randomFirst}']`).style.visibility = "hidden";
// 	document.querySelector(`[id='${randomSecond}']`).style.visibility = "hidden";
// };
// const startTimerMusic = () => {
// 	timer();
// 	// start audio
// 	letsPlayAudio.play();
// 	letsPlayAudio.volume = 0.3;
// 	timeoutId = setTimeout(() => {
// 		easyAudio.play();
// 		easyAudio.volume = 0.3;
// 	}, 4000);
// };
// const stopTimerMusic = () => {
// 	clearTimeout(timeoutId);
// 	clearInterval(intervalId);
// 	letsPlayAudio.pause();
// 	letsPlayAudio.currentTime = 0;
// 	easyAudio.pause();
// 	easyAudio.currentTime = 0;
// 	wrongAnswerAudio.pause();
// 	wrongAnswerAudio.currentTime = 0;
// 	correctAnswerAudio.pause();
// 	correctAnswerAudio.currentTime = 0;
// };
// const resetPoints = () => {
// 	points = 0;
// 	pointsContainer.textContent = `${points} / 12`;
// };
// const gameOver = () => {
// 	gameOn = false;
// 	// stopping audio
// 	stopTimerMusic();
// 	wrongAnswerAudio.play();
// 	wrongAnswerAudio.volume = 0.3;
// 	gameContainer.classList.add("hidden");
// 	gameStatusContainer.classList.remove("hidden");
// 	gameStatusContainer.textContent =
// 		points === 1
// 			? `Game over. You earned ${points} point.`
// 			: `Game over. You earned ${points} points.`;
// 	startBtn.textContent = "START";
// 	pointsContainer.classList.add("hidden");
// };
// const correctAnswerFunc = () => {
// 	points += 1;
// 	if (points < 12) {
// 		stopTimerMusic();
// 		correctAnswerAudio.play();
// 		correctAnswerAudio.volume = 0.3;
// 		nextQuestionContainer.classList.remove("hidden");
// 		gameStatusContainer.classList.remove("hidden");
// 		gameContainer.classList.add("hidden");
// 		gameStatusContainer.textContent = "CORRECT";
// 		pointsContainer.textContent = `${points} / 12`;
// 	} else {
// 		stopTimerMusic();
// 		correctAnswerAudio.play();
// 		correctAnswerAudio.volume = 0.3;
// 		gameStatusContainer.classList.remove("hidden");
// 		gameContainer.classList.add("hidden");
// 		gameStatusContainer.textContent =
// 			"CONGRATULATIONS! You've become a Millionaire!";
// 		pointsContainer.textContent = `${points} / 12`;
// 	}
// };
// const nextQuestionFunc = () => {
// 	nextQuestionContainer.classList.add("hidden");
// 	stopTimerMusic();
// 	gameOn = true;
// 	gameContainer.classList.remove("hidden");
// 	gameStatusContainer.classList.add("hidden");
// 	startBtn.textContent = "QUIT";
// 	timesToGuess = 1;

// 	let answers = "";
// 	randomQuestionGenerator();
// 	startTimerMusic();

// 	correctAnswer = "";
// 	correctAnswer =
// 		data["games"][randomGameNum]["questions"][randomQuestionNum]["correct"];
// 	questionList =
// 		data["games"][randomGameNum]["questions"][randomQuestionNum]["content"];

// 	questionList.forEach((item, index) => {
// 		answers += `<li id="${index}">${item}</li>`;
// 	});

// 	questionContainer.textContent =
// 		data["games"][randomGameNum]["questions"][randomQuestionNum]["question"];
// 	answersContainer.innerHTML = answers;
// };
// const timer = () => {
// 	currentTime = new Date().getTime();
// 	intervalId = setInterval(() => {
// 		const interval = Math.floor(
// 			(40000 + currentTime - new Date().getTime()) / 1000
// 		);
// 		countDownClock.textContent = interval;
// 		if (interval === 0) {
// 			gameState = false;
// 			clearInterval(intervalId);
// 			gameOver();
// 		}

// 		return interval;
// 	}, 100);
// };

// // Event Listeners
// window.addEventListener("load", async () => {
// 	await dataLoad();
// });
// startBtn.addEventListener("click", () => {
// 	if (!gameOn) {
// 		stopTimerMusic();
// 		resetPoints();
// 		secondGuessBtn.classList.remove("hidden");
// 		fiftyFiftyBtn.classList.remove("hidden");
// 		nextQuestionFunc();
// 		pointsContainer.classList.remove("hidden");
// 	} else {
// 		resetPoints();
// 		stopTimerMusic();
// 		gameOver();
// 	}
// });
// nextQuestionBtn.addEventListener("click", () => nextQuestionFunc());
// secondGuessBtn.addEventListener("click", () => {
// 	// change let timesToGuess to 2
// 	timesToGuess = 2;
// 	// hide the x2 button
// 	secondGuessBtn.classList.add("hidden");
// });
// fiftyFiftyBtn.addEventListener("click", () => {
// 	// Remove two wrong answers
// 	fiftyFiftyGenerator(correctAnswer);
// 	// hide the 50:50 button
// 	fiftyFiftyBtn.classList.add("hidden");
// });
// answersContainer.addEventListener("click", e => {
// 	if (e.target.id == correctAnswer) {
// 		e.target.classList.add("hidden");
// 		correctAnswerFunc();
// 	} else {
// 		e.target.classList.add("hidden");
// 		timesToGuess -= 1;
// 		if (timesToGuess <= 0) {
// 			stopTimerMusic();
// 			gameOver();
// 		}
// 	}
// });



