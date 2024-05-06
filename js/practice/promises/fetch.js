
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//     const html = `
//     <article class="country ${className}">
//         <img class="country__img" src="${data[0].flags.svg}" />
//         <div class="country__data">
//             <h3 class="country__name">${data[0].name.common}</h3>
//             <h4 class="country__region">${data[0].region}</h4>
//             <p class="country__row"><span>👫</span>${(data[0].population / 1000000).toFixed()} million</p>
//             <p class="country__row"><span>🗣️</span>${Object.values(data[0].languages)[0]}</p>
//             <p class="country__row"><span>💰</span>${Object.values(data[0].currencies)[0].name}</p>
//         </div>
//     </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };



//consuming promises!

// const request = fetch('https://restcountries.com/v3.1/name/portugal')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('Error fetching country data:', error));

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(response => response.json())
//         .then(function (data) {
//             const countriesContainer = document.querySelector('.countries');
//             const html = `
// <article class="country">
//     <img class="country__img" src="${data[0].flags.svg}" />
//     <div class="country__data">
//         <h3 class="country__name">${data[0].name.common}</h3>
//         <h4 class="country__region">${data[0].region}</h4>
//         <p class="country__row"><span>👫</span>${(data[0].population / 1000000).toFixed()} million</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(data[0].languages)[0]}</p>
//         <p class="country__row"><span>💰</span>${Object.values(data[0].currencies)[0].name}</p>
//     </div>
// </article>`;
//             countriesContainer.insertAdjacentHTML('beforeend', html);
//             countriesContainer.style.opacity = 1;
//         })
//         .catch(error => console.log('Error fetching country data:', error));
// };

// getCountryData('portugal');




//chaining promises

const getCountryData = function (country) {
      // Country 1
      fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then( response=>response.json(), err=>alert(err))
        .then(data => {
          renderCountry(data[0]);
          const neighbour = data[0].borders[0];
         
    
          if (!neighbour) 
             return;
    
          // Country 2
          return fetch(`https://restcountries.com/v3.1/name/${neighbour}`);
        })
        .then(response => {
          if (!response.ok)
            throw new Error(`Country not found (${response.status})`);
          
          console.log(response.json());
          return response.json();
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
          console.error(`${err} `);
          renderError(`Something went wrong  ${err.message}. Try again!`);
        })
        .finally(() => {
          countriesContainer.style.opacity = 1;
        });
    };