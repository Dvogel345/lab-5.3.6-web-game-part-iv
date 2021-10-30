function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}

//Variable to keep track the current position of the character
const character = newImage('assets/green-character/static.gif')
let direction = null;
let x = 100;
let y = 250;
move(character).to(100, 250)

