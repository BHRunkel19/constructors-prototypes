//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog(name, color, status) {
  this.name = name;
  this.color = color;
  this.status = status
};

function Sadie(){
  this.status = 'normal';
  this.color = 'black';
  this.hungry = false;
  this.owner = 'Mason';
}

function Moonshine(){
  this.hungry = true;
}

Sadie.prototype = new Dog();
Moonshine.prototype = new Dog();

console.log(Sadie.prototype);
console.log(Moonshine.prototype);

let sadie = new Sadie();
let moonshine = new Moonshine();
let atticus = new Dog('Atticus');

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human(name, cool){
  this.name = name;
  //this method will take the parameter 'dog' (referencing the object being affected) and change the object.status to 'happy'
  this.pet = function(dog) {
    dog.status = 'happy'
  }
  //this method will take the parameter 'dog' (object reference) and change the object.hungry = false;
  this.feed = function(dog) {
    dog.hungry = false;
  }
  this.cool = cool;
}

let mason = new Human('Mason', false);
let julia = new Human('Julia', true);

// Instances of Human
// Needed: mason, julia
