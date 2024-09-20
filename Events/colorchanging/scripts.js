
const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let index = 0; index < 6; index++) {

        color += hex[Math.floor(Math.random() * 16)];

    }

    return color;

}

let inter;


document.querySelector('#start').addEventListener('click', (e) => {
    if(!inter){
        inter = setInterval(() => {
            document.body.style.backgroundColor = randomColor()
        },1000)
    }
})

document.querySelector('#stop').addEventListener('click', (e) => {
    clearInterval(inter)
    inter = null
})

document.querySelector('#reset').addEventListener('click',()=>{
    document.body.style.backgroundColor = 'white'
})