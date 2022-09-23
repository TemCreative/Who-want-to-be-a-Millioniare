var btnNext = document.getElementById("next");

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
	document.getElementById("question").innerHTML=tempWords[index]?.question;

	let option0 = Math.floor(Math.random() * tempWords.length);
	document.getElementById("option0").innerHTML=tempWords[index]?.option;
	
	let option1 = Math.floor(Math.random() * tempWords.length);
	document.getElementById("option1").innerHTML=tempWords[index]?.option;

	
	let option2 = Math.floor(Math.random() * tempWords.length);
	document.getElementById("option2").innerHTML=tempWords[index]?.option;
  });
    //  var question = document.getElementById ('question');
	//  var quizContainer = document.getElementById ('quiz-container');	
	//  var question = document.getElementById ('question');	
	//  var scorecard = document.getElementById ('scorecard');	
	//  var option0 = document.getElementById ('option0');	
	//  var option1 = document.getElementById ('option1');	
	//  var option2 = document.getElementById ('option2');	
	//  var option3  = document.getElementById ('option3');	
	//  var next = document.querySelectorAll('next');
	//  var point = document.getElementById('score');
	//  var span = document.querySelectorAll('span');

	//  var i = 0;
	//  var score = 0;

	//  function displayQuestions(){
	// 	for(var a=0; a<span.length; a++){
	// 		span[a].style.background ='none';
	// 	}
	// 	question.innerHTML = 'Q.' + (i + 1)+ ' ' + questionBanks[i]+ question;
	// 	option1.innerHTML + questionBanks[i].option[0];
	// 	option2.innerHTML + questionBanks[i].option[1];
	// 	option3.innerHTML + questionBanks[i].option[2];
	// 	option4.innerHTML + questionBanks[i].option[3];
	// 	stat.innerHTML = "Question" + ' ' + 'of' + ' ' + (i + 1) + ' ' + questionBanks.length;
		
	//  }
	 
	//  console.log(displayQuestions)



