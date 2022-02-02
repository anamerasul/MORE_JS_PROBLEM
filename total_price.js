const products=[
                    {name:'laptop',price:45000,quantity:1},
                    {name:'shirt',price:500,quantity:1},
                    {name:'watch',price:3688,quantity:1},
                    {name:'phone',price:55000,quantity:1}
];

let totalPrice =0;

for(const product of products){
                    totalPrice=totalPrice+product.price;

}

// console.log(totalPrice);


const ShoppingCart=[
                    {name:'laptop',price:45000,quantity:1},
                    {name:'shirt',price:500,quantity:8},
                    {name:'watch',price:3688,quantity:3},
                    {name:'phone',price:55000,quantity:1}
];

let  ShoppingCartTotal=0;

for (const product of ShoppingCart){
                    // console.log(product)
                    const productTotal=product.price*product.quantity;

                    ShoppingCartTotal=ShoppingCartTotal+ productTotal
}

console.log(ShoppingCartTotal);