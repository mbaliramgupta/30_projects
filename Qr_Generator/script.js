const inputurl=document.getElementById("inputurl");
const qrimage=document.getElementById("qrimage");
const imagebox=document.querySelector(".imgbox");

function generateqr(){
    if(inputurl.value.length>0){
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputurl.value;
    imagebox.classList.add("show-img");
    }
    else{
        inputurl.classList.add('error');
        setTimeout(()=>{
            inputurl.classList.remove('error');
        },1000);
    }
                 
}