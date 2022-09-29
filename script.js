// var btnStart = document.getElementById("start");
// var btnNext = document.getElementById("next")
 const allQuestion = [
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

//      btnNext.addEventListener('click', function() {
// 	var tempWords = [];
  
// 	if (tempWords.length === 0) {
// 	  for (var i = 0; i < words.length; i++) {
// 		tempWords.push(words[i]);
  
// 	  }
// 	}
// 	var audio = new Audio("https://millionaire-school.netlify.com/sounds/lets_play.mp3");

// audio.oncanplaythrough = function(){
// audio.play();
// }

// audio.loop = true;

// audio.onended = function(){
// audio.play();
// }
  
// 	let index = Math.floor(Math.random() * tempWords.length);
// 	document.getElementById("question").innerHTML=tempWords[index].question;
// 	 document.getElementById("optA").innerHTML=tempWords[index].option[0];	
// 	 document.getElementById("optB").innerHTML=tempWords[index].option[1];	
// 	 document.getElementById("optC").innerHTML=tempWords[index].option[2];	
// 	 document.getElementById("optD").innerHTML=tempWords[index].option[3];	
	 

//   });
//   btnStart.addEventListener('click', function() {
// 	var tempWords = [];
  
// 	if (tempWords.length === 0) {
// 	  for (var i = 0; i < words.length; i++) {
// 		tempWords.push(words[i]);
  
// 	  }
// 	}
  
// 	let index = Math.floor(Math.random() * tempWords.length);
// 	document.getElementById("question").innerHTML=tempWords[index].question;
// 	 document.getElementById("optA").innerHTML=tempWords[index].option[0];	
// 	 document.getElementById("optB").innerHTML=tempWords[index].option[1];	
// 	 document.getElementById("optC").innerHTML=tempWords[index].option[2];	
// 	 document.getElementById("optD").innerHTML=tempWords[index].option[3];	
	 

//   });
    let option0 =document.getElementById('option0')
	let option1 = document.getElementById ('option1')
	let option2 =document.getElementById ('option2')
	let option3 = document.getElementById ('option3')
	let span = document.querySelectorAll('button')
	let points = document.getElementById('display');
	let a = 0
	let price = 500
	let song = new Audio("./sound/correct-answer.mp3")
        let song1 = new Audio("/images/sound_wrong.mp3")
        let song2 = new Audio("/images/sound_background.mp3")
        let song3 = new Audio("/images/sound_right.mp3")

  const displayQuestions = () => {
	allQuestion.map((_,a)=>{
		span[a].style.background = 'red'
	})
	question.innerHTML = allQuestion[a].question;
	question.innerHTML = allQuestion[a].question[0]
	question.innerHTML = allQuestion[a].question[1]
	question.innerHTML = allQuestion[a].question[2]
	question.innerHTML = allQuestion[a].question[3]
  }
  const checkAnswer =(e) => {
	if(e.innerHTML === allQuestion[a].answer){
		price += 500
		document.getElementById(e.id).style.background = 'green';
		song.play()
		setTimeout(nextQuestions, 5000)
	}
	if(e.innerHTML === allQuestion[a].answer){
		document.getElementById(e.id).style.background = 'yellow';
		song.play()
		setTimeout(() =>{
			window.location.href = "gameover.html"
		},3000)
	}
  }
  const gameOver = () => {
	price += 5000
	overLay.innerHTML = `
	<h1 class = "text-light text">GameOver </h1>
	<h1><i> Congratulations</i></h1>
	<h1><i>You have won</i></h1>
	<h1 class="text-success fw-bold"><i>${price}</i></h1>`
  }
  const nextQuestion = () =>{
    if(a <allQuestion.length - 1){
         a=a+1
         displayQuestion()
         points.innerHTML = `$ ${price}`;
    }
    else{
        setTimeout(() => {
            window.location.href = "gameover.html"
        }, 5000);
    }
    
}

const fifty = ()=>{
    option0.innerHTML = "....."
    option3.innerHTML = "....."
    btn.innerHTML = `<img src="/images/50-50.png" alt="">`
    btn.onclick = ""
    song3.play()
}
 
const phoneAfriend = ()=>{
        friendImg.innerHTML= `<img src="/images/ask-the-audience.png" alt="">`
        friendImg.onclick = ""
}
const audience = ()=>{
        Audience.innerHTML= `<img src="./images/ask-the-audience-used.png" alt="">`
        Audience.onclick = ""
}

const started=()=>{
    window.location.href = "start.html"
}
const playSong=()=>{
    song2.play()
}
const endGame=()=>{
    window.location.href = "gameover.html"
    // location.reload()
}
const restart = () =>{
    window.location.href = "start.html"
}



//      var question = document.getElementById ('question');
// 	 var quizContainer = document.getElementById ('quiz-container');	
// 	 var question = document.getElementById ('question');	
// 	 var scorecard = document.getElementById ('scorecard');	
// 	 var option0 = document.getElementById ('option0');	
// 	 var option1 = document.getElementById ('option1');	
// 	 var option2 = document.getElementById ('option2');	
// 	 var option3  = document.getElementById ('option3');	
// 	 var next = document.querySelectorAll('next');
// 	 var point = document.getElementById('score');
// 	 var span = document.querySelectorAll('span');

// 	 var i = 0;
// 	 var score = 0;

// 	 function displayQuestions(){
// 		// for(var a=0; a<span.length; a++){
// 		// 	span[a].style.background ='none';
// 		// }
// 		// question.innerHTML = 'Q.' + (i + 1)+ ' ' + questionBanks[i]+ question;
// 		// option1.innerHTML + questionBanks[i].option[0];
// 		// option2.innerHTML + questionBanks[i].option[1];
// 		// option3.innerHTML + questionBanks[i].option[2];
// 		// option4.innerHTML + questionBanks[i].option[3];
// 		// stat.innerHTML = "Question" + ' ' + 'of' + ' ' + (i + 1) + ' ' + questionBanks.length;
		
// 	 }
	 
// 	 console.log(displayQuestions)


