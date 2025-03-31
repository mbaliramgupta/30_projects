let img=document.getElementById("eyeimg");
let input=document.getElementById("input");

img.onclick=function(){
    if(input.type=="password"){
        input.type="text";
        img.src="eye-icons/eye-open.png";
    }
    else{
        input.type="password";
        img.src="eye-icons/eye-close.png";
    }

}