var firstName = 'pavi';


var lastName = 'rani';
var age = 32;

console.log(firstName);


var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
//Type coercion
var isMarried = false;

console.log(firstName + ' ' + age);

console.log(firstName + ' ' + "is of" + age + "old. Is he married" + isMarried);

//variable mutation
age = "thirty two";
job = 'engineer';

//alert(firstName + ' ' + "is of" + age + "old." + job + " Is he married" + isMarried);

var lastName = prompt(" what is his last name?");
console.log(lastName);


/*
Basic operatiors +  - /
*/

//operator precedence
var now = 2019;
var yearPavi = 1987;
var agePavi = 32;

var isfullAge  = now - yearPavi >= agePavi;
console.log(isfullAge);



//First coding challenge

var massMark = 50; //kg
var massJohn = 58;
var heightJohn = 2;  //meter
var heightMark = 4;

var bmiMark, bmiJOhn;
bmiMark = massMark /(heightMark * heightMark);
bmiJOhn = massJohn /(heightJohn * heightJohn);
var isHigherBMI = bmiMark > bmiJOhn ;
console.log(bmiMark, bmiJOhn);

console.log("is Mark;s BMI higher than John's"+isHigherBMI);


/* IF ELSE statements 
*/

var firstName = 'john';
var behaviourStatus = 'tough';

if (behaviourStatus === 'tough')
    {
      //  alert(firstName + 'is tough guy');
        
    }else{
      //  alert(firstName + ' is soft in nature');
    }

var isMarried = true;
if (isMarried)
    {
        console.log(firstName + 'is Married');
        
    }else{
        console.log(firstName + ' is single');
    }



//Coding challenge-2

var jTeamScore1=89;
var jTeamScore2=120;
var jTeamScore3=103;

var mTeamScore1 = 116;
var mTeamScore2 = 94;
var mTeamScore3 = 123;


var javg = (89 + 120+ 103)/3;
var mavg = (116 + 94 + 123)/3;


if( javg > mavg)
    {
        console.log("John team is winner");
        
    }
else if (javg === mavg)
    {
        console.log("its a draw");
    }
else{
    console.log("mike is the winner")
}


function Calculate(year)
{
    return 2019 - year;
}

var avg = Calculate(1999);

console.log(avg);

//function statements and expressions.

//Function declaration
//functon whatDoyouDo(job, firstName){}

//function expression
var whatDoyouDo = function(job , firstName){
    
    switch(job)
        {
            case 'teacher':
                return firstName +' teaches';
            case 'driver': 
                return firstName +'drives';
            case 'designer':
                return firstName + 'designs';
            default:
                
                
        }
    
    
}

console.log(whatDoyouDo('teacher', 'pavithra'));

//Arrays

var names = [ 'a', 'b', 'c'];

var years = new Array(1990,2000,2001);

console.log(names[0]);
console.log(names.length);

//mutate array data
names[5] = 'mary';
console.log(names);

//different data types

var differentValues = ['john', 1990, false];

differentValues.push('blue');
console.log(differentValues);

differentValues.unshift('Mr');
console.log(differentValues);

differentValues.pop();
console.log(differentValues);
console.log(differentValues.indexOf(1990));


//object and properties
var john = {
    name: "john",
    lastname: "smith",
    age:32,
    married: false}

console.log(john.name);
console.log(john['age']);

var x ='married';
console.log(john[x]);


//objects and methods
var john = {
    name: "john",
    lastname: "smith",
    year:1987,
    married: false,
    calAge: function(){ this.age= 2019-this.year;}
}

//console.log(john.calAge());

var age = john.calAge();
console.log(john);