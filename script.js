const img = document.querySelector('img');

let searchTerm = 'puppy'

fetch('https://api.giphy.com/v1/gifs/translate?api_key=nlthNgtAgJQWr97ibEs9WmgelEs3U2ve&s=' + searchTerm, {
    mode: 'cors'
})

.then(function(response) {
    return response.json();
})

.then(function(response) {
    img.src = response.data.images.original.url;
});