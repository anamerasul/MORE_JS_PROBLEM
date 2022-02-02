const phones=[
                    {
                                        name:'samgsung s5',price:45000,camera:10,stroage:32
                    },
                    {
                                        name:'Ipnone x',price:100000,camera:12,stroage:32
                    },
                    {
                                        name:'Ipnone 13',price:125000,camera:10,stroage:64
                    },
                    {
                                        name:'walton',price:10000,camera:8,stroage:16
                    },
                    {
                                        name:'nokia',price:8000,camera:8,stroage:8
                    }
];

// let cheapest=phones[0];

// for(const phone of phones){
//                     // console.log(phone);

//                     //compare prise

//                     if(phone.price<cheapest.price){
//                                         cheapest=phone;
//                     }
                    
// }

// console.log(cheapest)

function cheapestPhone(phones){

                    let cheapest=phones[0];                 

for(const phone of phones){
                    // console.log(phone);

                    //compare prise

                    if(phone.price<cheapest.price){
                                        cheapest=phone;
                                        // return cheapest;
                    }
                    // return cheapest;

                   
                    
}

return cheapest;

}

const MycheapestPhone =cheapestPhone(phones);
console.log(MycheapestPhone);