console.log("hello");
var questionIndex = 0;
var score = 0;
var question_area = document.querySelector(".question_area");
var questions = [
  {
    title: "Who is NOT an enemy of The Doctor?",
    choices: ["Daleks", "The Borg", "Cybermen", "Weeping Angels"],
    answer: "The Borg",
  },
  {
    title: "What does TARDIS stand for?",
    choices: ["Top And Rear Distance In Smoke", "Toward Angles Relative Due In Soup", "Time And Relative Dimension In Space", "Time Assets Risky Doors In Space"],
    answer: "Time And Relative Dimension In Space"
  },
  {
    title: "Who is the best ever Doctor Who Companion",
    choices: ["Rose Tyler", "Rory Williams", "Dr. River Song", "Queen Nerfertti of Egypt "],
    answer: "Rory Williams",
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
        rightOrWrong.textContent = "Fantastic!";
        setTimeout(getNextQuestion, 1000);
      } else {
        console.log("wrong");
        rightOrWrong.textContent = "Well...I'm sorry.";
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
