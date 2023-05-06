console.log('Hello World');


//----ENCAPSULATION------

//we group related functions & variables together which reduces complexity+increase reusability
let employee = {
    //Properties
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() { //()having no parameters
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();

//------ABSTRACTION--------
//We will use hidden methods for this which can be changed anytime but will not display to others
//Hide the details & complex only show essnetials. Reduces complexity & isolate the impact of changes

//-----------POLYMORPHISM--------
//It will allow u to get rid of long if & else & switch cases

//---------INHERITANCE------
//Eliminate redundant code

//---------CREATING OBJECTS----------
/*const circle = {
    //PROPERTIES
    radius: 1,
    location: {
        x:1,
        y:1
    },
    draw: function() { //METHOD
        console.log('draw');
    }
};

circle.draw();*/

//-----------FACTORY Function--------
  //This will return the value
/*function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);
circle.draw();*/

//------------CONSTRUCTOR Function------
 //This will first create new empty object then pass it to this which will set its point then will return object from function 
 //we will use this & new words for this 
/*function Circle(radius) { // its first letter is always uppercase
    this.radius = radius;
    this.draw = function () {
        console.log('draw'); //no need to use return if we using 'this'
    }
}
const another = new Circle(1);


function Circle1(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log('draw');
        };
    }

Circle1.call({}, 1); //{}it is showing this 
Circle.apply({}, [1,2,3]); //For passing an Array use this
const another1 = new Circle1(1);*/

//---------Primitives---------
//They are copied by their values & "OBJECTS" are copied by their refrences
/*x = 10;
y = x;
x = 20;*/ //Console Results: x=20 & y=10
/*let number = 10;
function increase (number) {
    number++;
}
increase(number);
console.log(number);//Result: 10 bcz when it is passes to function it will considered its first value both are indep


//------------REFRENCES-----------
//This shows object is not stored in variable it is stored in some other memory & address of that memory location is stored inside the var
//Both x & y are pointing to same memory location that's why changes will occur in both
let x = {value: 10};
let y = x;
x.value = 20; //Results: x= {value: 20} , y= {value: 20}

let obj = {value: 10};
function increase (obj) { //local parameter
    obj.value++;
}
increase(obj); //when we call increas ethis object is passed by its ref so local parameter which is obj will point to the same object as we set in the start
//we are not delaing with 2 indep var here we are pointing to same objs 
console.log(obj); // Results: {value: 11}

//--Adding & Removing properties from objects----
function Circle1(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const circle = new Circle(10);

//Adding 
circle.location = {x:1};
circle['location'] = {x:1}; //Accesing dynamically & having special characters & spaces
//or
const propertyName = 'center-location';
//circle.center-location we can't access it like this
circle[propertyName] = {x:1};

//Deleting
delete circle.location;
//or
delete circle['location']; //we use bracket notation to access the member

//Iterationg properties in objects 
for (let key in circle) {
    console.log(key, circle[key]); //Bracket wil give value 
}

//For Properties not the Methods
//we will use type of operator to check this value
for (let key in circle) {
    if (typeof circle[key] !== 'function')
      console.log(key, circle[key]); //Bracket wil give value 
}

//For getting all Keys & Objects in form of Array
const keys = Object.keys(circle);
console.log(keys); //(3) ['radius', 'draw', 'center-location']

//Checking Existence of property or method
if ('radius' in circle) {
    console.log('Circle has radius'); //Result: Circle has radius
}

//-----------ABSTRACTION------------
 //Hide the details & expose only essentials
  /*function Circle(radius){
     this.radius=radius;

     this.defaultLocation={x:0, y:0};   //This and below is not necessary to show public     
     this.computeOptmumLocation=function(factor) { //Simple one change "factor" can results in multiple changes in codes
         // ..
    }

     this.draw=function(){
         this.computeOptmumLocation(0.1);
         console.log('draw');
     };
 }

 const circle=new Circle(10);
 circle.draw();

 //ABSTRACTION OUTSIDE
 function Circle(radius){
    this.radius=radius;

    let defaultLocation={x:0, y:0};//using let here so doesnot accessible globally/user. They are local variables 
    let computeOptmumLocation=function(factor) { 
        // ..
   }

    this.draw=function(){
        computeOptmumLocation(0.1);
        //defaultlocation
        //this.radius
        console.log('draw');
    };
}

const circle = new Circle(10);
circle.draw()*/


function Circle(radius){
    this.radius=radius;

    let defaultLocation={x:0, y:0};       
     
    this.getdefaultLocation=function(){
        return defaultLocation;
    };

    this.draw=function(){
        console.log('draw');
    };

    // only read property & not change
    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        //for assigning values
        set: function(value){
            if(!value.x || !value.y)
            throw new Error('invalid location.');
            defaultLocation=value;
        }
    });
}

const circle=new Circle(10);
circle.defaultLocation=1;
circle.draw();


//-------Exercise--
function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
          throw new Error ('Already started');

        running = true;

        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
          throw new Error ('Not started');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) /1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration' , {
        get: function() { return duration; }
    });
}


