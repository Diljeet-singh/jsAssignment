var number =1; //question number
var playingScore =0;//score of the player

//answers array
var answers = ["q1optC", "q2optD", "q3optB", "q4optB"]



function questionSeries() {
	//printing the question series 
	if (number <5) {
		
		document.getElementById('ques' + number).style.display = "block";
		if (number > 1) {
			document.getElementById('ques' +
                                (number-1)).style.display = "none";
		}
	}else{
		document.querySelector('.sc').textContent = playingScore;
		document.getElementById('score').style["display"] = "block";
		document.getElementById('ques' +
                        [number-1]).style["display"]= "none";
	}
}

//getting next question on the screen when next question button is clicked
document.getElementById('nxtQues').addEventListener('click', function () {
	number++;
	document.getElementById('correct').style.display = "none";
	document.getElementById('wrong').style.display = "none";
	questionSeries();
});

//Submit button 
document.getElementById('submit').addEventListener('click', function (){
	//1.hidding the question
	document.getElementById('ques' + number).style["display"] = "none";

	//2.checking the answer and displaying the text whether answer is wrong or right.
	if (document.getElementById(answers[number -1]).checked) {

		playingScore ++;
		document.getElementById('b' + number).style["background-color"]= "green";
		
		document.getElementById('correct').style["display"] = "block";
	}else{
		document.getElementById('wrong').style.display = "block";
		document.getElementById('b' + number).style["background-color"]= "red";
	}
	
});

//Help button: 
document.getElementById('help').addEventListener('click', function(){
	//Displaying the text on button click and then hidding if the button 
        //is clicked again 
	var id = document.getElementById('hel').style.display;
	
	if (id == "block") {
		document.getElementById('hel').style.display = "none";
	}else{
		document.getElementById('hel').style.display = "block";
	}

});