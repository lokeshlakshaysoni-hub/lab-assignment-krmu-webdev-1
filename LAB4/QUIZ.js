var questions = [
    "What is the capital of France?",
    "How many continents are there on Earth?",
    "Which language is primarily used for web development? (js, python, java)",
    "What is 12 - 4?",
    "Which tag is used to display images in HTML? (img/div/span)"
];

var answers = [
    "paris",
    "7",
    "js",
    "8",
    "img"
];

var score = 0;
for (var i = 0; i < questions.length; i++) { 
    var userAnswer = prompt(questions[i]);
    if (userAnswer === null) {
        alert("Quiz stopped.");
        break;
    }
    userAnswer = userAnswer.toLowerCase().trim();
    if (userAnswer === answers[i]) {
        alert("✅ Correct!");
        score++;
    } else {
        alert("❌ Wrong! Correct answer is: " + answers[i]);
    }
}
alert("🎯 Your final score: " + score + " / " + questions.length);