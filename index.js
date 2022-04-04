const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Player {
    constructor() {
this.position = {
    x: 100,
    y: 100
}
this.velocity ={
    x: 0.5,
    y: 0.5
}
this.width = 30
this.height = 30

    }
draw(){
    c.fillStyle ='blue'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
}

update() {
  
    this.draw()
    this.position.y += this.velocity.y

}
}

const player = new Player()
    

    function animate() {
        requestAnimationFrame(animate)
        player.update()
    }

    animate()
    