

function addNumbers( a: number, b: number): number {
    return a + b
}

const multiply = (firstNumber: number, secondNumber?: number, base: number = 5)=>{
    return firstNumber * base
}


let result: string = addNumbers( 1, 3 ).toString()
let result2: number = multiply(2)

console.log({result, result2})