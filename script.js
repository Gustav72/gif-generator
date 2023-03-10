const img = document.querySelector('img');
const button = document.querySelector('button');
const form = document.querySelector('form')
const input = document.querySelector('input');

let searchTerm = 'puppy'

generateGIF(searchTerm);

async function generateGIF(searchTerm) {
        
    try {
        
        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=nlthNgtAgJQWr97ibEs9WmgelEs3U2ve&s=' + searchTerm, {
            mode: 'cors'
        })
    
        const gifData = await response.json();

    img.src = gifData.data.images.original.url
    } catch(error){

        console.error('There has been a problem with your fetch operation:', error);
            img.src = './error.gif';
    
    };
    
}
button.addEventListener('click', function() {
    
    form.addEventListener('submit', 
    function(event) {
        event.preventDefault()
    });

    searchTerm = input.value;

    generateGIF(searchTerm);

});