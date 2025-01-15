const password=document.getElementById("password");
const random="ABCDEFGFIJKLMNOPQRSTUVWXYZabcdefghijklnopqrstuvwxyz1234567890~!@#$%^&*():;?"
let pass=0;
let length=12;
function generate(){
for(let i=0;i<11;i++){
    pass+=random[Math.floor(Math.random()*random.length)];
}
password.value=pass;
}

function copypass(){
    password.select();
    document.execCommand("copy");
    
}