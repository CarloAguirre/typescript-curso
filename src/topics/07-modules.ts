import {Product, taxCalculation} from './06-functions-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: "iPad Air",
        price: 150
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
})

console.log({
    total,
    tax
})