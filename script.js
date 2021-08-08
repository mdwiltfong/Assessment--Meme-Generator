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
let btn_save=document.getElementById(`save`);
let btn_nope=document.getElementById(`nope`);
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
        
    } else {
        alert(`Please fill out the form to continue!`)
    }

})
//saves memes if user likes image 
btn_save.addEventListener('click',(e)=>{
    let newMeme = new Meme(meme_select.value, topText.innerText, bottom.innerText, i);
        console.log(newMeme);
        localStorage.setItem(`meme${i+1}`, JSON.stringify(newMeme));
        console.log(`SAVED!`)
})
//reloads page if user doesn't like meme they've created
btn_nope.addEventListener('click',()=>{
    location.reload();
})
//Loads localstorage containing user's saved memes
window.addEventListener(`DOMContentLoaded`, () => {
    if (!datas) {
        console.log(`Waiting for bodacious meme`)
    }
  
for(let j=0;j<i;j++){
    let img = document.createElement(`img`);
    let p_top=document.createElement(`p`);
    p_top.setAttribute(`id`,`top_preview`);
    let p_btm=document.createElement(`p`);
    p_btm.setAttribute(`id`,`bottom_preview`);
    let div=document.createElement(`div`);
    p_top.innerText=JSON.parse(datas[j]).topText;
    p_btm.innerText=JSON.parse(datas[j]).bottomText;
    
    img.setAttribute(`src`,`./assets/${JSON.parse(datas[j]).path}`)
    img.setAttribute(`key`,`${JSON.parse(datas[j]).index}`);
    div.append(p_top);
    div.append(img);
    div.append(p_btm);
    
    container.append(div);
    
}


})
//Deletes user's stored memes
recImages.addEventListener(`dblclick`,(e)=>{
let parent=e.target.parentElement;
let key=e.target.getAttribute('key');
console.log(key++);
console.log(e.target)
localStorage.removeItem(`meme${key++}`);
while(parent.firstChild){
    parent.removeChild(parent.firstChild);
}

})
//creates new objects
function Meme(url, top, bottom, index) {
    this.path = url,
        this.topText = top,
        this.bottomText = bottom,
        this.index=index
}
//Help converts localstorage to an array
function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}