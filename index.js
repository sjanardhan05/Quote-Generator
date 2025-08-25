// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


btn.addEventListener('click', function(){

    fetch('quote.json')
    .then(response => response.json())
    .then(data => {

        let quotes = data.quotes;

        let random = Math.floor(Math.random() * quotes.length);

        quote.innerText = quotes[random].quote;
        person.innerText = quotes[random].person;
    })

    .catch(error => {
        console.log('Error:', error);
    });
    return false;
})

