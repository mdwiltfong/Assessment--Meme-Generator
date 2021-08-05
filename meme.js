let form_meme = document.getElementById(`form_meme`);
let meme= form_meme.querySelectorAll(`div`);
let tp =meme[0].children[0];
let img =meme[0].children[1];
let bt =meme[0].children[2];


console.log(meme[0].children)

document.addEventListener('DOMContentLoaded',()=>{
    let data= JSON.parse(localStorage.getItem(`meme`))|| [];
    tp.innerText=data.top;
    img.setAttribute('src',`${data.url}`)
    bt.innerText=data.bottom;
    console.log(data);
})

