
//just a function and execution flow example 
let x=1;
a();
b();
function a() {
    let x=100;
    console.log(x);
}
function b(){
    let x=200;
    console.log(x);
}
console.log(x);//output:
                    //100
                    //200
                    //1

//------------------------------------------//

//add two numbers and return result

function addTwoNum(){
    let num1=parseFloat(prompt('enter number one'));
    let num2=parseFloat(prompt('enter number two'));
    let h2=document.createElement('h2');
    let h3_1=document.createElement('h3');
    let h3_2=document.createElement('h3');
    document.body.append(h3_1);
    document.body.append(h3_2);
    document.body.append(h2);

    let result=num1+num2;
    console.log(result);
    h3_1.innerHTML=`your num1 is ${num1}`;
    h3_2.innerHTML=`your num2 is ${num2}`;

    h2.innerHTML=`your result is ${result} `;
}
addTwoNum();

//-------------------------------------------––--–--–––––––//


//takes a name and logs a greeting

let name=prompt('enter your name :');
function greet(){
    document.body.innerHTML=`<h2>Hello ${name} Good Morning!!!!</h2>`;

}
greet();

//----------------------------------------------------------------//

//returns a square of a input number

let num=parseFloat(prompt('enter the number:'));

function square(){
    document.body.innerHTML=`<h2>Square of ${num} is ${num**2}</h2>`;
}
square();


//------------------------------------------------------//



//check even or odd

function evenOrOdd(num){
    return num%2===0;

}
console.log(evenOrOdd(4));

//-----------------------------------------//

//takes array and returns sum of its elements

function arrSum(){
    let inp=prompt('enter values by comma separation:');
    let arr=inp.split(',').map(Number);

    let sum=arr.reduce(function(acc,curr){
        acc=acc+curr;
        
        return acc;
        },0);
    console.log('your sum is ',sum );
    }
arrSum();

//so here reduce method is used
//it takes two arguments acc(accumulator) and curr(current)  
//the syntax of reduce is:
variable.reduce(function(acc,curr){
    //code part
},initialValue);


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

//to reverse a string 


function revString(inp){
    let rev='';
    for (let i =inp.length-1; i>=0; i--) {
        rev+=inp[i];    
    }
    console.log(`reversed string is: ${rev}`);


    

}
revString(prompt('enter a string'));


//timing functions in js 

//setTimeout: it just executes the function after specified time
//ex:
setTimeout(() => {
    console.log('three seconds passed');
}, 3000);

//setInterval:it executes the function evry time at what the time is specified
//like if you pass 2 seconds(i.e 2000 milliseconds) it logs msg every 2 seconds
//ex:
setInterval(() => {
    console.log('prints every 2 secobds')
}, 2000);

//example of counter function using setinterval:
let counter=0;
setInterval(() => {
    counter++;
    console.log('counter is :',counter);
}, 1000);


//double click in js
let btn2=document.getElementById('btn');
btn2.addEventListener('dblclick',function dblclick() {
    console.log('double click captured');
});

//triple click logic
let btn=document.getElementById('btn');
let count=0;
let timer;
btn.addEventListener('click',()=>{
    count++;

    if(count===1){
        timer=setTimeout(() => {
            count=0;
        }, 500);
    }
    if(count===3){
        clearTimeout(timer);
        count=0;
        //alert('triple click checked'); because it is async so it pauses all the execution
        //document.body.insertAdjacentText('beforeend','triple click detected');
        console.log('triple click detected');
    }
});


//wrong bcz alert is function invocation not reference so it ececutes immedtly not afetr two seconds
setTimeout(
    alert('wrong this is ')
, 3000);

//correct version
setTimeout(() => {
    alert('this is correct');
}, 3000);

//just a countdown for running race
let count2=4;
let action=setInterval(() => {
    count2--;
    console.log(count);
    if(count2===1){setTimeout(() => {
        console.log('go!!!');
    }, 1000);
    clearInterval(action);
    }
}, 1000);

//loading display message
messages=[
    'loading...',
    'still working...',
    'almost done...',
    'done !!!'

]
messages.forEach((msg,index) => {
    setTimeout(() => {
        console.log(msg)     
    }, 1500*(index+1)); 
});

//just showinh how fast user types the enter button:

window.onload=function () {
    console.log('Get ready...')
    
};
setTimeout(() => {
    console.log('Now! Press Enter!')
    let start=Date.now();
    prompt('press enter has fast has you can');
    let end=Date.now();
    console.log(`you took ${(end-start)/1000} seconds`)
    
}, (Math.random()*3+2)*1000);
