console.log("hello");
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
  var answerArray = document.getElementsByClassName("answer");
  console.log(answerArray);
  for (let i = 0; i < answerArray.length; i++) {
    const element = answerArray[i];
    element.addEventListener("click", function evaluateAnswer(event) {
      var chosenAnswer = event.target.textContent;
      if (currentAnswer === chosenAnswer) {
        console.log("correct");
        score += 25
      } else {
        console.log("wrong");
        TIMER_60 -= 5;
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
render_question(questions[0]);
