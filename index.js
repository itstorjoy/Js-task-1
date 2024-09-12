//Q.1:
//Create a program that stores your favorite book's title, the year it was published,
//and whether you've read it or not. Print out a sentence using these variables, e.g.,
//"My favorite book is '1984', published in 1949, and I have read it: true."

let bookTitle = "1984";
let publicationYear = 1949;
let haveRead = true;

// Print out the sentence using the variables
console.log("My favorite book is '" + bookTitle + "', published in " + publicationYear + ", and I have read it: " + haveRead + ".");


//Ans: Index.html -> click right -> go to console -> the printed value you can see there :)


//Q3:
//Write a program that asks the user for their age and tells them whether they are a child
//(under 12), a teenager (13-19), an adult (20-64), or a senior (65 and older) using if-else if-else.

let age = prompt("Enter your age:");

if (age < 12) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else if (age >= 20 && age <= 64) {
    console.log("You are an adult.");
} else if (age >= 65) {
    console.log("You are a senior.");
} else {
    console.log("Invalid age entered.");
}


//Ans: Index.html -> click right -> go to console -> enter your age -> the printed value you can see there :)

//Q6: Problem: Write a program that creates an array of your favorite movies. Add two more movies to the list using push,
//remove the first movie using shift, and then use map to print each movie title in uppercase.

let favoriteMovies = ["Pokemon", "DragonBallZ", "Xman"];

// Two movies added
favoriteMovies.push("Wolverin", "Charle chaplin");

// First movie removed using shift
favoriteMovies.shift();

// Map will make the title uppercase
favoriteMovies.map(function(movie) {
    console.log(movie.toUpperCase());
});

//Q5: Problem: Write a program that prints out the multiplication table for a given number using a for loop. 
//Use a while loop to sum all numbers from 1 to 100. Finally, use a do...while loop to count down from 10 to 1.

//Multiplication :)
let number = 5; 
console.log("Multiplication Table for " + number + ":");
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

//Sum 1 to 100 using a while loop
let sum = 0;
let i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
console.log("Sum from 1 to 100 is: " + sum);

// Count down from 10 to 1 using a do...while loop
let count = 10;
console.log("Counting down:");
do {
    console.log(count);
    count--;
} while (count > 0);


//


