// store in var all relevant HTML elements
var timerEl = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");
var boxEl = document.querySelector(".box");
var questionEl = document.querySelector(".text-heading");
var textEl = document.querySelector(".text-container");
var backButton = document.querySelector(".back-button");
var resetButton = document.querySelector(".reset-button");
var listEl = document.querySelector(".highscore-list-container");
var buttonContainer = document.querySelector(".button-container");

// Array of questions for quiz

var questionArray = [
    {
        question: "Which of the following keywords are used to define a variable in JavaScript?",
        choice1: "var",
        choice2: "let",
        choice3: "Both A and B",
        choice4: "None of the above",
        answer: "3"
    },
    {
        question: "What is the output of typeof NaN?",
        choice1: "null",
        choice2: "undefined",
        choice3: "number",
        choice4: "string",
        answer: "3"
    },
    {
        question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
        choice1: "last()",
        choice2: "put()",
        choice3: "push()",
        choice4: "None of the above",
        answer: "3"
    },
    {
        question: "Which of the following methods can be used to display data in some form using JavaScript?",
        choice1: "document.write()",
        choice2: "console.log",
        choice3: "window.alert()",
        choice4: "All of the above",
        answer: "4"
    },
    {
        question: "Which function is used to serialize an object into a JSON string in JavaScript?",
        choice1: "stringify()",
        choice2: "parse()",
        choice3: "convert()",
        choice4: "None of the above",
        answer: "1"
    },
    {
        question: "Which of the following keywords are used to define a variable in JavaScript?",
        choice1: "var",
        choice2: "let",
        choice3: "Both A and B",
        choice4: "None of the above",
        answer: "3"
    },
    {
        question: "How do you stop an interval timer in JavaScript?",
        choice1: "clearInterval",
        choice2: "clearTimer",
        choice3: "intervalOver",
        choice4: "None of the above",
        answer: "1"
    },
    {
        question: "How are objects compared when they are checked with the strict equality operator (===)?",
        choice1: "The contents of the objects are compared",
        choice2: "Their references are compared",
        choice3: "Both 1 and 2",
        choice4: "None of the above",
        answer: "2"
    },
    {
        question: "How can a datatype be declared to be a constant?",
        choice1: "var",
        choice2: "let",
        choice3: "constant",
        choice4: "const",
        answer: "4"
    },
    {
        question: "How do you convert string to objects using JSON?",
        choice1: "JSON.parse()",
        choice2: "JSON.stringify()",
        choice3: "JSON.string()",
        choice4: "None of the above",
        answer: "1"
    },
    {
        question: "Which of the following Number object function formats a number with a specific number of digits to the right of the decimal?",
        choice1: "toExponential()",
        choice2: "toFixed()",
        choice3: "toPrecision()",
        choice4: "toLocaleString",
        answer: "2"
    },
    {
        question: "How are two values compared when they are checked with the strict equality operator (===)?",
        choice1: "Their values are compared",
        choice2: "Their datatypes are compared",
        choice3: "Both 1 and 2",
        choice4: "None of the above",
        answer: "3"
    }
];
var gameStatus = false;
var sortArrayQuestions = [];
var choiceArray = [];
var currentQuestionIndex = 0;
var currentSortArrayIndex = 0;
var score = 0;

//Timer function
function countdown(timeleft) {
    //   function for when a number is passed or not

    if (!timeLeft) {
        timeLeft = 120;
    }
  
    timeInterval = setInterval(function () {
        if (timeLeft > -1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            // if timeLeft reaches 0, the game is over
            gameStatus = false;
            gameOver();
        }
    }, 1000);
}

// Allows the questionArray to render a random question
function randomSort(arr) {
    var count = arr.length;
    var index = 0;

    for (var i = 0; i < count; i++) {
        index = Math.abs(Math.floor(Math.random() * count));
        while (sortArrayQuestions.includes(index)) {
            index = Math.abs(Math.floor(Math.random() * count));
        }
        sortArrayQuestions[i] = index;
    }
}

// shows a message the Correct or Incorrect text after clicking the answer 
function confirmAnswer() {
    var timeOut = 3;
    var timeFooter;
    var footerQuestionEl = document.querySelector(".question-footer");

    timeFooter = setInterval(function () { 
        if (timeOut > 1) {
            timeOut--;
        } else {
            //once three seconds is over, make the question-footer hide again
            footerQuestionEl.setAttribute("style", "display: none;"); 
            clearInterval(timeFooter);
        }
    }, 1000);
}

function initQuestion(currentSortArrayIndex) {
    // remove the current elements inside boxEl except for H1
    // then dynamically create a list for the button answers
    var ul;
    var li;
    var button;
    var buttonOld;
    var footerQuestionEl;
    var footerHeader;
    var listClass = 0;

    // replace header with question and move choices into a separate array
    currentQuestionIndex = sortArrayQuestions[currentSortArrayIndex];
    questionEl.textContent = questionArray[currentQuestionIndex].question;
    choiceArray = [
        questionArray[currentQuestionIndex].choice1,
        questionArray[currentQuestionIndex].choice2,
        questionArray[currentQuestionIndex].choice3,
        questionArray[currentQuestionIndex].choice4
    ];

    if (currentSortArrayIndex === 0) {
        // this handles the initial creation of answer buttons
        // remove text-container and add buttons for choices
        boxEl.removeChild(textEl);
        boxEl.setAttribute("style", "text-align: left;");

        ul = document.createElement("ul");
        ul.setAttribute("id", "choices");
        boxEl.appendChild(ul);

        // create 'footer' to show if answer is correct or not
        footerQuestionEl = document.createElement("div");
        footerQuestionEl.setAttribute("class", "question-footer");
        footerQuestionEl.setAttribute("style", "display: none;");
        boxEl.append(footerQuestionEl);
    
        footerHeader = document.createElement("h2");
        footerHeader.setAttribute("class", "question-head");
        footerQuestionEl.append(footerHeader);
        
        // Create button for every choice
        // add a class for each so that I could get it again later to check it against questionArray[answer]
        choiceArray.forEach(function(element, index) {
            listClass = index + 1;
            li = document.createElement("li");
            button = document.createElement("button");
            li.setAttribute("class", "li-" + listClass);
            
            button.textContent = listClass + ". " + element + " ";
            button.setAttribute("class", listClass);
            
            ul.appendChild(li);
            li.appendChild(button);
        });
    } else {