$("#start").click(start);


var currentQuestion = 0;
var score = 0;

function start(){
    $("#welcome").hide();
    $("#start").hide();
    $("#opening_image").hide();
    generate();
    $('#answer_choices').on('click', 'li', function() {
        validate($(this).text());
})
}

function generate(){
    $('#next_question').hide();
    $("#incorrect_message").empty();
    $("#correct_message").empty();
    $("#question_image").append("<img>");
    $("img").attr("src", questions[currentQuestion].image_q);
    $("#question").text(questions[currentQuestion].question);
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        $("#answer_choices").append("<li>" + questions[currentQuestion].choices[i] + "</li>");
    }
}

function correctAnswer(){
    score +=1;
    $("img").remove();
    $("#question").empty();
    $("#answer_choices").empty();
    $("#incorrect_message").empty();
    $("#score").text('Your score is ' + score);
    $("#correct_message").text("Correct!");
    $("#answer_blurb").text(questions[currentQuestion].explanation);
    $("#next_question").show();
    $("#answer_image").append("<img>");
    $("img").attr("src", questions[currentQuestion].image_a);
}

$("#next_question").click(function(){
    currentQuestion += 1;
    $("#correct_message").empty();
    $("#answer_blurb").empty();
    $("img").remove();
    generate();
})

function incorrectAnswer(){
    $("img").remove();
    $("#question").empty();
    $("#answer_choices").empty();
    $("#correct_message").empty();
    $("#score").text('Your score is ' + score);
    $("#incorrect_message").text("Incorrect!");
    $("#next_question").show();
    $("#incorrect_answer_image").append("<img>");
    $("img").attr("src", questions[currentQuestion].image_q);
}

function validate(input){
    questions[currentQuestion].answer === input ? (correctAnswer()) : (incorrectAnswer());
    if(currentQuestion >= (questions.length -1)) {
        lastPage(input);
    }
}

function lastPage(input){
    if(input === questions[currentQuestion].answer){
    $('#next_question').hide();
    $("#incorrect_message").empty();
    $("#question").empty();
    $("#answer_choices").empty();
    $("#play_again").show();
    $("#correct_message").text("Correct!");
    $("#score").text('Your score is ' + score);
    $("#ending_message").text("You've finished the game!");
    $("#ending_image").append("<img>");
    $("img").attr("src", questions[currentQuestion].image_a);    
}   else {
    $('#next_question').hide();
    $("#correct_message").empty();
    $("#question").empty();
    $("#answer_choices").empty();
    $("#play_again").show();
    $("#incorrect_message").text("Incorrect!");
    $("#ending_message").text("You've finished the game!");
    $("#score").text('Your score is ' + score);
    $("#ending_image").append("<img>");
    $("img").attr("src", questions[currentQuestion].image_a);
    }
   }

