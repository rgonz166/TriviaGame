// array with questions and answers in another js file
// console.log("Is answer: ",questions[0][1][4]+1);
// use timer to countdown

var correct = 0;
var wrong = 0;
var total = 10;
var timer = 10;

// DOM variables
var secondContainer = $('.second-container');

// $(document).on('load',startGame());
// function startGame(){}

$('.submit').on('click',function(){
    if(questions.length === 0){
        // run score check function
        alert("done");
        showEndScore();
    }
    else{
        getQuestion();
    }
    // $('button').attr('class','button-hide');
})

function getQuestion(){
    // get random question from array
    $('#answers').empty();
    var randomQuestion = Math.floor(Math.random() * questions.length);

    // display question
    $('.question').text(questions[randomQuestion][0][0]);
    for(var i=0;i<4;i++){
        var listItem = $('<li>');
        listItem.attr('class','answer-choice');
        if(i === questions[randomQuestion][1][4]){
            listItem.attr('data-check', 'answer');
        }
        else{
            listItem.attr('data-check', 'false');
        }
        listItem.text(questions[randomQuestion][1][i]);
        $('#answers').append(listItem);
    }
    // remove that array
    questions.splice(randomQuestion,1);
}

$(document).on('click','li',function(){
    console.log("clicked");
    if($(this).attr('data-check')==='answer'){
        alert("Correct");
        correct++;
        //Show isCorrect method that displays a good job
    }
    else{
        alert("Wrong!");
        wrong++;
        // Show isWrong method that displays bad job
    }
    
})
function isCorrect(){
    
}

function isWrong(){

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
    
}





