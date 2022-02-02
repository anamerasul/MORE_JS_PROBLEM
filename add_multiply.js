/*
chairWood =3cft;
tableWood =10cft;
bedWood= 50cft; 
 */

function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
                    const perChairWood=3;

                    const perTableWood=10;
                    const perBedWood=50;
                    //wood collection
                    const chairWoodQuantity=chairQuantity*perChairWood;
                    const tableWoodQuantity=tableQuantity*perTableWood;
                    const bedWoodQuantity=bedQuantity*perBedWood;
//adding all bed quantity
                    const totalWood=chairWoodQuantity+tableWoodQuantity+bedWoodQuantity;
                    return totalWood;
}


const firstOption =woodCalculator(1,2,3);
console.log(firstOption)