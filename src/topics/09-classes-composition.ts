
export class Person {
    
    constructor(public name: string, private address: string) {}
 
}

export class Hero {
    constructor( 
        public age: number, 
        public realName: string,
        public person: Person
        ) {
    }
} 

const tony = new Person('Ironman', "New York")
const ironman = new Hero(45, "Tony", tony)

console.log(ironman)