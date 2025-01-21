const api_key="https://api.quotable.io/random";
const newquote=document.getElementById("quote");
const writer=document.getElementById("writer");
 
async function getquotes(url) {
        
    const response=await fetch(url);
    var data=await response.json();
    newquote.innerHTML=data.content;
    writer.innerHTML=data.author;
    console.log(data);
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+newquote.innerHTML+"-----by "+writer.innerHTML,"Tweet Window","width=600, height=300");
}

getquotes(api_key);