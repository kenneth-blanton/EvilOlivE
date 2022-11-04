var word = document.getElementById("word");
var answer = document.getElementById("answer");

const highScores = JSON.parse(sessionStorage.getItem('highScores')) || [];

const check = (str) => {
    event.preventDefault();

    str = word.value.replace(/\s/g, "").toLowerCase();

    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(str)
    
    if(str === '' && highScores.length > 0){
        answer.innerHTML = `Type something<br>Your high score is ${highScores[0]}`
        return console.log(false);
    }
    if(str === ''){
        answer.innerHTML = `Type something`
        return console.log(false);
    } if (str == newString && highScores[0] > highScores [1]){
        answer.innerHTML = `It's a palindrome but not your best ${highScores[0]}`
        return console.log(true);
    } 
    if (str == newString) {
        highScores.push(word.value.length);
        highScores.sort(function(a, b) {
        return b - a;
        });
        highScores.splice(2);
        console.log(highScores);

        sessionStorage.setItem('highScores', JSON.stringify(highScores));
        
        answer.innerHTML = `Success!<br>Your high score is ${highScores[0]}`;
        return console.log(true);
    } if(str !== newString && highScores.length > 0) {
        answer.innerHTML = `Not a palindrome. Try again<br>Your high score is ${highScores[0]}`
        return console.log(false);
    } else{
        answer.innerHTML = `Not a palindrome. Try again`
        return console.log(false);
    }
}

// let array = [];
// let reverse = [];

// function check() {
//     event.preventDefault();
    
//     let value = word.value.replace(/\s/g, "");
//     let b = value;
//     console.log(b);

//     for (let i = 0; i < b.length; i++) {
//         const element = b[i];
//         array.push(element);
//     }

//     for (let n = array.length -1; n >= 0; n--) {
//         const element = array[n];
//         reverse.push(element);
//     }

//     let original = array.join("");
//     let answer = reverse.join("");
//     array = [];
//     reverse = [];

//     if (original === answer) {
//         return console.log(true);
//     } else {
//         return console.log(false);
//     }
// }

// check();