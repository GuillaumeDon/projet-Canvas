export class Dessin{
    constructor() {

        this.draw = false
        this.prevX = 0
        this.prevY = 0

        this.canvas = document.querySelector('#feuille')
        this.ctx = this.canvas.getContext("2d")
        this.ctx.strokeStyle = "black"
        this.ctx.lineJoin = "round"
        this.ctx.lineWidth = 2
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

        this.canvas.addEventListener("mousedown", (e) => {
            //Je dessine
            this.draw = true


            //Je stock les coordonnées de départ
            this.prevX = (e.pageX - this.canvas.offsetLeft) * 400 / this.canvas.clientWidth
            this.prevY = (e.pageY - this.canvas.offsetTop) * 400 / this.canvas.clientHeight

        })

        this.canvas.addEventListener("mousemove", (e) => {
            if (this.draw) {
                // On calcule les coordonnées
                let currX =  (e.pageX - this.canvas.offsetLeft) * 400 / this.canvas.clientWidth
                let currY = (e.pageY - this.canvas.offsetTop) * 400 / this.canvas.clientHeight

                // On dessine
                this.dessine(this.prevX, this.prevY, currX, currY)

                // On stocke les nouvelles coordonnées
                this.prevX = currX
                this.prevY = currY


            }
        })

            this.canvas.addEventListener("mouseup", ()=>{
                this.draw= false

        })

        this.canvas.addEventListener("mouseout", ()=>{
            this.draw= false

        })
    }
 dessine(depX, depY, destX, destY){
        this.ctx.beginPath()
        this.ctx.moveTo(depX, depY)
        this.ctx.lineTo(destX, destY)
        this.ctx.closePath()
        this.ctx.stroke()
     console.log(depX, depY, destX, destY)

 }

 setColor(color){
        this.ctx.strokeStyle = color
 }


 basicStroke(){
        this.ctx.lineWidth  = 3

    }
 biggerStroke(){
        this.ctx.lineWidth = 40
 }

 smallerStroke(){
        this.ctx.lineWidth  = 1
 }
}

