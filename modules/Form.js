
export class Form{

    constructor() {

        document.getElementById('submit').addEventListener("click", this.postImagePlusForm)


        let button =document.querySelector('#displayForm')
        let form = document.querySelector('.formHidden')

        button.addEventListener("click", () => {
         form.classList.toggle("formHidden");
        })
    }


postImagePlusForm(){
    let canvas = document.getElementById("feuille");

    let imageObject = new Image();
    imageObject.src = canvas.toDataURL("image/png");

    let imageElement = document.getElementById("formAndDraw");
    imageElement.src = imageObject.src;


    // Saving it locally automatically
    let link = document.createElement("a");
    link.setAttribute('download', "download")
    link.href= imageElement.src
    link.click()
}

}
