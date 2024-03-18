// AKA Modules

// Vamos a importar la interfaz Product y el método taxCalculation
import { Product, taxCalculation, tax } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'nokia',
        price: 100
    },
    {
        description: 'huawei',
        price: 50
    }
];

const [ total, taxR ] = taxCalculation({ 
    products: shoppingCart, 
    tax: tax 
}) 

console.log('07 Total', total);
console.log('07 Tax', taxR, '€');