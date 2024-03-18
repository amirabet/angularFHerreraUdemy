// Ejercico 07 exportaremos esta interfaz
export interface Product {
    description: string;
    price: number;

}

const phone: Product = {
    description: 'Xperia Z1 Compact',
    price: 300.0
}

const tablet: Product = {
    description: 'Remarkable',
    price: 450.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// function taxCalculation( { tax, products } : TaxCalculationOptions ): [ number,number ] {
export function taxCalculation( options: TaxCalculationOptions ): [ number,number ] {
    const { tax, products } = options;
    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];
}


//const shoppingcart = [phone, tablet];
export const tax = 0.15;

export const [ result_total, result_tax ] = taxCalculation({
    products: [ phone, tablet ],
    tax //tax: tax
});

console.log('06 Total', result_total);
console.log('06 Tax', result_tax);

// Ejercico 07 exportaremos únicamente una interfaz
//export{};