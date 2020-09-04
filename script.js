let input = document.querySelector('input')
let button = document.querySelector('button')
let div = document.querySelector('div')
button.onclick=()=>{
    console.log(input.value)
    div.innerText = input.value;
}