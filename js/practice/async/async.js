//async await
const whereami=async function(country){
    const res=await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const response=await res.json();
    console.log(response);
}

whereami('portugal');
console.log('first');