// array with currentQuestions and answers in another js file
// console.log("Is answer: ",currentQuestions[0][1][4]+1);
// use timer to countdown

var currentQuestions = [];
var correct = 0;
var wrong = 0;
var total = 10;
var timer = 10;

// DOM variables

var secondContainer = $('.second-container');

// $(document).on('load',startGame());
// function startGame(){}

$('.submit').on('click',function(){
    for(var i=0;i<questions.length;i++){
        currentQuestions.push(questions[i]);
    }
    erase();
    getQuestion();
    $('button').attr('class','button-hide');
})

function getQuestion(){
    // get random question from array
    $('#answers').empty();
    var randomQuestion = Math.floor(Math.random() * currentQuestions.length);

    // display question
    $('.question').text(currentQuestions[randomQuestion][0][0]);
    for(var i=0;i<4;i++){
        var listItem = $('<li>');
        listItem.attr('class','answer-choice');
        if(i === currentQuestions[randomQuestion][1][4]){
            listItem.attr('data-check', 'answer');
        }
        else{
            listItem.attr('data-check', 'false');
        }
        listItem.text(currentQuestions[randomQuestion][1][i]);
        $('#answers').append(listItem);
    }
    // remove question from that array
    currentQuestions.splice(randomQuestion,1);
}

$(document).on('click','li',function(){
    ($(this).attr('data-check')==='answer') ? (correct++, isCorrect()):(wrong++, isWrong());
})

function isCorrect(){
    erase();
    secondContainer.html('<img src="http://giphygifs.s3.amazonaws.com/media/11YMhfLfGoq5Gg/giphy.gif"><br><br>');
    secondContainer.append('<button onclick=next()>Next</button>');
}

function isWrong(){
    erase();
    secondContainer.html('<img src="https://i.kym-cdn.com/entries/icons/original/000/005/609/800px-Yamcha_found_dead.jpg" width="400px"><br><br>');
    secondContainer.append('<button onclick=next()>Next</button>');
}

function next(){
    erase();
    (currentQuestions.length === 0) ? showEndScore() : getQuestion();
}

function erase(){
    $('.timer').empty();
    $('.question').empty();
    $('#answers').empty();
    secondContainer.empty();
}

function showEndScore(){
    erase();
    var endScore = $('<div>');
    var showWins = $('<p>');
    var showLoss = $('<p>');
    showWins.text('Correct: '+correct);
    showLoss.text('Wrong: '+wrong);
    endScore.append(showWins);
    endScore.append(showLoss);

    secondContainer.append(endScore);
    $('button').removeClass('button-hide');
    
}





