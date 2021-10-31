const inventory = newInventory()
move(inventory).to(0, 0)

// const character = newImage('assets/green-character/static.gif')
// move(character).withArrowKeys(100, 250)

//Variable to keep track the current position of the character
const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(diretion) {
    if (direction === null){
            character.src = 'assets/green-character/static.gif'
        }
        if(direction === 'west'){
            character.src = 'assets/green-character/west.gif'
        }
        if(direction === 'north'){
            character.src = 'assets/green-character/north.gif'
        }
        if(direction === 'east'){
            character.src = 'assets/green-character/east.gif'
        }
        if(direction === 'south'){
            character.src = 'assets/green-character/south.gif'
        }
    }
    
    move(character).withArrowKeys(100, 250, handleDirectionChange)

//Adding the grass and sky (using functions) (Bonus)
function tile (url, top, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, top + w*50, bottom+h*100)
        }
    }
}

let GrassHeight = window.innerHeight
let SkyHeight = window.innerHeight

tile('assets/sky.png', 0, 0, window.innerWidth/100, SkyHeight/390)
tile('assets/grass.png', 0, 0, window.innerWidth/108, GrassHeight/193)

newImage('.assets/sky.png',0,0)
newImage('.assets/grass.png', 0, 0)

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)