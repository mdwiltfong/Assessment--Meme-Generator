let gen_btn=document.querySelector("button");
let btm_text=document.getElementById(`bottom_text`);
let tp_text=document.getElementById(`top_text`);
let img_link=document.querySelector(`#URL`);
let form = document.querySelector(`form`);
let input= document.getElementById(`input_field`);
let form_meme = document.getElementById(`form_meme`);
let meme= form_meme.querySelectorAll(`div`);
let tp =meme[0].children[0];
let img =meme[0].children[1];
let bt =meme[0].children[2];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    input.style.display=`none`
    form_meme.style.display=`block`
    tp.innerText=tp_text.value;
    bt.innerText=btm_text.value;  
    img.setAttribute('src',`${img_link.value}`)  
})




