const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if(clear){
    clear.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}