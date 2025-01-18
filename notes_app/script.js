const notescontainer=document.querySelector(".notes-container");
const createbtn=document.querySelector(".btn");
let notes=document.querySelector(".input-box");

function shownotes(){
    notescontainer.innerHTML=localStorage.getItem("notes");
}
shownotes();
function updatestorage(){
      localStorage.setItem("notes",notescontainer.innerHTML);
}


createbtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
})
notescontainer.addEventListener("click",function(e){
       if(e.target.tagName=="IMG"){
        e.target.parentElement.remove();
        updatestorage();
       }
       else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updatestorage();
            }
        })
       }
      
})
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})