//console.error("JavaScript error message");

//var num;
//num = 5;

//const num = 5;
//num = 7;
//console.log(num);
//console.log("variable: " + num);

/* var num_1 = 5;
var num_2 = 15;
console.log("subtraction: " + (num_1 - num_2)); */

/* var num_3 = 5;
//num_3 = num_3 + 7;
//num_3 /= 7;
num_3 ++;
console.log("result: " + num_3); */

/*var str_1 = Number("12");
var str_2 = Number("3");
console.log("result: " + (str_1 + str_2));

console.log("Math: " + Math.PI);
console.log("Math: " + Math.min(2,5,7,0,-3,-18));
*/
/*
var number = 15;
var isHasHouse = true;

if(number != 14 && !isHasHouse) {
    console.log("OK");
} else if(number < 10) {
    console.log("number < 10")
} else if(number == 10) {
    console.log("number = 10")
} else 
    {console.error("Error!")}; 
*/

/* var stroka = "words";
switch(stroka) {
    case "4":
        console.log("the variable is equal to 4");
        break;
    case "world":
        console.log("the variable is equal to 'world'");
        break;
    case "word":
        console.log("the variable is equal to 'word'");
        break;
    default:
        console.log("Default value")
} */

/*var arr = [5, true, "test", 4.8, 0, -100];
arr[2] = "word";
console.log(arr.length);
*/

/*var matrix = [
    [12, -1], ["word", "44", "flower"], [true, false]
];
matrix[1][0] = "cat";
console.log(matrix);
*/

//for(var i = 100; i > 5; i /=2)
//console.log(i);

/*var j = 1000;
while(j >= 100) {
    console.log(j);
    j -=100;
}
*/

/*
var x = 100;
do {
     console.log(x);
} while (x < 50);
*/

/*
var x = 0;
do {
     console.log(x);
     x++;
} while (x < 10);
 */

/*
for(var i = 10; i <= 20; i +=2) {
    if(i > 15)
        break;
    console.log(i);
} 
*/

/*
for(var i = 10; i <= 20; i++) {
    if(i % 2 == 0)
        continue;
    console.log(i);
}
*/
/*
var arr = [5, 7, 3, 8, 9, "stroka"];
for(var i = 0; i < arr.length; i++) {
    //arr[i] *= 2;
    console.log("Элемент " + i + ": " + arr[i]);
}
*/

//alert("Have a good day!");

/*
var data = confirm("You should fill in all your details");
if(data) {
    alert("check all field highlighted in red")
}
*/

/*
var data = prompt("How old are you?");
if(data < 18) {
alert("sorry, You don't have access to this resource")
};
console.log(data)
*/

/*
var person = null;
if(confirm("Are you sure?")) {
    person = prompt("What is your name?");
    alert("Hello, " + person);
} else {
    alert("You've click on Cancel")
}
*/

/*
function info(word) {
    console.log(word + "!");
}

function summa(a, b) {
    var res = a + b;
    info(res);
}
summa(5, 7);
*/

/*
function summa(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}
var array = [6, 8, 1];
var res = summa(array);
console.log("Result: " + res)
*/

/*
function info() {
    var num = 10;
    console.log(num);
}
info();
console.log(num);
*/

/*
function onClickButton() {
    alert("You've just click on me")
}
*/


var counter = 0;
function onClickButton(el) {
    counter++;
    el.innerHTML = "Вы нажали на кнопку: " + counter + " раз";
    //el.style.background = "red";
    //el.style.color = "blue";

    el.style.cssText = "border-radius: 10px; border:0; font-size: 20px; background-color: #7FFFD4";
}

function onInput(el) {
    if(el.value == "Hello")
        alert("И тебе привет!");
    console.log(el.value);
}

/*
var str = document.getElementById('text');
str.title = "New text";
console.log(str.title);
str.style.color = "red";
str.style.backgroundColor = "blue";
str.innerHTML = "New<br>row";

//var spans = document.getElementsByTagName('span');
var spans = document.getElementsByClassName('simple-text');
for(var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}
*/

/*
function checkForm(el) {
//var name = document.getElementById('name').value;
var name = el.name.value;
var pass = el.pass.value;
var repass = el.repass.value;
var state = el.state.value;

var error = "";
if(name == "" || pass == "" || repass == "" || state == "")
    error = "Please fill in all necessary fields";
else if(name.length <=2 || name.length > 15)
    error = "The name must be between 2 and 15 characters long";
else if(pass != repass)
    error = "Password and Repeat Password must match.";

if(error != "") {
    document.getElementById('error').innerHTML= error;
    return false;
} else {
    alert("Tha form has been successfully submitted");
    return true;
}
}
*/


document.getElementById('registration-form').addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    var el = document.getElementById('registration-form');
    
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;
    
    var error = "";

    if(name == "" || pass == "" || repass == "" || state == "")
        error = "Please fill in all necessary fields";
    else if(name.length <=2 || name.length > 15)
        error = "The name must be between 2 and 15 characters long";
    else if(pass != repass)
        error = "Password and Repeat Password must match.";
    
    if(error != "") 
        document.getElementById('error').innerHTML= error;
        else {
            alert("Tha form has been successfully submitted");
        }
    }
    


/*
var id = setInterval(my_func, 2000);

var counter = 0;
function my_func() {
    counter++;
    console.log("Counter: " + counter);

    if(counter == 3)
        clearInterval(id);
}
*/

/*
var counter = 0;
setInterval(function() {
    counter++;
    console.log("Counter: " + counter);
}, 2000);
*/

/*
setTimeout(function(){
    console.log("Timer is working!");
}, 3000);
*/

/*
setTimeout(my_func, 2000);

function my_func() {
    console.log("Timer is working");
}
*/

/*
var date = new Date();
//console.log(date.getFullYear());
//console.log(date.getMonth());

date.setHours(23);
date.setMinutes(40);
console.log("Time: " + date.getHours() + ":" + date.getMinutes())
*/

//var arr = [5, 7, 8, 9];
//console.log(arr.join("||"));

/*
var arr = [8, 90, 36, 0, 54, 15, 7];
//console.log(arr.sort());
var stroka = arr.reverse().join(", ");
console.log(stroka.split(", "));
*/

class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }

    info() {
        console.log("Human: " + this.name + ". His age: " + this.age)
        
    }
}

var alex = new Person('Alex', 45, true);
var bob = new Person('Bob', 25, false);

alex.name = 'alex2';

alex.info();
bob.info();

//console.log(alex.name);
//console.log(bob.happiness);