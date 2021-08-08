let gen_btn = document.querySelector("button");
let btm_text = document.getElementById(`bottom_text`);
let tp_text = document.getElementById(`top_text`);
let form = document.getElementById(`form`);
let form_meme = document.querySelector(`#form_meme`);
let meme_select = document.getElementById(`meme_select`);
let img = document.getElementById(`meme`);
let topText = document.getElementById(`top`);
let bottom = document.getElementById(`bottom`);
let last_four = document.getElementById(`last_four`);
let recImages = document.getElementById(`images`);
let datas = allStorage();
console.log(datas);
let container = document.getElementById(`images`);
console.log(container);
let i = localStorage.length;
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (meme_select.value && btm_text.value && tp_text.value) {
        img.setAttribute('src', `./assets/${meme_select.value}`);
        console.log(img.getAttribute(`src`))
        form.style.display = 'none';
        form_meme.style.display = `block`;
        bottom.innerText = btm_text.value;
        topText.innerText = tp_text.value;
        let newMeme = new Meme(meme_select.value, topText.innerText, bottom.innerText, i);
        console.log(newMeme);
        localStorage.setItem(`meme${i+1}`, JSON.stringify(newMeme));
    } else {
        alert(`Please fill out the form to continue!`)
    }

})

window.addEventListener(`DOMContentLoaded`, () => {
    if (!datas) {
        console.log(`Waiting for bodacious meme`)
    }
  
for(let j=0;j<i;j++){
    let img = document.createElement(`img`);
    img.setAttribute(`src`,`./assets/${JSON.parse(datas[j]).path}`)
    container.append(img);
}


})



function Meme(url, top, bottom, index) {
    this.path = url,
        this.topText = top,
        this.bottomText = bottom
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}