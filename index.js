const canvas = document.querySelector('canvas')
const secondsCount = document.querySelector(".seconds")
const context = canvas.getContext('2d')
const aniDimensions = {width: 753 * 1.2, height: 325 * 1.2} 

const startTime = Date.now()

canvas.width = window.innerWidth
canvas.height = window.innerHeight
context.translate(window.innerWidth/2, window.innerHeight/2)

const image = new Image()
image.src = './1.png'

const loopingAnis = 60
const offsetDistance = 50
let currentOffset = 0

image.onload = () => {
    startLooping();
};

function draw(offset) {
    context.drawImage(image, 
        -aniDimensions.width/2 - offset/2, 
        -aniDimensions.height/2 - offset/2, 
        aniDimensions.width + offset, 
        aniDimensions.height + offset);
}



function loopDraw() {
for(let i = loopingAnis; i >= 1; i-- ) {
    draw(i * offsetDistance + currentOffset)
}

draw(offsetDistance)

currentOffset++
if(currentOffset >= offsetDistance){
    currentOffset = 0
}

const newTime =((Date.now() - startTime) / 1000)

secondsCount.innerText = newTime

requestAnimationFrame(loopDraw)
}

function startLooping(){
    requestAnimationFrame(loopDraw)
}

