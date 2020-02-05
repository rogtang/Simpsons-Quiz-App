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
    });
  }
  
  //TURN INTO A CONDITION IF/ELSE
  function generateQuestion() {
    if (questionNumber < STORE.length) {
    const currentQuestion = STORE[questionNumber]
    $('#js-quiz-questions').html(
      `<section id="questionScreen">
          
            <form id="answerChoices">
              <fieldset>
                <legend><span id='questionText'>${currentQuestion.question}</span></legend>
                
                    <label for='answerChoice1' class="answer">
                      <input id='answerChoice1'  type='radio'  name='questionResponse' value='${currentQuestion.answers[0]}' required>
                      <span class="answer">${currentQuestion.answers[0]}</span>
                    </label>
                  
                 
                    <label for='answerChoice2' class="answer">
                      <input id='answerChoice2'  type='radio'  name='questionResponse' value='${currentQuestion.answers[1]}' required >
                      <span class="answer">${currentQuestion.answers[1]}</span>
                    </label>
                  
                  
                    <label for='answerChoice3' class="answer">
                      <input id='answerChoice3'  type='radio'  name='questionResponse' value='${currentQuestion.answers[2]}' required >
                      <span class="answer">${currentQuestion.answers[2]}</span>
                    </label>
                  
                  
                    <label for='answerChoice4' class="answer">
                      <input id='answerChoice4'  type='radio'  name='questionResponse' value='${currentQuestion.answers[3]}' required>
                      <span class="answer">${currentQuestion.answers[3]}</span>
                    </label>
                  
              </fieldset>
            </form>
            <button id="submit-button" type="submit" value='submit'>Submit</button>
            </section>`);
    } else {
      $('#js-quiz-questions').hide();
      $('#js-quiz-response').show();
      finalResults();
      $('.questionNumber').text(10)
    }
  }
  
  
  //this function will validate the answer submitted
  function submitAnswer() {
    $('.quiz-main').on('submit', '#js-quiz-questions', (e) => {
      console.log("it's working");
      event.preventDefault();
      $('#js-quiz-questions').hide();
      $('#js-quiz-response').show();
      let selectedAnswer = $('input[name="questionResponse"]:checked').val();
      let correct = STORE[questionNumber].correctAnswer;
      if (selectedAnswer === correct) {
        rightAnswer();
        updateScore();
        updateQuestionNumber();
      } else {
        wrongAnswer();
        updateQuestionNumber();
      }
    });
  }
  
  //this function runs if answer is right
  function rightAnswer() {
    $('#js-quiz-response').html(
      `<section id="correctScreen">
    <p> Woohoo!</p>
    <img class="cowabunga" src="Images/cowabunga_bart.jpg" alt="Bart">
    <button class="nextButton" id="continue-button" type="button">Next</button>
    </section>`);
  }

  //this function runs if answer is wrong
  function wrongAnswer() {
    $('#js-quiz-response').html(
      `<section id="incorrectScreen">
      <p> I am so smart. S-M-R-T! It's actually ${STORE[questionNumber].correctAnswer}</p>
      <img class="doh" src="Images/D-oh.jpg" alt="Homer">
      <button class="nextButton" id="continue-button" type="button">Next</button>
      </section>`);
  }
  
  function nextQuestion() {
    //this function shows next question
    //increment questionNumber ++, then call generateQuestion()
    console.log(questionNumber);
    $('.quiz-main').on('click', '.nextButton', (e) => {
      console.log("it's not working");
      event.preventDefault();
      $('#js-quiz-response').hide();
      $('#js-quiz-questions').show();
      $('#nextButton').replaceWith(generateQuestion());
    });
  }
  
  function finalResults() {
    console.log('final');
    $('#js-quiz-response').html(
      `<section id="resultsScreen">
    <p>You got ${score} out of 10. We hope you enjoyed your visit to Springfield: The next best place to Shelbyville.</p>
    <img class="cast" src="Images/Springfield_cast.jpg" alt="Simpsons cast">
    <button class="restartButton" id="restart-button" type="button">Try Again</button>
    </section>`);
  }

  function resetScore() {
    score = 0;
    questionNumber = 0;
    $('.score').text(0);
    $('.questionNumber').text(1);
  }

  function restartQuiz() {
    //this function restarts quiz at the end
    //reset questionNumber = 0, score = 0
    $('.quiz-main').on('click', '.restartButton', function (event) {
    event.preventDefault();
    $('#js-quiz-response').hide();
    resetScore();
    $('.welcome').show();
    $('#js-quiz-launch').show();
  });
  }
  
  
  //callback function
  function handleSimpsonsQuiz() {
    startQuiz();
    submitAnswer();
    nextQuestion();
    restartQuiz();
  }
  
  
  //when page loads, call handleSimpsonsQuiz;
  $(handleSimpsonsQuiz);