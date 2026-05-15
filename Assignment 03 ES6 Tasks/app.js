// 1. Global Scope

var userName = "Syed Zain ul Abideen";
let userAge = 20;
const country = "Pakistan";

console.log(userName);
console.log(userAge);
console.log(country);


// 2. Function Scope

function showData() {
    var city = "Karachi";
    let area = "North Nazimabad";
    const zipCode = 75850;

    console.log(city);
    console.log(area);
    console.log(zipCode);
}

showData();

// console.log(city);
// console.log(area);
// console.log(zipCode);


// 3. Block Scope

if (true) {
    var game = "Free Fire";
    let rank = "Heroic";
    const level = 70;
}

console.log(game);

// console.log(rank);
// console.log(level);


// 4. Hoisting with var

console.log(player);

var player = "Syed Zain ul Abideen";


// 5. Hoisting with let and const

// console.log(user);
// let user = "Syed Zain ul Abideen";

// console.log(countryName);
// const countryName = "Pakistan";


// 6. Re-declaration

var name = "Syed";
var name = "Zain";

console.log(name);

// let age = 20;
// let age = 25;

// const cityName = "Karachi";
// const cityName = "Lahore";


// 7. Re-assignment

var score = 50;
score = 90;

console.log(score);

let marks = 70;
marks = 100;

console.log(marks);

// const total = 200;
// total = 500;


// 8. Temporal Dead Zone (TDZ)

// {
//     console.log(student);
//     let student = "Syed Zain ul Abideen";
// }

// {
//     console.log(id);
//     const id = 101;
// }


// 9. When to use var, let, const

var oldVariable = "Old JavaScript";

let newScore = 10;
newScore = 20;

const pi = 3.14;

console.log(oldVariable);
console.log(newScore);
console.log(pi);


// 10. String Interpolation

let firstName = "Syed";
let middleName = "Zain ul";
let lastName = "Abideen";

let fullName = `${firstName} ${middleName} ${lastName}`;

console.log(fullName);


// 11. Multi-line Strings

let address = `
House No 123
North Nazimabad
Karachi
Pakistan
`;

console.log(address);


// 12. Simple Expressions

let num1 = 10;
let num2 = 20;

let result = `The sum of ${num1} and ${num2} is ${num1 + num2}`;

console.log(result);


// 13. Function Calls

function multiply(a, b) {
    return a * b;
}

let multiplyResult = `Multiplication Result: ${multiply(5, 4)}`;

console.log(multiplyResult);


// 14. Creating a Tagged Template

function showMessage(strings) {
    console.log(strings);
}

showMessage`Hello Syed Zain ul Abideen`;


// 15. Formatting

function upperCase(strings) {
    return strings[0].toUpperCase();
}

let text = upperCase`hello javascript`;

console.log(text);


// 16. Conditional Logic

let currentHour = 10;

let message = `${currentHour < 12 ? "Good Morning" : "Good Afternoon"}`;

console.log(message);


// 17. Loops within Template Literals

let shoppingList = ["Milk", "Bread", "Eggs"];

let htmlList = `
<ul>
    ${shoppingList.map(item => `<li>${item}</li>`).join("")}
</ul>
`;

console.log(htmlList);


// 18. Escaping Backticks

let backtickString = `This is a backtick: \``;

console.log(backtickString);


// 19. Nested Template Literals

let table = `
<table>
    ${`
    <tr>
        <td>Name</td>
        <td>Syed Zain ul Abideen</td>
    </tr>
    `}
</table>
`;

console.log(table);


// 20. Simple Condition

let age = 20;

let canVote = age >= 18 ? "Yes" : "No";

console.log(canVote);


// 21. Even or Odd

let number = 7;

let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";

console.log(evenOrOdd);


// 22. Grade Evaluation

let scoreValue = 85;

let grade = scoreValue >= 90 ? "A"
    : scoreValue >= 80 ? "B"
    : scoreValue >= 70 ? "C"
    : scoreValue >= 60 ? "D"
    : "F";

console.log(grade);


// 23. Login Status

let isLoggedIn = true;

let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";

console.log(statusMessage);


// 24. Discount Eligibility

let isMember = true;
let purchaseAmount = 150;

let discount = isMember && purchaseAmount > 100
    ? purchaseAmount * 0.10
    : 0;

console.log(discount);


// 25. Determine Max Value

function maxValue(a, b) {
    return a > b ? a : b;
}

console.log(maxValue(10, 20));


// 26. Greeting Message

function greet(name) {
    return name ? `Hello, ${name}!` : "Hello, guest!";
}

console.log(greet("Syed Zain ul Abideen"));
console.log(greet());


// 27. Mapping Values

let numbers = [1, 2, 3, 4, 5];

let updatedNumbers = numbers.map(num =>
    num % 2 === 0 ? num * 2 : num * 3
);

console.log(updatedNumbers);


// 28. Filtering Values

let words = ["Ali", "Ahmed", "Zain", "Huzaifa", "Ayan"];

let filteredWords = words.filter(word =>
    word.length > 3 ? true : false
);

console.log(filteredWords);


// 29. Copying an Array

let originalArray = [1, 2, 3, 4];

let copiedArray = [...originalArray];

console.log(originalArray);
console.log(copiedArray);
console.log(originalArray === copiedArray);


// 30. Merging Arrays

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = [...array1, ...array2];

console.log(mergedArray);


// 31. Adding Elements to an Array

let numberList = [2, 3, 4];

let updatedList = [1, ...numberList, 5];

console.log(updatedList);


// 32. Copying an Object

let originalObject = {
    name: "Syed Zain ul Abideen",
    age: 20
};

let copiedObject = { ...originalObject };

console.log(originalObject);
console.log(copiedObject);
console.log(originalObject === copiedObject);


// 33. Merging Objects

let object1 = {
    name: "Syed",
    age: 20
};

let object2 = {
    age: 25,
    city: "Karachi"
};

let mergedObject = {
    ...object1,
    ...object2
};

console.log(mergedObject);


// 34. Updating Object Properties

let user = {
    name: "Syed Zain ul Abideen",
    age: 20,
    email: "oldemail@gmail.com"
};

let updatedUser = {
    ...user,
    email: "newemail@gmail.com",
    address: "Karachi"
};

console.log(updatedUser);


// 35. Passing Array Elements as Arguments

function sum(a, b, c) {
    return a + b + c;
}

let nums = [10, 20, 30];

console.log(sum(...nums));


// 36. Combining Multiple Arrays

function combineArrays(...arrays) {
    return [].concat(...arrays);
}

console.log(combineArrays([1, 2], [3, 4], [5, 6]));


// 37. Rest Parameter with Spread Operator

function multiply(firstNumber, ...otherNumbers) {
    return otherNumbers.map(num => firstNumber * num);
}

console.log(multiply(2, 1, 2, 3, 4));


// 38. Spread Operator with Nested Structures

let nestedArray = [[1, 2], [3, 4]];

let shallowCopy = [...nestedArray];

shallowCopy[0][0] = 100;

console.log(nestedArray);
console.log(shallowCopy);


// 39. Sum Function

function totalSum(...numbersData) {
    return numbersData.reduce((total, num) => total + num, 0);
}

console.log(totalSum(1, 2, 3));
console.log(totalSum(10, 20, 30, 40));


// 40. Average Function

function average(...values) {
    let total = values.reduce((sum, value) => sum + value, 0);

    return total / values.length;
}

console.log(average(10, 20, 30));
console.log(average(5, 10, 15, 20));


// 41. First and Rest

let valuesArray = [10, 20, 30, 40, 50];

let [first, ...rest] = valuesArray;

console.log(first);
console.log(rest);


// 42. Skip and Rest

let colors = ["red", "green", "blue", "yellow", "black"];

let [, , ...remainingColors] = colors;

console.log(remainingColors);


// 43. Basic Object Destructuring

let person = {
    name: "Syed Zain ul Abideen",
    ageValue: 20,
    email: "syed@gmail.com",
    address: "Karachi"
};

let {
    name: personName,
    email,
    ...others
} = person;

console.log(personName);
console.log(email);
console.log(others);


// 44. Nested Destructuring

let student = {
    id: 101,
    studentName: "Syed",
    grades: "A",
    info: {
        age: 20,
        major: "Computer Science"
    }
};

let {
    id,
    studentName,
    info: { major },
    ...studentRest
} = student;

console.log(id);
console.log(studentName);
console.log(major);
console.log(studentRest);


// 45. Filter Even Numbers

function filterEven(...numbersList) {
    return numbersList.filter(num => num % 2 === 0);
}

console.log(filterEven(1, 2, 3, 4, 5, 6));


// 46. Combine and Sort Arrays

function combineAndSort(...arrays) {
    return [].concat(...arrays).sort((a, b) => a - b);
}

console.log(combineAndSort([5, 2], [9, 1], [7, 3]));


// 47. Basic Array Destructuring

let fruits = ["apple", "banana", "cherry"];

let [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);


// 48. Skipping Elements

let colorNames = ["red", "green", "blue", "yellow"];

let [primaryColor, , tertiaryColor] = colorNames;

console.log(primaryColor);
console.log(tertiaryColor);


// 49. Rest Operator

let numbersArray = [1, 2, 3, 4, 5];

let [firstNumber, ...remainingNumbers] = numbersArray;

console.log(firstNumber);
console.log(remainingNumbers);


// 50. Basic Object Destructuring

let userData = {
    fullName: "Syed Zain ul Abideen",
    userAge: 20,
    city: "Karachi"
};

let {
    fullName: userFullName,
    
    city
} = userData;

console.log(userFullName);
console.log(userAge);
console.log(city);

// 51. Renaming Variables

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2024
};

let {
    make: carMake,
    model: carModel,
    year: carYear
} = car;

console.log(carMake);
console.log(carModel);
console.log(carYear);


// 52. Default Values

let settings = {
    theme: "dark"
};

let {
    theme,
    language = "English"
} = settings;

console.log(theme);
console.log(language);


// 53. Array of Arrays

let nestedNumbers = [[1, 2], [3, 4], [5, 6]];

let [[a], [b], [c]] = nestedNumbers;

console.log(a);
console.log(b);
console.log(c);


// 54. Object within an Object

let profile = {
    username: "syedzain",
    details: {
        emailAddress: "syed@gmail.com",
        userAddress: "Karachi"
    }
};

let {
    username,
    details: {
        emailAddress,
        userAddress
    }
} = profile;

console.log(username);
console.log(emailAddress);
console.log(userAddress);


// 55. Mix of Arrays and Objects


let data = {
    dataId: 1,
    info: [
        { personName: "Alice" },
        { personAge: 25 }
    ]
};

let {
    dataId,
    info: [
        { personName: dataPersonName },
        { personAge }
    ]
} = data;

console.log(dataId);
console.log(dataPersonName);
console.log(personAge);


// 56. Array Parameters

function printCoordinates([x, y]) {
    console.log(x);
    console.log(y);
}

printCoordinates([10, 20]);
printCoordinates([50, 100]);


// 57. Object Parameters

function displayUser({ userName, age }) {
    console.log(userName);
    console.log(age);
}

displayUser({
    userName: "Syed",
    age: 20
});


// 58. List Property Names

let book = {
    title: "JavaScript",
    author: "Ali",
    year: 2025
};

let propertyNames = Object.keys(book);

console.log(propertyNames);


// 59. Count Properties

let studentData = {
    name: "Syed",
    age: 20,
    grade: "A",
    school: "ABC School"
};

let propertyCount = Object.keys(studentData).length;

console.log(propertyCount);


// 60. Iterate Over Keys

let product = {
    name: "Laptop",
    price: 50000,
    category: "Electronics"
};

Object.keys(product).forEach(key => {
    console.log(key, product[key]);
});


// 61. List Property Values

let movie = {
    title: "Avengers",
    director: "Marvel",
    year: 2025,
    genre: "Action"
};

let movieValues = Object.values(movie);

console.log(movieValues);


// 62. Sum Values

let scores = {
    math: 90,
    science: 85,
    english: 88
};

let totalMarks = Object.values(scores).reduce((sum, value) => sum + value, 0);

console.log(totalMarks);


// 63. Iterate Over Values

let userInfo = {
    username: "syedzain",
    email: "syed@gmail.com",
    location: "Karachi"
};

Object.values(userInfo).forEach(value => {
    console.log(value);
});


// 64. List Entries

let carDetails = {
    make: "Toyota",
    model: "Corolla",
    year: 2024
};

let entries = Object.entries(carDetails);

console.log(entries);


// 65. Convert Object to Array

let personData = {
    firstName: "Syed",
    lastName: "Zain",
    age: 20
};

let personEntries = Object.entries(personData);

console.log(personEntries);


// 66. Iterate Over Entries

let appSettings = {
    theme: "dark",
    notifications: true,
    privacy: "high"
};

Object.entries(appSettings).forEach(([key, value]) => {
    console.log(key, value);
});


// 67. Filter Keys

let inventory = {
    apples: 5,
    bananas: 15,
    oranges: 20,
    grapes: 8
};

let filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);

console.log(filteredKeys);


// 68. Transform Values

let temperatures = {
    morning: 20,
    afternoon: 30,
    evening: 25
};

let fahrenheitTemps = Object.fromEntries(
    Object.entries(temperatures).map(([key, value]) => {
        return [key, (value * 9/5) + 32];
    })
);

console.log(fahrenheitTemps);


// 69. Key-Value Swap

let roles = {
    admin: "Ali",
    editor: "Ahmed",
    viewer: "Zain"
};

let swappedRoles = Object.fromEntries(
    Object.entries(roles).map(([key, value]) => [value, key])
);

console.log(swappedRoles);


// 70. Filter and Map

let numsList = [1,2,3,4,5,6,7,8,9,10];

function filterAndMap(array, filterFunction, mapFunction) {
    return array.filter(filterFunction).map(mapFunction);
}

let resultData = filterAndMap(
    numsList,
    num => num % 2 !== 0,
    num => num * num
);

console.log(resultData);


// 71. Sort and Reduce

let wordsArray = ["apple", "banana", "cherry", "date"];

function sortAndReduce(array, sortFunction, reduceFunction) {
    return array.sort(sortFunction).reduce(reduceFunction);
}

let combinedWords = sortAndReduce(
    wordsArray,
    (a, b) => a.localeCompare(b),
    (total, word) => total + word
);

console.log(combinedWords);


// 72. Simple Callback

function greetUser(name, callback) {
    let message = `Hello ${name}`;
    callback(message);
}

function printGreeting(message) {
    console.log(message);
}

greetUser("Syed Zain ul Abideen", printGreeting);


// 73. Asynchronous Callback

function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched successfully");
    }, 2000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData);


// 74. Simple Arrow Function

const add = (a, b) => a + b;

console.log(add(3, 5));


// 75. Arrow Function with Array Methods

let simpleNumbers = [1, 2, 3, 4, 5];

let squaredNumbers = simpleNumbers.map(num => num * num);

console.log(squaredNumbers);


// 76. Variable Scope

function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();


// 77. Closure

function createCounter() {
    let counter = 0;

    return function () {
        counter++;
        console.log(counter);
    };
}

let counter1 = createCounter();
let counter2 = createCounter();

counter1();
counter1();

counter2();
counter2();


// 78. Simple Default Parameters

function greet(name, message = "Hello") {
    console.log(`${message} ${name}`);
}

greet("Syed");
greet("Zain", "Welcome");


// 79. Default Parameters with Other Arguments

function calculateArea(width = 10, height = 5) {
    return width * height;
}

console.log(calculateArea());
console.log(calculateArea(20, 10));


// 80. Extra Practice Task

let practiceArray = [10, 20, 30, 40];

let doubledArray = practiceArray.map(value => value * 2);

console.log(doubledArray);


// 81. Array Find Method

let users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Syed Zain ul Abideen" },
    { id: 3, name: "Ahmed" }
];

let foundUser = users.find(user => user.id === 2);

console.log(foundUser);


// 82. Array Includes Method

let games = ["Free Fire", "PUBG", "Minecraft"];

let hasMinecraft = games.includes("Minecraft");

console.log(hasMinecraft);


// 83. Object Freeze

let account = {
    userName: "Syed",
    level: 70
};

Object.freeze(account);

// account.level = 100;

console.log(account);


// 84. Optional Chaining

let studentInfo = {
    name: "Syed Zain ul Abideen",
    address: {
        city: "Karachi"
    }
};

console.log(studentInfo?.address?.city);
console.log(studentInfo?.contact?.phone);


// 85. Nullish Coalescing Operator

let userInput = null;

let defaultValue = userInput ?? "Default Value";

console.log(defaultValue);


// 86. Array Every Method

let ages = [18, 20, 25, 30];

let allAdults = ages.every(age => age >= 18);

console.log(allAdults);


// 87. Array Some Method

let scoresList = [45, 60, 75, 90];

let hasPassingScore = scoresList.some(score => score >= 50);

console.log(hasPassingScore);


// 88. Array FindIndex Method

let numbersData = [5, 10, 15, 20, 25];

let foundIndex = numbersData.findIndex(num => num === 20);

console.log(foundIndex);


// 89. Array Flat Method

let nestedValues = [1, 2, [3, 4], [5, 6]];

let flatArray = nestedValues.flat();

console.log(flatArray);


// 90. Array FlatMap Method

let sentenceWords = ["hello world", "javascript es6"];

let splitWords = sentenceWords.flatMap(word => word.split(" "));

console.log(splitWords);


// 91. Set Object

let uniqueNumbers = new Set([1, 2, 2, 3, 4, 4, 5]);

console.log(uniqueNumbers);
console.log([...uniqueNumbers]);


// 92. Map Object

let userMap = new Map();

userMap.set("name", "Syed Zain ul Abideen");
userMap.set("age", 20);

console.log(userMap);
console.log(userMap.get("name"));


// 93. For...of Loop

let fruitsList = ["apple", "banana", "mango"];

for (let fruit of fruitsList) {
    console.log(fruit);
}


// 94. Symbol Data Type

let uniqueId = Symbol("id");

console.log(uniqueId);


// 95. Class in ES6

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

let studentOne = new Student("Syed Zain ul Abideen", 20);

studentOne.showData();


// 96. Class Inheritance

class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Developer extends Person {
    constructor(name, skill) {
        super(name);
        this.skill = skill;
    }

    showSkill() {
        console.log(`Skill: ${this.skill}`);
    }
}

let developer = new Developer("Syed Zain ul Abideen", "JavaScript");

developer.introduce();
developer.showSkill();


// 97. Promise Example

let promiseData = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise Resolved Successfully");
    } else {
        reject("Promise Rejected");
    }
});

promiseData
    .then(result => console.log(result))
    .catch(error => console.log(error));


// 98. Async and Await

function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("User Data Loaded");
        }, 2000);
    });
}

async function getUser() {
    let result = await fetchUser();
    console.log(result);
}

getUser();


// 99. Local Storage Example

localStorage.setItem("userName", "Syed Zain ul Abideen");

let savedName = localStorage.getItem("userName");

console.log(savedName);


// 100. JSON Parse and Stringify

let jsonObject = {
    name: "Syed Zain ul Abideen",
    age: 20,
    city: "Karachi"
};

let jsonString = JSON.stringify(jsonObject);

console.log(jsonString);

let parsedObject = JSON.parse(jsonString);

console.log(parsedObject);
