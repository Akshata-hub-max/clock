let hrs=document.getElementById('hrs');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

setInterval(()=>{
    
    let time=new Date();
    
    hrs.innerHTML=time.getHours();
    min.innerHTML=time.getMinutes();
    sec.innerHTML=time.getSeconds();
},1000)


