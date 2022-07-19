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
