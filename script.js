// const person = {
//     firstname:"Gulnar",
//     lastname:"Hagverdiyeva",
//     age : 21,
//     hobbiesL:["music" , "movies" , "reading"],
//     sayHello :function(){
//         console.log(`Hello! My name is ${this.firstname} ${this.lastname}.`);
//     }

// }

// console.log(person.firstname);
// console.log(person.lastname);
// person.sayHello()

// console.log(person.country);
// person.country = "USA"
// console.log(person.country);


// console.log(person.age);
// person.age = 22
// console.log(person.age);

// person.isStudent = true;
// console.log(person.isStudent);


// delete person.isStudent
// console.log(person.isStudent);


// const calculate = {
//     add:function(a,b){
//        return a+b
//     },
//     subtract:function(a,b){
//          return a-b
//     },
// }

// console.log(calculate.add(3,6));
// console.log(calculate.subtract(10,6));


// function Person(firstName,lastname , age){
// this.FirstName = firstName
// this.LastName = lastname;
// this.Age = age
// }


// const person1 = new Person ("Gulnar" , "Hagverdiyeva" , 21)
// const person2 = new Person ("Gulnaz" , "Verdi" , 24)

// console.log(person1);
// console.log(person2);


// function Dog (name , bread){
//     this.Name = name;
//     this.Bread= bread;
// }

// const dog1 = new Dog ("Popy","Afador")
// const dog2 = new Dog ("Loly", "Afaird")
// const dog3  = new Dog ("Volly" , "Kangal")


// console.log(dog1);
// console.log(dog2);
// console.log(dog3);

// function Animal (name){
//     this.Name = name
//     this.Walk = function(){
//         console.log(`${this.Name} is walking.`);
//         this.SetLog =  function() {console.log("Setloginggggg")};
//     }
// }

// Animal.prototype.makeSound = function(){
//     console.log(`${this.Name} is making sound.`);
// }

// function Dog (name , bread){
//     Animal.call(this,name)
//     this.Bread= bread;
// }

// Dog.prototype = Object.create(Animal.prototype)


// Animal.prototype.back = function(){
//     console.log(`${this.Name} is baking.`);
// }

// const dog = new Dog ("Popy","Afador")

// console.log(dog);
// dog.back()
// dog.makeSound()
// dog.Walk()


// String.prototype.toMail = function(domain  = "code.edu.az"){
//     if(!this || this.includes("@")){
//         return this.toString()
//     }
//     return `${this}@${domain}`.toLocaleLowerCase();
// }

// let mail = "murat.vuraNOk".toMail();
// console.log(mail);


// class Person{
//     constructor (firstname , lastname){
//         this.Firstname = firstname,
//         this.Lastname = lastname
//     }

//     greet(){
//         console.log(`Hello ${this.Firstname} ${this.Lastname}`);
//     }

// }
// const person1 = new Person("Gulnar" , "Hagverdiyeva")
// const person2 = new Person ("Mahammadshafi" , "Mehdiyev")

// person1.greet()
// person2.greet()


class Circle {
    constructor(redius){
        this._radius = redius; //private variable
    }

    get radius (){
        return this._radius
        
    }

    set radius(newRadius){
        if(newRadius  >=0){
            this._radius = newRadius
        }

        else{
            console.log('Radius should be positive');
        }
    }

    calculateArea(){
        return Math.PI * Math.pow(this._radius , 2)
    }

}

const circle = new Circle(5)
console.log(circle.radius);
circle.radius = 10
console.log(circle.radius);
console.log(circle.calculateArea());