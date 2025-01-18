let userinput=document.getElementById("date");
userinput.max=new Date().toISOString().split("T")[0];
let result=document.getElementById("result");

function calculateage(){
      let birthday=new Date(userinput.value);
      if(!userinput.value){
        result.textContent = "Please Enter Valid Data!";
      }
      else{
      let d1=birthday.getDate();
      let m1=birthday.getMonth()+1;
      let y1=birthday.getFullYear();

      let today=new Date();

      let d2=today.getDate();
      let m2=today.getMonth()+1;
      let y2=today.getFullYear();
      
      let d3,m3,y3;

      y3=y2-y1;

      if(m2>=m1){
        m3=m2-m1;
      }
      else{
        y3--;
        m3=12+m2-m1;
      }
      if(d2>=d1){
        d3=d2-d1;
      }
      else{
             m3--;
             d3=getdaysinmonth(y1,m1)+d2-d1;
      }
      if(m3<0){
        m3=11;
        y3--;
      }
      result.innerHTML=`You are <span>${y3}</span> year, <span>${m3}</span> month & <span>${d3}</span> days old`;
    }
}

function getdaysinmonth(year,month){
        return new Date(year,month,0).getDate();
}