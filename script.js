let currentQuetion = 0;
let score = 0 ;
let totQuetions = quetions.length;

let container = document.getElementById('quiz-container');
let quetionEL = document.getElementById('question');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let nextButton = document.getElementById('nextButton');
let resultCont = document.getElementById('result');

function loadQuestion(questionIndex) {

     var q = quetions[questionIndex];
     quetionEL.textContent = (questionIndex + 1) + '. ' + q.quetion;
     opt1.textContent = q.option1;
     opt2.textContent = q.option2;
     opt3.textContent = q.option3;
     opt4.textContent = q.option4;
     
};

function loadNextQuestion () {
    var selectedOption =  document.querySelector('input[type=radio]:checked');
        
    if ( !selectedOption  ) {
        alert ('please select your answer!');
        console.log('sdhjkasd');
        return;
    }
    // when answer is true its add 10 on score....
    var answer = selectedOption.value;
    if (quetions[currentQuetion].answer == answer) {
        score += 10;
    }
// unchecked
    selectedOption.checked = false;
    currentQuetion++;
    if (currentQuetion == totQuetions -1) {
        nextButton.textContent = 'finish';
    } 
    if (currentQuetion == totQuetions) {
        container.style.display =  'none';
        resultCont.style.display = '';
        resultCont.textContent = 'your score: ' + score;
        return;
    }
    loadQuestion(currentQuetion);
}

