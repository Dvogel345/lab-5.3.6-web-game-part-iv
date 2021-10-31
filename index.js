const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
move(character).to(100, 250)

//Variable to keep track the current position of the character
const character = newImage('assets/green-character/static.gif')
let direction = null;
let x = 100;
let y = 250;

// Using the setInterval function used as a callback to display how the character moves
setInterval(function() {
    if (direction === 'west')
    {
        x = x - 1
    } if (direction === 'east')
    {
        x = x + 1
    } if (direction === 'north')
    {
        y = y + 1
    } if (direction === 'south');
    {
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)

// Changing the direction of character with arrow keys
document.addEventListener('keydown', function(e){
    if (e.repeat) return;
    if (e.key = 'ArrowUp') {
        direction = 'north'
    } 
    if (e.key = 'ArrowDown') {
        direction = 'south'
    } 
    if (e.key = 'ArrowRight') {
        drection = 'east'
    } 
    if (e.key = 'ArrowLeft') {
        direction = 'west'
    }
}) 

move(character).to(100, 250)(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)