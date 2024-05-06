

//how do we decide if its a function call or function?
//anything starting with lowercase with pair of brackets with or without args is a function call


// fetch(url).then().catch();
// fetch(url).then(() => {}).then(() => {}).catch(() => {});


const springBootUrl = 'http://localhost:9090/emp/get-all-emps';
const springBootUrlPost = 'http://localhost:9090/emp/add-emp';

fetch(springBootUrl)
    .then(res => res.json())
    .then(resp => console.log(resp))
    .catch(err => console.log(err));

// const empDataToAdd = {
//     firstName: 'Vinu',
//     email: 'vinu@gmail.com',
//     aadhaar: 787878787878,
//     salary: 78900
// };

// fetch(springBootUrlPost, {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(empDataToAdd)
// })
//     .then(res => res.json())
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

