
// export class Person {
//     public name: string;
//     private address: string
    
//     constructor(name: string, address: string){
//        this.name = name;
//        this.address = address;
//     }

// }

export class Person {
    
    constructor(public name: string, private address: string) {}
 
}

export class Hero extends Person {
    constructor( public age: number, public realName: string) {
        super("Iron Man", "New York")
    }
} 

const ironman = new Hero(45, "Tony")

console.log(ironman)