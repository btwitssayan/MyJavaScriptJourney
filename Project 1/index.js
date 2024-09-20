const body = document.querySelector("body")
const colorPallete = document.querySelectorAll(".button")

colorPallete.forEach((color) => {
    color.addEventListener('click',(e)=>{
        switch (e.target.id) {
            case "gray":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "hotpink":
                body.style.backgroundColor = e.target.id;
                break;
            case "red":
                body.style.backgroundColor = e.target.id;
                break;    
            default:
                break;
        }
    })
})

const reset = document.querySelector("#white")

reset.addEventListener('click',(e)=>{
    body.style.backgroundColor = "#f0f0f0"
})