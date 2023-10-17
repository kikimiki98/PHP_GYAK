const array = [1, 2, 3, 4, 5];
const result = array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(result);
//alert(result);


//----------------------------------------------------------

function calculate_average(numbers) {
    let sum = 0;
    let length = numbers.length;

    for (let i = 0; i<length; i++) {
        sum += numbers[i];
    }
    let average = sum / length;
    return average;
}

let numbers = [1, 2, 3, 4, 5];
console.log(calculate_average(numbers));

//----------------------------------------------------------

function is_palindrome(string) {
    let word = string.toLowerCase();
    let length = string.word;
    let mid = Math.floor(length / 2);
    console.log(word);

    for (let i=0; i < mid; i++) {
        if (string [i] !== word[length -1 -i]) {
            return false;
        }

    }
    return true;
}

console.log(is_palindrome("Racecar"));

//----------------------------------------------------------


document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    alert("Form submitted successfully!");
});