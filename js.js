var burger = 501;
if(burger>500){
    console.log("free coke")
}
else{
    console.loge("coke: 30tk")
}

let weightPound = 160;
let heightMeter = 5.5;
let bmi = weightPound / heightMeter^2


if(bmi<18.5){
    console.log("you are under weight");
}
    
    else if(bmi >= 18.5 && bmi <= 24.9){
        console.log("Normal");
    }
    else{
        console.log("your are overweight");
    }

let bangla = 89;
let english = 85;
let math = 90;
let science = 85;
let acounting = 90;


if(bangla >=60 && bangla <= 70){
    console.log("Grade: A(-)");
}
else if(bangla > 70 && bangla <90){
    console.log ("Grade: A")
}
else{
    console.log("you are a tremendous student")
}

const myScore = 79;
const frndScore = 40;

if(myScore > 80 && frndScore < myScore){
    console.log("It is my pleasure to take frnd lunch");
}
else if (myScore< frndScore && frndScore > 80){
    console.log("frnd take me to lunch")
}
else if(myScore==frndScore){
    console.log("we are papi")
}
else{
    console.log("rasta mapo")
}

var num1 = 81;
var num2 = 80;

var result = 0;
if (num1 > num2){
    console.log(result=num1*2)
    
}
else{
    console.log(result=num1+num2)
}



num1 > num2 ? result = num1*2 : result = num1 + num2 ;
    console.log(result);

var ticketPrice = 250;
var age = 19;
var isStudent = false;
// var isSeneiorCitizen = 

if(age<10){
    console.log(ticketPrice = 0);
}
else if(isStudent===true){
    const discount = ticketPrice * 10/100;
    const payment = ticketPrice - discount;
    console.log("student Price:",payment)
}
else{
    console.log(ticketPrice+ticketPrice/2);
}

let fruitsName = ['apple', 'orange', 'grape', 'anar']
console.log(fruitsName[1])
console.log(fruitsName.length)
fruitsName [1]= 'jambura';
console.log(fruitsName);
fruitsName.push('palmdum', 'watermelon', 'carrot')
console.log(fruitsName);
fruitsName.pop(fruitsName[4])
console.log(fruitsName)
console.log(fruitsName.includes('jambura'))

if(fruitsName.includes("grape")){
    console.log("ami bari jabo")
}
else if(fruitsName.includes("apple")){
    console.log("ami khelbo na")
}

else{
    console.log("ami khelbo na")
}
console.log(Array.isArray(fruitsName))

const difName = ["biscuit", "chanachur", "tea"]

console.log(fruitsName.concat(difName))
console.log(difName.join("|"))

const isDedication = true;
for (const isDedication===true){
    console.log("I will invest at least 6 hrs every single day for next 60 days")
}

for (let i =1; i<=60; i++){
    console.log(i,"I will invest at least 6 hrs every single day for next 60 days")
}

for(let i=60; i<100;i++){
    console.log(i)
}

for(let i=78; i<100; i=i+1){
    console.log(i)
}

let sum = 0;
for(let i=91; i<130; i=i+2){
    sum=sum+i;
    console.log(i, sum)
}

let sum = 0;
for(let i=52; i<85; i=i+2){
    sum=sum+i;
    console.log(i, sum)
}

let nam = 9;
for(let i=1; i<=10; i++){
    console.log(nam + "*" + i + "="+ nam*i)
}

let count = 60;
const timer = setInterval(function() {
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000);

let i = 1;
while(i<=60){
    console.log(i,'I will invest at least 6 hrs every single day for next 60 days')
    i++
}

let i = 61;

while(i<=100){
    console.log(i,'Odd Number')
    i=i+2
}
let i = 61;
let s = 0;
while(i<=100){
    
    console.log(i,'Odd Number', s)
    i=i+2
    s=s+i;

}

let nam = 9;
for(let i=1; i<=10; i++){
    console.log(nam + "*" + i + "="+ nam*i)
}

let namta = 10
for (let i=1; i<=10; i++){
    console.log(namta*i);
}
let namta = 10;
let i =1;
while (i=1; i<=10; i++){
    console.log(namta*i);
}

while(i<=10){
    console.log(namta + "*" + i + "=" + namta*i)
    i++
}

let count = 60;
const timer = setInterval(function() {
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000);

let count = 10;
const timer = setInterval(function(){
    count--;
    console.log(count);
    // if(count===0){
    //     clearInterval(timer);
    //     console.log('timeup');
    // }
},100);


for( let i = 1; i<200; i++){
    console.log(i);
    if(i=100){
        break;
    }
}

let i = 1;
let sum=0;
while(i<200){
    sum=i+sum
    console.log(i, sum)
    i++
    if(sum>=100){
        break;
    }
}

let i = 1;
while(i<=40){
    
    
    if(i%2===1){
        continue;
    }
    console.log(i)
    i++
}
let i = 55;
while(i<=85){
    i++
    
    if(i%5===0){
        continue;
    }
    console.log(i)
    
}

for (let i=1; i<85;i++){
    if(i%5===0){
        continue;
    }
    console.log(i)
}

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors["golden rod"])

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
const num = [1, 2, 3, 4, 5];
console.log(num);
num.reverse();
console.log(num);

function tenTimes (amaydey){
    const result = amaydey * 10;
    return result;
}

tenTimes(9);

const output = tenTimes(9);
console.log(output);
co

function getMenu() {
    console.log("Burger, Pizza, Pasta");
   }
const today = new Date();
console.log(today)
const date = new date('1988-11-08');
console.log(date.getDay());

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
     console.log(i);
  }, 100);
}   

console.log(Math.floor(0.95));

const height =[65, 68, 66, 72, 78, 60];

function getMax(numbers){
    for(const num of numbers){
        let largest = num;
        if(num> largest){
            max = num;
        }
        console.log(num)
    }
    // console.log(numbers);
}

const max = getMax(height);
console.log('Max Value is', max);

const kim =78;
const lim = 89;
const jim = 56;

if(kim<lim>jim){
    console.log('lim boro')
}
else