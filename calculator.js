let inp=document.getElementsByTagName("input");
let btn=document.getElementsByTagName("button");
for(let i=0;i<btn.length; i++){
    btn[i].addEventListener("click" ,function(){
        if(btn[i].innerText=="C"){
           inp[0].value="";
        }
        else if(btn[i].innerText=="DEL"){
          let curr=inp[0].value;
          inp[0].value=curr.slice(0,-1);
          
        } 
        else if(btn[i].innerText=="="){
           let curr= eval(inp[0].value);
           inp[0].value=curr
        }  
    else{
      // inp[0].value+=btn[i].innerText;
        if(i==0){
           inp[0].value.replace(inp[0].value, btn[i].innerText);
         }
        else{
        inp[0].value+=btn[i].innerText;
    }
       
      
    }
    });
 }