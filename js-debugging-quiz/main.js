function quiz(){
	let score = 0;
	let num;
	let question;
  	let answer;
	let quiz_questions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?'
	];
	let quiz_answers = ['1', '82', '0'];
	
	//get total number of questions
	let totalQuestion = quiz_questions.length;
	console.log(totalQuestion);

	//generate random number for question: 0, 1, or 2
	num = Math.floor(Math.random() * 3);
	
	// let question be asked three times before returning score
	for(let count = 0; count < totalQuestion; count++){
		question = quiz_questions[num];
		answer = prompt(question);
		if (answer === quiz_answers[num]) {
			score++;
			alert("Correct!");
		} else {
			alert("Wrong");
		}
		num++;
		if (num === totalQuestion) {
			num = 0;
		}
	}
	// document.write seems to work too but Chrome says avoid using it	
//   document.write(`<p>You got ${score} out of ${totalQuestion} questions correct.</p>`);
	const finalMsg = document.querySelector("#questionArea");
	finalMsg.innerText = `You got ${score} out of ${totalQuestion} questions correct.`;
}
