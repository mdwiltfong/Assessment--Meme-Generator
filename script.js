let gen_btn=document.querySelector("button");
let btm_text=document.getElementById(`bottom_text`);
let tp_text=document.getElementById(`top_text`);
let form = document.getElementById(`form`);
let form_meme=document.querySelector(`#form_meme`);
let meme_select=document.getElementById(`meme_select`);
let img=document.getElementById(`meme`);
let topText=document.getElementById(`top`);
let bottom=document.getElementById(`bottom`);
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(meme_select.value && btm_text.value && tp_text.value){
        img.setAttribute('src',`./assets/${meme_select.value}`);
        console.log(img.getAttribute(`src`))
        form.style.display='none';
        form_meme.style.display=`block`;
        bottom.innerText=btm_text.value;
        topText.innerText=tp_text.value;
    }else{
        alert(`Please fill out the form to continue!`)
    }
    

})







function storeMeme(url,top,bottom){
let data={
    url:url,
    top:top,
    bottom:bottom,
}
try{
    
    localStorage.setItem(`meme`,JSON.stringify(data));
    console.log(`Stored`)
}catch(error){
    console.log(error)
}


}

