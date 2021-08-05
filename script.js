let gen_btn=document.querySelector("button");
let btm_text=document.getElementById(`bottom_text`);
let tp_text=document.getElementById(`top_text`);
let img_link=document.querySelector(`#URL`);
let form = document.querySelector(`form`);

form.addEventListener('submit',(e)=>{
    
    storeMeme(img_link.value,tp_text.value,btm_text.value)
  
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

