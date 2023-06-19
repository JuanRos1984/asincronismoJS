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