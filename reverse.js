const greetings ="hello, how are you";

function reserveString(text){

               let reverse="";
              
               for(const letter of text){
                              // console.log(letter)
                              reverse=letter+reverse;
                              // reverse=reverse+letter;
                              
                              
               }
               return reverse;
            
}

const reversed =reserveString(greetings);
console.log(reversed);