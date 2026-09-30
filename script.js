//1. Using .then and .catch

//Make an http request to API
//fetch() returns a Promise, stored in userPromise

//const userPromise=fetch("https://jsonplaceholder.typicode.com/users");

//Display the Promise in the console

//console.log(userPromise);

//Handles the Promise using .then and .catch

//userPromise
//Converting the JSON response to JavaScript value

//    .then(response=>response.json())

//Log the array of user objects to the console

//    .then(users=>console.log(users))

//Handles the error

//    .catch(error=>console.log(error));




//2. Using async/await

//Create a async function to fetch data

//async function fetchData(){
//    try{

        //Make an HTTP request to API. await wait for the API response before continuing

//        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        
//Converts JSON response to JavaScript value
//        const data=await response.json();

//Log the array of objects to the console
//        console.log(data);

//Handles the error that occurs in the try block
//    }catch(error){
//        console.log(error);
//    }

//Call the function to execute the code

//}fetchData();
