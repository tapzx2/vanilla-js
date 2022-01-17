console.log('it works')

let area = document.querySelector('textarea')
let numCharsDisplay = document.querySelector('#character-count')

area.addEventListener('keyup', function() {
    let numChars = area.textLength
    numCharsDisplay.innerHTML = numChars    
});