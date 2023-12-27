

export interface Passenger {
    name: string;
    chiledren?: string[];
}

const passenger1: Passenger = {
    name: "Carlo"
}
const passenger2: Passenger ={
    name: "Juan",
    chiledren: ["Maria", "Manuel"]
}

const printChildren = (passenger: Passenger)=>{
    
    const howManyChildren = passenger.chiledren?.length

    console.log(passenger.name, howManyChildren)
}

printChildren(passenger1)
printChildren(passenger2)