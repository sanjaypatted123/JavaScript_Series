
// //just a function and execution flow example 
// let x=1;
// a();
// b();
// function a() {
//     let x=100;
//     console.log(x);
// }
// function b(){
//     let x=200;
//     console.log(x);
// }
// console.log(x);//output:
//                     //100
//                     //200
//                     //1

// //------------------------------------------//

// //add two numbers and return result

// function addTwoNum(){
//     let num1=parseFloat(prompt('enter number one'));
//     let num2=parseFloat(prompt('enter number two'));
//     let h2=document.createElement('h2');
//     let h3_1=document.createElement('h3');
//     let h3_2=document.createElement('h3');
//     document.body.append(h3_1);
//     document.body.append(h3_2);
//     document.body.append(h2);

//     let result=num1+num2;
//     console.log(result);
//     h3_1.innerHTML=`your num1 is ${num1}`;
//     h3_2.innerHTML=`your num2 is ${num2}`;

//     h2.innerHTML=`your result is ${result} `;
// }
// addTwoNum();

// //-------------------------------------------––--–--–––––––//


// //takes a name and logs a greeting

// let name=prompt('enter your name :');
// function greet(){
//     document.body.innerHTML=`<h2>Hello ${name} Good Morning!!!!</h2>`;

// }
// greet();

// //----------------------------------------------------------------//

// //returns a square of a input number

// let num=parseFloat(prompt('enter the number:'));

// function square(){
//     document.body.innerHTML=`<h2>Square of ${num} is ${num**2}</h2>`;
// }
// square();


// //------------------------------------------------------//



// //check even or odd

// function evenOrOdd(num){
//     return num%2===0;

// }
// console.log(evenOrOdd(4));

// //-----------------------------------------//

// //takes array and returns sum of its elements

// function arrSum(){
//     let inp=prompt('enter values by comma separation:');
//     let arr=inp.split(',').map(Number);

//     let sum=arr.reduce(function(acc,curr){
//         acc=acc+curr;
        
//         return acc;
//         },0);
//     console.log('your sum is ',sum );
//     }
// arrSum();

// //so here reduce method is used
// //it takes two arguments acc(accumulator) and curr(current)  
// //the syntax of reduce is:
// variable.reduce(function(acc,curr){
//     //code part
// },initialValue);


//giving the largest number in a array

function largestNumber(){
    let inp=prompt('enter the numbers by comma separation:');
    let arr=inp.split(',').map(Number);

    let larg=arr.reduce(function(acc,curr){
        if (curr > acc) {
            return curr;
        } else {
            return acc;
        }
        
    },0);
    console.log(larg);
}
largestNumber();
