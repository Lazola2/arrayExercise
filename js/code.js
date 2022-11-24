// Please create an array with the following elements:: 4, 6, 8, 9, 11, 14
let arrNumbers = [4, 6, 8, 9, 11, 14];

// enter a space in the console
console.log(`\nArray: [${arrNumbers}]`);

// Display the size of the array on the console.
console.log(`Array size: ${arrNumbers.length}`)

// Display the first element.
console.log(`First element: ${arrNumbers[0]}`)

// Display only the even elements from an array.
let sNumbers = '';
arrNumbers.forEach(number => {
    if (number % 2 === 0) sNumbers += `${number}  `;
})
console.log(`Even numbers: ${sNumbers}`);

// If the number 9 is found in an array, display "It does" to the console, including its position.
if (arrNumbers.includes(9))
    console.log(`Nine was found at index: ${arrNumbers.indexOf(9)}`);