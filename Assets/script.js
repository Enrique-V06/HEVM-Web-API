var start_Q = document.querySelector(".StartQ");
var timerElement = document.querySelector(".timer-count");
var question = document.querySelector(".question");
var option_a = document.querySelector(".opt_a");
var option_b = document.querySelector(".opt_b");
var option_c = document.querySelector(".opt_c");
var option_d = document.querySelector(".opt_d");
var correctans = document.querySelector(".correct");
var incorrectans = document.querySelector(".incorrect");
var questions = [
"What is the coding language in charge the clientside webpage behaviour: ",
"Commonly used data types DO Not Include: ",
"The condition in an if / else statement is enclosed with ",
"Arrays in JavaScript can be used to store ",
"String values must be enclosed within _______ when being assigned to variables. ",
"A very useful tool used during development and debugging for printing content to the debugger is: ",
"What is Bootstrap: ",
""
];
var opt_a = ["1) german","1) alerts ","1) square brackets ","1) numbers and strings ","1) commas ","1) console.log", "1) a cowboy item"];
var opt_b = ["2) java","2) booleans ","2) parenthesis ","2) Other arrays ","2) curly brackets ","2) terminal/bash ", "2) javascript plugin"];
var opt_c = ["3) javascript","3) string ","3) curly brackets ","3) booleans ","3) quotes ","3) for loops ", "3) alternate CSS language"];
var opt_d = ["4) all of the above","4) numbers ","4) quotes ","4) all of the above ","4) parenthesis ","4) GUI ", "4) CSS framework directed at responsive development"];
var correct_answer = ["c","a","b","d","c","a","d"];



var question_num = 0;
var user_answer = [];
var timer;
var timerCount;
var save_score;
var username_score = [];
timerCount = 60;

function init() {
var stored_username_score = JSON.parse(localStorage.getItem("username_score"));
if (stored_username_score !== null) {
    username_score = stored_username_score;
}}


function upload(){
    upload_score_user();
    display_score_records();
    go_high_scores_page();
}
function upload_score_user(){
username_score.push({
    username: document.querySelector(".form-control").value.trim(),
    score: save_score
})
document.querySelector(".form-control").value = "";
save_score = undefined;
localStorage.setItem("username_score", JSON.stringify(username_score));
}
function display_score_records(){
document.getElementById("score-list").innerHTML = "";
for (var i = 0; i < username_score.length; i++) {
    var usnm = username_score[i].username;
    var scr = username_score[i].score;
    var li = document.createElement("li");
    li.textContent = usnm + "    ------   " + scr;
    li.setAttribute("data-index", i);
    document.getElementById("score-list").appendChild(li);
}}

function page_scores(){
    display_score_records();
    go_high_scores_page();
}
function go_high_scores_page(){
    document.querySelector(".high-scores-page").classList.remove("d-none");
    document.querySelector(".question").classList.add("d-none");
    document.querySelector(".btn-group-vertical").classList.add("d-none");
    document.querySelector(".correct-mark").classList.add("d-none");
    document.querySelector(".incorrect-mark").classList.add("d-none");
    document.querySelector(".user_score").classList.add("d-none");
    document.querySelector(".input-group").classList.add("d-none");
    document.querySelector(".Start").classList.add("d-none");
}

function Reset(){
    disabled_btn()
    reset();
    setTimeout(undisabled_btn,1002);
    setTimeout(reset,1002);
}
function disabled_btn(){
    option_a.setAttribute("disabled","");
    option_b.setAttribute("disabled","");
    option_c.setAttribute("disabled","");
    option_d.setAttribute("disabled","");
    start_Q.setAttribute("disabled","");
    document.querySelector(".high-scores-btn").setAttribute("disabled","");
    document.querySelector(".upload_score").setAttribute("disabled","");
    document.querySelector(".reset-btn").setAttribute("disabled","");
    document.querySelector(".play_again").setAttribute("disabled","");
}
function undisabled_btn(){
    option_a.removeAttribute("disabled","");
    option_b.removeAttribute("disabled","");
    option_c.removeAttribute("disabled","");
    option_d.removeAttribute("disabled","");
    start_Q.removeAttribute("disabled","");
    document.querySelector(".high-scores-btn").removeAttribute("disabled","");
    document.querySelector(".upload_score").removeAttribute("disabled","");
    document.querySelector(".reset-btn").removeAttribute("disabled","");
    document.querySelector(".play_again").removeAttribute("disabled","");
}
    function reset(){
    clearInterval(timer);
    question_num = 0;
    user_answer = [];
    timer = undefined;
    timerCount = 60;
    save_score = undefined;
    document.querySelector(".high-scores-page").classList.add("d-none");
    document.querySelector(".question").classList.add("d-none");
    document.querySelector(".btn-group-vertical").classList.add("d-none");
    document.querySelector(".correct-mark").classList.add("d-none");
    document.querySelector(".incorrect-mark").classList.add("d-none");
    document.querySelector(".times_up").classList.add("d-none");
    document.querySelector(".user_score").classList.add("d-none");
    document.querySelector(".input-group").classList.add("d-none");
    document.querySelector(".Start").classList.remove("d-none");
    timerElement.textContent = "--";
    correctans.textContent = "";
}



function start_game_display(){
    document.querySelector(".high-scores-page").classList.add("d-none");
    document.getElementById("container2").classList.remove("d-none");
    document.querySelector(".question").classList.remove("d-none");
    document.querySelector(".btn-group-vertical").classList.remove("d-none");
    document.querySelector(".correct-mark").classList.add("d-none");
    document.querySelector(".incorrect-mark").classList.add("d-none");
    document.querySelector(".times_up").classList.add("d-none");
    document.querySelector(".user_score").classList.add("d-none");
    document.querySelector(".input-group").classList.add("d-none");
    document.querySelector(".Start").classList.add("d-none");
    correctans.textContent = "";
}
function times_up(){
    document.querySelector(".high-scores-page").classList.add("d-none");
    document.querySelector(".question").classList.add("d-none");
    document.querySelector(".btn-group-vertical").classList.add("d-none");
    document.querySelector(".correct-mark").classList.add("d-none");
    document.querySelector(".incorrect-mark").classList.add("d-none");
    document.querySelector(".times_up").classList.remove("d-none");
    document.querySelector(".user_score").classList.add("d-none");
    document.querySelector(".input-group").classList.add("d-none");
    document.querySelector(".Start").classList.add("d-none");
    correctans.textContent = "Time's Up!";
    setTimeout(go_high_scores_page,1000);
}
function hide_options(){
    document.querySelector(".btn-group-vertical").classList.add("d-none");
}
function show_again(){
    document.querySelector(".btn-group-vertical").classList.remove("d-none");
    document.querySelector(".correct-mark").classList.add("d-none");
    document.querySelector(".incorrect-mark").classList.add("d-none");
    correctans.textContent = "";
    incorrectans.textContent = "";
}
function show_user_score(){
    document.querySelector(".user_score").classList.remove("d-none");
    document.querySelector(".input-group").classList.remove("d-none");
}

function dispQuestion() {
    question.textContent = questions[question_num];
    option_a.textContent = opt_a[question_num];
    option_b.textContent = opt_b[question_num];
    option_c.textContent = opt_c[question_num];
    option_d.textContent = opt_d[question_num];
}

function answer_a(){
    user_answer[question_num] = "a";
    post_answer();
}function answer_b(){
    user_answer[question_num] = "b";
    post_answer();
}function answer_c(){
    user_answer[question_num] = "c";
    post_answer();
}function answer_d(){
    user_answer[question_num] = "d";
    post_answer();
}

function post_answer(){
    review_answer();
    question_num = question_num + 1;
    setTimeout(dispQuestion,1000);
    setTimeout(show_again,1000);
    if (question_num === correct_answer.length) {
    setTimeout(show_user_score,1001);
    setTimeout(hide_options,1001);
    document.querySelector(".final_score").textContent = timerCount;
    save_score = timerCount;
}}
function review_answer(){
    hide_options();
    if (user_answer[question_num] == correct_answer[question_num]) {
    document.querySelector(".correct-mark").classList.remove("d-none");
    correctans.textContent = "Correct";
}
else {
    document.querySelector(".incorrect-mark").classList.remove("d-none");
    incorrectans.textContent = "Incorrect";
    timerCount = timerCount -10;
}}

function startTimer() {
    timer = setInterval(function() {
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
        if (question_num === correct_answer.length && timerCount > 0) {
            clearInterval(timer);
        }}if (timerCount === 0) {
        clearInterval(timer);
        times_up();
        } if (timerCount < 0){
        disabled_btn()
        timerCount = 1;
        setTimeout(undisabled_btn,1001);
    } timerCount--;
    }, 1000);
}


function play_again(){
    Reset()
    setTimeout(start_Quiz,1003);
}
function start_Quiz() {
    start_game_display();
    question_num = 0;
    startTimer();
    dispQuestion();
}

start_Q.addEventListener("click", start_Quiz);
option_a.addEventListener("click",answer_a);
option_b.addEventListener("click",answer_b);
option_c.addEventListener("click",answer_c);
option_d.addEventListener("click",answer_d);
document.querySelector(".high-scores-btn").addEventListener("click",page_scores);
document.querySelector(".upload_score").addEventListener("click",upload);
document.querySelector(".reset-btn").addEventListener("click",Reset);
document.querySelector(".play_again").addEventListener("click",play_again);

init();