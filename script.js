let gen_btn=document.querySelector("button");
let btm_text=document.querySelector(`input[name="Bottom Text]`);
let tp_text=document.querySelector(`input[name="Top Text]`);
let img_link=document.querySelector(`#URL`);
let form = document.querySelector(`form`);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    storeMeme(img_link.value,)
    console.log(`submit`)
})





function storeMeme(url,top,bottom){
let data={
    url:url,
    top:top,
    bottom:bottom,
}
try{
    
    sessionStorage(data);
    console.log(`Stored`)
}catch(error){
    console.log(error)
}


}

