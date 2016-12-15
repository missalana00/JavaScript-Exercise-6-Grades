
// Array of scores given :

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// Ceate an object of grade placeholders for how many
// of each grade there are, based on the following parameters :

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A


var grades = {

    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
};

// Create a for loop to iterate through the array of scores :

for (var i = 0; i < scores.length; i++) {

// Using 'if else if' to tell program to add 1
// to what was already there (++) in the object's property values :

    if (scores[i] >= 91) {
        grades.A++
}   else if (scores[i] >= 81) {
        grades.B++
}   else if (scores[i] >= 71) {
        grades.C++
}   else if (scores[i] >= 61) {
        grades.D++
}   else {
        grades.F++
        }
}

// Console logging the output :

console.log(grades);


// Console logging the highest grade in the given array of scores using
// the Math.max() function, which returns the largest of zero or more numbers

console.log("The highest grade in the class is a " + (Math.max.apply(null, scores)));

// Console logging the lowest grade in the given array of scores using
// the Math.min() function, which returns the smallest of zero or more numbers

console.log("The lowest grade in the class is a " + (Math.min.apply(null, scores)));
