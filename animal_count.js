function animalCount(miles){

                    const animalDencityfirstTen=10;
                    const animalDencitysecondTen=50;
                    const animalDencityRest=100;
                    if(miles<=10){
                                        const count =miles*animalDencityfirstTen;
                                        return count;
                    }

                    else if( miles<=20){
                                        const firstDenseAnimal =animalDencityfirstTen*10;

                                        const restMiles=(miles-10);

                                        const secondDenseAnimal=restMiles*animalDencitysecondTen

                                        const totalAnimals=firstDenseAnimal+secondDenseAnimal;

                                        return totalAnimals;
                    }

                    else{
                                        const  firstDenseAnimals =animalDencityfirstTen*10;
                                        const secondDenseAnimals=10*animalDencitysecondTen;
                                        const restMiless=miles-20;

                                        const restDenseAnimals=restMiless*animalDencityRest;
                                        const totalRestAnimals=restDenseAnimals+firstDenseAnimals+secondDenseAnimals;

                                        return totalRestAnimals;
                    }
}

const animal=animalCount(30);
console.log(animal)
