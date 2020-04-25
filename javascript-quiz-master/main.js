
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    
	var correct = 0;


	if (question1 == "Internet") {
		correct++;
}
	if (question2 == "URL") {
		correct++;
}	
	if (question3 == "Text Editor") {
		correct++;
	}
    if (question4 == "Index") {
    correct++;
}
    if (question5 == "Hypertext Markup Language") {
    correct++;
}
    if (question6 == "Cascading Style Sheets") {
    correct++;
}
    if (question7 == "Ruby") {
    correct++;
}
    if (question8 == "cd") {
    correct++;
}
    if (question9 == "git push -u origin master") {
    correct++;
}
    if (question10 == "cd /mnt/d") {
    correct++;
}
	
	var pictures = ["img/marge.gif", "img/duck.gif", "img/clap.gif"];
	var messages = ["I'm impressed!", "I think you should look at the answers and try again...", "You better try again..."];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 10) {
		score = 1;
	}

	if (correct == 10) {
		score = 0;
	}
    
    

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
    
	}
	
