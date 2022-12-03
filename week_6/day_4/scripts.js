// var questionWrap = document.querySelector('.question-wrap');

// var header = document.querySelector('#header-text');

// header.setAttribute('data-bozo', 'cheesy');

// console.log(header.dataset.bozo);
// console.log(header.getAttribute('data-bozo'));

// // console.log(questionWrap);

// function checkAnswer(event){
//     var el = event.target;
//     if (el.tagName === "LI"){
//         var userAnswer = el.innerText;
//         var isCorrect = el.dataset.correct;

//         console.log(isCorrect);

//         if (isCorrect == "true"){
//             alert('you got it');
//         }
//     };
// }

// // for (var item of listItems){
// //     item.addEventListener('click', checkAnswer);
// // }

// questionWrap.addEventListener('click', checkAnswer);

//////// LOCAL STORAGE //////////////////

localStorage.setItem('color', 'lightseacolor');
localStorage.setItem('brand', 'nike');
localStorage.setItem('color', 'red');

//Store arrays and objects

// console.log(localStorage.getItem('brand'));


var data = {
    name: 'JD',
    age: '42'
};

localStorage.setItem('user_data', JSON.stringify(data));

var userData = JSON.parse(localStorage.getItem('user_data'));


console.log(userData.name);

//QUESTIONS DATA
var questions = [
    {
        title: 'What is the acronym for the Document Object Model',
        choices: ['JS', 'OBJ', 'DOM', 'ARR'],
        answer: 'DOM'
    },
    {
        title: 'What type of for loop is used for iterating over an object',
        choices: ['in', 'of', 'at', 'each'],
        answer: 'in'
    }
];

var currentQuestionIndex = 0;
var questionWrap = document.querySelector('.question-wrap');

questionWrap.classList.add('hide');
questionWrap.classList.remove('hide');
//Display the questions

//for every item in the array create a li

//Display a list of choices

questionWrap.innerHTML = `
<div class="question">
<h3>${questions[currentQuestionIndex].title}<h3>
<ul></ul>
</div>
`;

var ul = questionWrap.querySelector('ul');

var choices = questions[currentQuestionIndex].choices;


for(var choice of choices){
    ul.insertAdjacentHTML('beforeend', `<li>${choice}</li>`)
}

questionWrap.addEventListener('click', function(){
    //get the text of the li and compare it with the correct answer
    var answer = questions[currentQuestionIndex].answer;
    console.log(event.target.innerText);
})

//increase the currentquestionindex

