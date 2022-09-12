var btnNext = document.getElementById("next");
var btnAns = document.getElementById("answer")
words = [{
    get
//     question: "HTML stands for",
//     answer: "HyperText Markup Language"
//   },
//   {
//     question: "What is a href?",
//     answer: "Link location attribute"
//   },
//   {
//     question: "What is extensions used to save HTML pages?",
//     answer: ".html"
  }
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
  document.getElementById("answer").innerHTML=tempWords[index]?.answer;
});