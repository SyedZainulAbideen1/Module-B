var output = document.getElementById("output");

// =========================================
// Q1: Basic Mark Sheet
// =========================================

output.innerHTML += "<h2>Q1: Mark Sheet</h2>";

var studentName = "Zain";

var english = 80;
var math = 75;
var science = 90;

var totalMarks = 300;

var obtainedMarks = english + math + science;

var percentage = (obtainedMarks / totalMarks) * 100;

var grade;

if (percentage >= 80) {
    grade = "A+";
}
else if (percentage >= 70) {
    grade = "A";
}
else if (percentage >= 60) {
    grade = "B";
}
else {
    grade = "Fail";
}

output.innerHTML += "Student Name: " + studentName + "<br>";
output.innerHTML += "English: " + english + "<br>";
output.innerHTML += "Math: " + math + "<br>";
output.innerHTML += "Science: " + science + "<br>";
output.innerHTML += "Obtained Marks: " + obtainedMarks + "<br>";
output.innerHTML += "Percentage: " + percentage + "%<br>";
output.innerHTML += "Grade: " + grade + "<hr>";


// =========================================
// Q2: Manual Reduce
// =========================================

output.innerHTML += "<h2>Q2: Manual Reduce</h2>";

function myReduce(arr, callback, initialValue) {

    var accumulator;
    var startIndex;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        accumulator = arr[0];
        startIndex = 1;
    }

    for (var i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }

    return accumulator;
}

var numbers = [1, 2, 3, 4];

var sum = myReduce(numbers, function(total, current) {
    return total + current;
}, 0);

output.innerHTML += "Array Sum: " + sum + "<hr>";


// =========================================
// Q3: Reverse Array
// =========================================

output.innerHTML += "<h2>Q3: Reverse Array</h2>";

var arr = [1, 2, 3, 4, 5];

var start = 0;
var end = arr.length - 1;

while (start < end) {

    var temp = arr[start];

    arr[start] = arr[end];

    arr[end] = temp;

    start++;
    end--;
}

output.innerHTML += "Reversed Array: " + arr + "<hr>";


// =========================================
// Q4: Merge Arrays
// =========================================

output.innerHTML += "<h2>Q4: Merge Arrays</h2>";

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var merged = [];

for (var i = 0; i < arr1.length; i++) {
    merged[merged.length] = arr1[i];
}

for (var j = 0; j < arr2.length; j++) {
    merged[merged.length] = arr2[j];
}

output.innerHTML += "Merged Array: " + merged + "<hr>";


// =========================================
// Q5: Reverse Words
// =========================================

output.innerHTML += "<h2>Q5: Reverse Words</h2>";

var sentence = "hello world";

var words = sentence.split(" ");

var reversedSentence = "";

for (var i = words.length - 1; i >= 0; i--) {

    reversedSentence += words[i];

    if (i !== 0) {
        reversedSentence += " ";
    }
}

output.innerHTML += "Original Sentence: " + sentence + "<br>";
output.innerHTML += "Reversed Sentence: " + reversedSentence + "<hr>";


// =========================================
// Q6: Hoisting
// =========================================

output.innerHTML += "<h2>Q6: Hoisting</h2>";

output.innerHTML += "<b>var Example:</b><br>";

console.log(a);

var a = 10;

output.innerHTML += "var is hoisted and gives undefined before assignment.<br><br>";

output.innerHTML += "<b>Function Example:</b><br>";

hello();

function hello() {
    output.innerHTML += "Hello World Function Executed<br>";
}

output.innerHTML += "<hr>";


// =========================================
// Q7: Login Hoisting Example
// =========================================

output.innerHTML += "<h2>Q7: Login Example</h2>";

function login() {

    if (isAdmin) {
        output.innerHTML += "Welcome Admin<br>";
    }

    var isAdmin = true;
}

login();

output.innerHTML += "Problem: var hoisting can break logic because variable becomes undefined first.<hr>";


// =========================================
// Q8: Dynamic Email Template
// =========================================

output.innerHTML += "<h2>Q8: Dynamic Email Template</h2>";

function createEmail(name, orderId) {

    var email = `
Hello ${name}, <br><br>

Your order has been confirmed. <br>

Order ID: ${orderId} <br><br>

Thank you for shopping with us.
`;

    return email;
}

var emailResult = createEmail("Zain", 12345);

output.innerHTML += emailResult;

output.innerHTML += "<hr>";


// =========================================
// Q9: Performance Issue
// =========================================

output.innerHTML += "<h2>Q9: Performance Issue</h2>";

var finalText = "";

for (var i = 0; i < 5; i++) {

    finalText += `
User Number: ${i} <br>
Welcome to our website. <br><br>
`;
}

output.innerHTML += finalText;

output.innerHTML += "Using template literals inside very large loops can slow performance because new strings are created repeatedly.<br>";