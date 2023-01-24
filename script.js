const img = document.querySelector('img');
const button = document.querySelector('button');
const form = document.querySelector('form')
const input = document.querySelector('input');

let searchTerm = 'puppy'

generateGIF(searchTerm);

function generateGIF(searchTerm) {
        
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=nlthNgtAgJQWr97ibEs9WmgelEs3U2ve&s=' + searchTerm, {
        mode: 'cors'
    })
    
    .then(function(response) {
        return response.json();
    })
    
    .then(function(response) {
        img.src = response.data.images.original.url;
    });
}

button.addEventListener('click', function() {
    
    form.addEventListener('submit', 
    function(event) {
        event.preventDefault()
    });

    searchTerm = input.value;

    generateGIF(searchTerm);

});