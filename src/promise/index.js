const cows = 15;

const countCows = new Promise(function(resolve,reject){
    if(cows>10){
        resolve(`We have ${cows} cows in the farm`);
    }else{
        reject("There is no cows in the farm");
    }
});

countCows.then((r)=>{
    console.log(r);
}).catch((r)=>{
    console.log(r);
}).finally(()=>{
    console.log('Termino la promesa');
})

/* Ejercicio hecho en platzi sobre promesas
    export function delay(time, message) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(message)
    }, time);
  });
}

delay(5, 'Hola')
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(console.log('Termino la promesa'))



*/