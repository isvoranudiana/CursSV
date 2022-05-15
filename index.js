console.log("test")


//Creați o funcție care primește ca și parametru un număr și returnează dublul său 
//dacă numărul primit este impar, altfel returnează numărul scăzut cu 2 dacă este par. Afișați rezultatul în consolă.

function number(integer) {
    if(integer % 2 == 0){ 
        return console.log(integer- 2);
    }else{
        return console.log(integer * 2);}
}


number(2)
number(3)
number(11)

//Creați o funcție care stochează intr-un array doar numerele prime dintr-un array primit ca si parametru.
// Parcurgeți array-ul folosind un “for loop”. Afișați rezultatul în consola.

const arr = [1,2,3,4,5,6,7,8,9];




    let prime = []
    
    for (let i = 0; i < arr.length; i++) {
    (a = arr[i] %2)
    if (a != 0 ) {saved_numbers = (arr[i]), prime.push(saved_numbers)}
   
      }
    prime.shift(0)
    console.log(prime)


// Creați o funcție care stochează intr-un array doar strings dintr-un array primit ca si parametru. 
// Parcurgeți array-ul folosind “forEach”. Afișați rezultatul în consola

const saveString = function(arr,strings = []) 

    array.forEach(element => {typeof element === "string" 
        
    });