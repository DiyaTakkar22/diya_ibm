
//building a promise
const loterryPromise=new Promise(function(resolve,reject){
    console.log('welcome');
   setTimeout(function(){
    if(Math.random()>=0.5){
        resolve('you win!!');
    }
    else{
        reject(new Error('you lose!!!'));
    }
   },2000);
    
})

loterryPromise
   .then(res=>console.log(res))
   .catch(err=>console.log(err));

   //promisifying setTimeout
const wait=function(seconds){
    return new Promise(function(resolve){
       setTimeout(resolve,seconds*1000);
    })
}

wait(2).then(()=>{
    console.log('i waited for 1 second');
    return wait(1);
})
