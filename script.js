// Problem 1
function grade(mark) {
    if (mark >= 80) {
        return "A+";
    } else if (mark >= 70 && mark <= 79) {
        return "A";
    } else if (mark >= 60 && mark <= 69) {
        return "A-";
    } else if (mark >= 50 && mark <= 59) {
        return "B";
    } else if (mark >= 40 && mark <= 49) {
        return "C";
    } else if (mark >= 33 && mark <= 39) {
        return "D";
    } else if (mark >= 0 && mark <= 32) {
        return "F";
    } else {
        return "Invalid";
    }
}

function calculateGrade() {
    const input = document.getElementById("input-1").value;
    const solution = document.getElementById("solution-1");
    const mark = parseFloat(input);

    if (!isNaN(mark)) {
        const gradeResult = grade(mark);
        solution.innerText = "Grade: " + gradeResult;
    } else {
        solution.innerText = "Invalid input.";
    }
}


// Problem 2
const findOddOrEven = () => {
    const input = document.getElementById("input-2").value;
    const solution = document.getElementById("solution-2");
    const num = parseInt(input);

    if (num % 2 == 0) {
        solution.innerText = "This number " + num + " is Even.";
    } else {
        solution.innerText = "This number " + num + " is Odd.";
    }
};


// Problem 3
const sortArray = () => {
    let arr = [17, 3, 10, 5, 8, 15, 2, 14, 20, 13, 7, 16, 1, 9, 12, 4, 19, 6, 11, 18];
    const question = document.getElementById("question-3");
    const solution = document.getElementById("solution-3");

    question.innerText = "Unsorted Array: " + arr;
    arr.sort((a, b) => a - b)
    solution.innerText = "Sorted Array: " + arr;
}
sortArray();


// Problem 4
const findLeapYear = () => {
    const year = document.getElementById("input-4").value;
    const solution = document.getElementById("solution-4");

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        solution.innerText = year + " is a Leap Year."
    } else {
        solution.innerText = year + " is not a Leap Year."
    }
}


// Problem 5
const findDivisible = () => {
    solution = document.getElementById("solution-5");

    let arr = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i)
        }
    }
    
    solution.innerText = "Answer: "+ arr;
}
findDivisible();


// Problem - 6
const findLongestName = () => {    
    const question = document.getElementById("question-6");
    const solution = document.getElementById("solution-6");
    const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
    let longestName = "";

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length > longestName.length) {
            longestName = friends[i];
        }
    }

    question.innerText = "Name's Array: " + friends;
    solution.innerText = "The largest name is: " + longestName;
}
findLongestName();


// Problem - 7
const findUniqueNumbers = () => {
    const question = document.getElementById("question-7");
    const solution = document.getElementById("solution-7");
    let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

    const findUnique = (arr) => {
        return arr.filter((val, idx) => arr.indexOf(val) == idx);
    }

    question.innerText = "Given Array: " + numbers;
    solution.innerText = "Unique Array: " + findUnique(numbers);
}
findUniqueNumbers();


// Problem - 8
const findLargestNum = () => {
    const question = document.getElementById("question-8");
    const solution = document.getElementById("solution-8");
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    question.innerText = "Given Array: " + numbers;
    solution.innerText = "Largest Number: " + largest;
}
findLargestNum();


// Problem - 9
const findSavings = () => {
    const arrInput = document.getElementById("input-91").value;
    const arr = arrInput.split(",").map(item => parseFloat(item.trim()));
    const num = parseFloat(document.getElementById("input-92").value.trim());
    const solution = document.getElementById("solution-9");
    let sum = 0;

    if (isNaN(num) || arr.some(isNaN)) {
        solution.innerText = "invalid input";
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3000) {
            sum += arr[i] - (20 / 100 * arr[i]);
        } else {
            sum += arr[i];
        }
    }

    let savings = sum - num;

    if (savings >= 0) {
        solution.innerText = "Shahed's Savings: " + savings.toFixed(2);
    } else if (savings < 0) {
        solution.innerText = "earn more";
    } else {
        solution.innerText = "invalid input";
    }
}