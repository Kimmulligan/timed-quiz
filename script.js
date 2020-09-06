console.log("hello");
var questionIndex = 0;
var score = 0;
var question_area = document.querySelector(".question_area");
var questions = [
  {
    title: "What is a variable?",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer2",
  },
  {
    title: "What is an array?",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer2",
  },
  {
    title: "What is an object?",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "",
  },
];
var first_page = document.getElementById("first_page");
var TIMER_60 = 60;
var timer_id;
var countdown = document.getElementById("countdown");
var startButton = document.querySelector("#start");
startButton.addEventListener("click", function () {
  first_page.style.display = "none";
  start_timer();
  getNextQuestion();
  // var p = document.createElement("p");
  // p.textContent = "Start quiz";
  // document.body.appendChild(p)
});
function start_timer() {
  timer_id = setInterval(function () {
    countdown.textContent = TIMER_60;
    TIMER_60--;
    if (TIMER_60 <= 0) {
      clearInterval(timer_id);
    }
  }, 1000);
}
function render_question(question) {
  console.log(question);
  var currentAnswer = question.answer;
  question_area.innerHTML += "<h3>" + question.title + "<h3>";
  question_area.innerHTML += "<ul class='answer-list'>";
  question_area.innerHTML +=
    '<li class="answer">' + question.choices[0] + "</li>";
  question_area.innerHTML +=
    '<li class="answer">' + question.choices[1] + "</li>";
  question_area.innerHTML +=
    '<li class="answer">' + question.choices[2] + "</li>";
  question_area.innerHTML +=
    '<li class="answer">' + question.choices[3] + "</li>";
  question_area.innerHTML += "</ul>";
  question_area.innerHTML += "<p class = 'rightOrWrong'></p>";
  var rightOrWrong = document.querySelector(".rightOrWrong");
  var answerArray = document.getElementsByClassName("answer");
  console.log(answerArray);
  for (let i = 0; i < answerArray.length; i++) {
    const element = answerArray[i];
    element.addEventListener("click", function evaluateAnswer(event) {
      var chosenAnswer = event.target.textContent;
      if (currentAnswer === chosenAnswer) {
        console.log("correct");
        score += 25;
        rightOrWrong.textContent = "Right!";
        setTimeout(getNextQuestion, 1000);
      } else {
        console.log("wrong");
        rightOrWrong.textContent = "Wrong!";
        TIMER_60 -= 5;
        setTimeout(getNextQuestion, 1000);
      }
    });
  }
}
{
  /* <h3>Question Test</h3> 
        <ul class="answer-list">
          <li class="answer">a</li>
          <li class="answer">b</li>
          <li class="answer">c</li>
          <li class="answer">d</li>
        </ul>   */
}

function getNextQuestion() {
  question_area.innerHTML = "";
  console.log(questionIndex);
  console.log(questions.length);
  if (TIMER_60 <= 0 || questionIndex > questions.length - 1) {
    var scorePage = document.getElementById("score-page");
    scorePage.style.display = "initial";

  } else {
    render_question(questions[questionIndex]);
    questionIndex += 1;
  }
}
//add event listener to submit button, gather input from text they enter, store as a string in local storage.
