// Your code here



class Cat {
    constructor(name, sex){
        this.name = name 
        this.sex = sex
    }

    speak() {
        return `${this.name} says meow!`
    }
    //...
  }

    // let one = new Cat('saha')
    // one.speak()
  
  class Dog {
    constructor(name, sex){
        this.name = name 
        this.sex = sex
    }

    speak(){
        return `${this.name} says woof!`
    }
  }
  
  class Bird extends Cat{
    
    speak(){
        if( this.sex === "male"){
        return `It's me! ${this.name}, the parrot!`  } 
         else if (this.sex === "female"){
        return `${this.name} says squawk!`}
    } 
  } 