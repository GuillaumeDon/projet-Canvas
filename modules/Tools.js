export class Tools {

    constructor(canvas){
        this.canvas = canvas
        this.init();
    }
    init(){

            document.querySelectorAll("#palette div").forEach(element => {
                element.style.backgroundColor = element.dataset.color

                //On écoute le clic
                element.addEventListener("click", (e) => {
                    const color = element.dataset.color
                    this.canvas.setColor(color)
                    document.querySelector("#selectedColor").style.backgroundColor = color


                })

            })

        document.querySelector("#gomme").addEventListener("click", ()=>{
            this.canvas.setColor("white")

        })

        document.querySelector("#biggerStroke").addEventListener("click",()=>{
            this.canvas.biggerStroke()
        })

        document.querySelector("#smallerStroke").addEventListener("click",()=>{
            this.canvas.smallerStroke()
        })

        document.querySelector("#basicStroke").addEventListener("click",()=>{
            this.canvas.basicStroke()
        })


        document.querySelector("#colorPicker").addEventListener("change", (e) => {
            const color = e.currentTarget.value
            this.canvas.setColor(color)
        })

    }




}