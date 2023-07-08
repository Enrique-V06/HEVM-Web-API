var start_Q = document.querySelector(".StartQ");
var timerElement = document.querySelector(".timer-count");
var question = document.querySelector(".question");
var option_a = document.querySelector(".option_a");
var option_b = document.querySelector(".option_b");
var option_c = document.querySelector(".option_c");
var option_d = document.querySelector(".option_d");
var correctans = document.querySelector(".correct");
var incorrectans = document.querySelector(".incorrect");
var array_qstns = ["Commonly used data types DO Not Include: ","The condition in an if / else statement is enclosed with ","Arrays in JavaScript can be used to store ","String values must be enclosed within _______ when being assigned to variables. ","A very useful tool used during development and debugging for printing content to the debugger is: " ];
var array_opt_a = ["1. strings ","1. quotes ","1. numbers and strings ","1. commas ","1. JavaScript"];
var array_opt_b = ["2. booleans ","2. curly brackets ","2. Other arrays ","2. curly brackets ","2. terminal/bash "];
var array_opt_c = ["3. alerts ","3. parenthesis ","3. booleans ","3. quotes ","3. for loops "];
var array_opt_d = ["4. numbers ","4. square brackets ","4. all of the above ","4. parenthesis ","4. console.log "];
var correct_answer = ["c","c","d","c","d"];
var correct_answer2 = [];

//vars for timer and local register
var qstn_num = 0;
var user_answer = [];
var timer;
var timerCount;
var save_score;
var username_score = [];
timerCount = 60;

// First thing the page do when loaded. Stores the user scores to re-write new scores
function init() {
var stored_username_score = JSON.parse(localStorage.getItem("username_score"));
if (stored_username_score !== null) {
    username_score = stored_username_score;
}}

//Uploads the score of the user
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
//Change display to show scores
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

function reset(){
    disabled_btn()
    resetx2();
    setTimeout(undisabled_btn,1002);
    setTimeout(resetx2,1002);
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
    function resetx2(){
    clearInterval(timer);
    qstn_num = 0;
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


// Functions to hide or display the page elements
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
//Changes the question and options
function dispQuestion() {
    question.textContent = array_qstns[qstn_num];
    option_a.textContent = array_opt_a[qstn_num];
    option_b.textContent = array_opt_b[qstn_num];
    option_c.textContent = array_opt_c[qstn_num];
    option_d.textContent = array_opt_d[qstn_num];
}
//creates the array for the user answers
function answer_a(){
    user_answer[qstn_num] = "a";
    post_answer();
}function answer_b(){
    user_answer[qstn_num] = "b";
    post_answer();
}function answer_c(){
    user_answer[qstn_num] = "c";
    post_answer();
}function answer_d(){
    user_answer[qstn_num] = "d";
    post_answer();
}

function post_answer(){
    review_answer();
    qstn_num = qstn_num+1;
    setTimeout(dispQuestion,1000);
    setTimeout(show_again,1000);
    if (qstn_num === correct_answer.length) {
    setTimeout(show_user_score,1001);
    setTimeout(hide_options,1001);
    document.querySelector(".final_score").textContent = timerCount;
    save_score = timerCount;
}}
function review_answer(){
    hide_options();
    if (user_answer[qstn_num] == correct_answer[qstn_num]) {
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
        if (qstn_num === correct_answer.length && timerCount > 0) {
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
    reset()
    setTimeout(start_Quiz,1003);
}
function start_Quiz() {
    start_game_display();
    qstn_num = 0;
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
document.querySelector(".reset-btn").addEventListener("click",reset);
document.querySelector(".play_again").addEventListener("click",play_again);

init();