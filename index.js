'use strict';

const STORE = [
{
question: 'What show did the Simpsons originally appear on in 1987?',
answers: [
  'Saturday Night Live', 'The Tracey Ullman Show', 'Beavis and Butthead', 'The Tonight Show'],
correctAnswer: 'The Tracey Ullman Show'
},
{
question: 'What brand of beer is most commonly served at Moe’s Tavern?',
answers: [
  'Bud Lite', 'Coors Light', 'Buzz', 'Duff'],
correctAnswer: 'Duff'
},
{
question: 'What cocktail did Homer create?',
answers: [
  'Flaming Homer', 'Jolting Homer', 'Happy Homer', 'Whisky Homer'],
correctAnswer: 'Flaming Homer'
},
{
question: 'Who founded Springfield?',
answers: [
'Abraham Springfield', 'Jebediah Springfield', 'Montgomery Springfield', 'Hans Moleman'],
correctAnswer: 'Jebediah Springfield'
},
{
question: 'What are the names of Marge’s twin sisters?',
answers: [
'Bonnie & Clydette', 'Thelma & Louise', 'Betty & Veronica', 'Patty & Selma'],
correctAnswer: 'Patty & Selma'
},
{
question: 'What street do the Simpsons live on?',
answers: [
'Woodlawn Avenue', 'Shelbyville Lane', 'Evergreen Terrace', 'Quimby Road'],
correctAnswer: 'Evergreen Terrace'
},
{
question: 'Who shot Mr. Burns?',
answers: [
'Maggie Simpson', 'Homer Simpson', 'Lisa Simpson', 'Hans Moleman'],
correctAnswer: 'Maggie Simpson'
},
{
question: 'Where does Milhouse’s dad work?',
answers: [
'The cracker factory', 'The nuclear power plant', 'The Leftorium', 'The Kwik-E-Mart'],
correctAnswer: 'The cracker factory'
},
{
question: 'What is Principal Skinner’s real name?',
answers: [
'Rainier Wolfcastle', 'Frank Grimes', 'Hugh Jass', 'Arman Tanzarian'],
correctAnswer: 'Arman Tanzarian'
},
{
question: 'Who owns the world’s largest collection of Malibu Stacy dolls?',
answers: [
'Lisa Simpson', 'Jessica Lovejoy', 'Waylon Smithers', 'Milhouse Van Houten'],
correctAnswer: 'Waylon Smithers'
}
];

//variable store user results of quiz
let questionNumber = 0;
let score = 0;

function updateScore() {
  score++;
  $('.score').text(score);
}

function updateQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(questionNumber);
}

//this function will start the quiz
function startQuiz() {
  $('.start-btn').on('click', function(event) {
    event.preventDefault();
    $('#js-quiz-launch').hide();
    $('.welcome').hide();
    generateQuestion();
    $('#js-quiz-questions').show();
    $('.js-quiz-results').show();
    updateQuestionNumber();
  });
}


function generateQuestion() {
  const currentQuestion = STORE[questionNumber]
  $('#js-quiz-questions').html(
    `<section id="questionScreen">
        
          <form id="answerChoices">
            <fieldset>
              <legend><span id='questionText'>${currentQuestion.question}</span></legend>
              
                  <label for='answerChoice1' class="answer">
                    <input id='answerChoice1'  type='radio'  name='question' required autofocus>
                    <span class="answer">${currentQuestion.answers[0]}</span>
                  </label>
                
               
                  <label for='answerChoice2' class="answer">
                    <input id='answerChoice2'  type='radio'  name='question' required >
                    <span class="answer">${currentQuestion.answers[1]}</span>
                  </label>
                
                
                  <label for='answerChoice3' class="answer">
                    <input id='answerChoice3'  type='radio'  name='question' required >
                    <span class="answer">${currentQuestion.answers[2]}</span>
                  </label>
                
                
                  <label for='answerChoice4' class="answer">
                    <input id='answerChoice4'  type='radio'  name='question' required aria-required="true">
                    <span class="answer">${currentQuestion.answers[3]}</span>
                  </label>
                
            </fieldset>
          </form>
          <button id="submit-button" type="submit" form='answerChoices' value='submit'> Choose wisely...</button>
          </section>`);

}



function submitAnswer() {
  //this function will validate the answer submitted
}


//callback function
function handleSimpsonsQuiz() {
  startQuiz();
  generateQuestion();
  submitAnswer();
}


//when page loads, call handleSimpsonsQuiz;
$(handleSimpsonsQuiz);