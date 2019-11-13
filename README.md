# 100ApplicationOnJs
Here will be creating 100 application which is purely written using Javascript! yes I want to know head and tail of this JS.


This document mainly focus on how a C++ developer can start working on web technologies and what comparision is right when it comes to C++ handling.
There by one can master both C++/JS. 

Resources:
https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/5869132?start=75#overview
Course by: @Jonas Schmedtmann

1. Basics of Java script
    > learnt how to view the content on web with javascript provided elements. HTML invokes this Javascript.
    > then all the basic constructs. Best was this pointer in javascript. Its so easy to mention of update this object.
    (no constructos required Yay!)
    
2. Execution contexts and stacks.
    > this also looks very clean compare to C++. Var objects takes care of most of the thing. 
    >Hoisting: , which is nothing but what happens on creation time & exection time(compile time and run time). Function declaration in JS contributes for Hoisting. Variable taking undefined value,even then declation is followed later is best. (C++ compiler will cry here).
    console.log(age);
    var age= 32;
    CPP thows compilation error. 
    
 3. Execution stack vs Scope change:
   execution stack shows order in which function has been invoked.
   Scope change: shows the stack level for code is written. ( lexically)
       Update as on 10th Nov 2019.
       
4. Document object model 
    > Place a UI elements onto webpage using HTML and CSS. how to query these HTML/CSS elements into java script using a DOM.
    > how Java script plays important role in manipulating UI change.
    > Developed a PIG-GAME.
 5. Inheritance in JS: Prototypes and prototype chain
    >every javascript object has a prototype property, which makes inheritance possible in javascript.
    >The proptotype property of an object is where we put methods and properties that we want to other objects to inherit.
    >The constructor's prototype property is NOT the prototype of the constructor itself.it is the prototype of ALL instances that are created through it
    > when a certain method(a property) is called, the search starts in the object itself and if it cannot be found, the search moved on to the object's prototype. This continues until the method is found: prototype chain
    
    6. creating objects: function constructor
    using a function constructor how the methods can be shared between two objects. Also using prototype how the methods and properties can be inherited.
    creating objects via Object.Create
    
    
   
    
    Doubt:  how to play with Address of the variable in JS?
