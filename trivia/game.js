

var myQuestions = [
    {
        question: "<h3>Which one teams is not in Toronto?<h3>",
        answers: {
            a: 'Raptors',
            b: 'Leafs',
            c: 'Blue Jays',
            d: 'Canadiens'
        },
        correctAnswer: 'd'
    },
    {
        question: "<h3>Who has the most career points in NBA history?<h3>",
        answers: {
            a: 'Michael Jordan',
            b: 'Lebron James',
            c: 'Kareem Abdul Jabar',
            d: 'Kobe Bryant'
        },
        correctAnswer: 'c'
    },
    {
        question: "<h3>Who is undefeated?<h3>",
        answers: {
            a: 'Floyd Mayweather',
            b: 'Muhammad Ali',
            c: 'Mike Tyson',
            d: 'Lennox Lewis'
        },
        correctAnswer: 'a'
    },
    {
        question: "<h3>How many Super Bowl wins does Tom Brady have?<h3>",
        answers: {
            a: '1',
            b: '3',
            c: '5',
            d: '10'
        },
        correctAnswer: 'c'
    },
    {
        question: "<h3>Who was the longest reigning WWF Heavyweight Champion in the 80s?<h3>",
        answers: {
            a: 'The Rock',
            b: 'Hulk Hogan',
            c: 'Ric Flair',
            d: 'Stone Cold'
        },
        correctAnswer: 'b'
    },
    {
        question: "<h3>Who is known as 'The Great One'?<h3>",
        answers: {
            a: 'Wayne Gretzky',
            b: 'Doug Gilmore',
            c: 'Eric Lindros',
            d: 'Eric Forsberg'
        },
        correctAnswer: 'a'
    }
    
];



var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }
    
   
    

    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

    var x = 10;
    var y = document.getElementById("timer");
    // Display count down for 30 seconds
    setInterval(function(){
    if( x<=11 && x>=1)
    {
    x--;
    y.innerHTML= ''+x+'';
    if(x==1){
    x=11;
    }
    }
    }, 1000);

    var auto_refresh = setInterval(function() { submitform(); }, 10000);
// Form submit function.
function submitform(){
if( showResults(questions, quizContainer, resultsContainer) ) // Calling validate function.
{ 
document.getElementById("quiz").submit();
}
}

// clearInterval(setInterval); 
// clearInterval(submitform); 
// clearInterval(auto_refresh); 
// clearInterval(30000); 
// clearInterval(showResults); 
// clearTimeout(setInterval);
// clearTimeout(submitform);
// clearTimeout(auto_refresh);
// clearTimeout(30000);
// clearTimeout(showResults);

    
}
