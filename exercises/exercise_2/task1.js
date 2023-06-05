// let name = "Mehboob Alam";
// // console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// // In slice method to divided inot two group of string
// console.log(name.slice(2, 8));
// console.log(name.replace("Alam", "Ali"));
// let name1 = "Abrar";
// console.log(name.concat(" is a Friend of ", name1, " Agree ?"));
// let name2 = "   Usama  ";
// console.log(name2.trim());
// Array Destructuring method
// let stduent1 = ["Abrar", "Ashraf", "Sajjad", "Jaffer", "Mehboob", "Karamat"];
// let stduent2 = [];
// for (let stduent of stduent1) {
//   stduent2.push(stduent.toUpperCase());
// }
// console.log(stduent2);
// const student = ["Abrar", "Ashraf", "Sajjad", "Jaffer", "Mehbbo", "Karamat"];

// console.log(student);
// let [student1, student2, student3, student4, student5, student6] = student;
// console.log("Student name is :", student1);
// console.log("Student name is :", student2);
// console.log("Student name is :", student3);
// console.log("Student name is :", student4);
// console.log("Student name is :", student5);
// console.log("Student name is :", student6);

//Spread  operator
// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [7, 8, 9, 10, 11, 12];
// const newArray = [...array1, ...array2];
// console.log(newArray);

// Object Destructuring
// const student = {
//   Name: "Mehboob Ali",
//   FatherName: "Muhammad Ali",
//   Age: "22",
//   From: "Ghanche",
// };

// const { Name, FatherName, Age, From } = student;
// console.log(student);

//restPropertie
// const { Name, FatherName, ...rest } = student;
// console.log(rest);

// object inside array

// const students = [
//   {
//     Name: "Mehboob Ali",
//     FatherName: "Muhammad Ali",
//     Age: "22",
//     From: "Ghanche",
//   },
//   {
//     Name: "Abrar Haider",
//     FatherName: "Ghulam Haider",
//     Age: "25",
//     From: "Ghanche",
//   },
//   {
//     Name: "Abrar Ali",
//     FatherName: "Haider Ali",
//     Age: "23",
//     From: "Ghanche",
//   },
//   {
//     Name: "Usama Hameed",
//     FatherName: "Abdul Hameed",
//     Age: "24",
//     From: "Skardu",
//   },
// ];
// for (let student of students) {
//   console.log(student);
// }

// let obj = { x: 1, y: 2 };
// let obj1 = [obj];
// let obj2 = [...obj];
// console.log(obj1);
// console.log(obj2);
// Accessing Elements:

// Indexing: Allows you to access individual elements in an array by their position or index. Typically, you use square brackets notation like array[index] to retrieve a specific element.
// Modifying Arrays:

// Insertion: These methods allow you to add elements to an array.
// Deletion: These methods allow you to remove elements from an array.
// Updating: These methods allow you to change the value of an element at a specific index.
// Searching and Filtering:

// Linear Search: Iterates through the array to find the position of a specific element.
// Binary Search: Requires a sorted array and efficiently finds the position of a specific element.
// Filter: Creates a new array by selecting elements that satisfy a given condition.
// Sorting:

// Sorting: Reorders the elements in an array according to a specific criteria (e.g., ascending or descending order).
// Transformation:

// Map: Applies a given function to each element of an array and returns a new array of the transformed values.
// Reduce: Computes a single value by iteratively applying a function to the elements of an array.
// Aggregating:

// Length: Returns the number of elements in an array.
// Sum: Calculates the sum of all the elements in an array.
// Average: Computes the average value of the elements in an array.
// Max/Min: Finds the maximum or minimum value in an array.