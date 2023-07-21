
/*
const myLabel = document.getElementById("myLabel");

update();
setInterval(update,1000);
function update()
{
    let date= new Date();
    myLabel.innerHTML = formatTime(date) ;

    function formatTime(date){
        let hours= date.getHours();
        let minutes= date.getMinutes();
        let seconds= date.getSeconds();
        let amOrpm= hours>= 12? "pm" : "am";
        hours=(hours%12)|| 12;

        hours=formatZeroes(hours);
        minutes=formatZeroes(minutes);
        seconds=formatZeroes(seconds);
        return`${hours}:${minutes}:${seconds}${amOrpm} `;

    }

    function formatZeroes(time)
    {
        time=time.toString();
        return time.length <2 ? "0" + time:time ;
    }
}
*/





// const element = document.getElementById("myButton");
// const element= document.body;
// element.onclick=doSomething;
// element.onload = doSomething;
// const element=document.getElementById("myText");
// element.onchange = doSomething;


// const element= document.getElementById("myDiv");

// element.onmouseover = doSomething;
// element.onmouseout=doSomethingElse;
// element.onmousedown=doSomething;
 // element.onmouseup=doSomethingElse;

/*function doSomething(){
    // alert("You did something");
    element.style.backgroundColor="red";
}

function doSomethingElse(){
    // alert("You did something");
    element.style.backgroundColor="lightgreen";
}
*/





/*const myButton=document.querySelector("#myButton");
const myImg=document.querySelector("#myImg");



myButton.addEventListener("click",()=>{
    if(myImg.style.visibility == "hidden")
    {
        myImg.style.visibility="visible";
    }
    else{
        myImg.style.visibility ="hidden";
    }
}


)
*/


/*const myDiv=document.getElementById("myDiv"); 

window.addEventListener("keydown", move);
let x=0;
let y=0;
function move(event){
  switch(event.key){


    case "ArrowDown":
        y+=5;
        myDiv.style.top=y+ "px";
        break;
    
    case "ArrowUp":
            y-=5;
            myDiv.style.top=y+ "px";
            break;
    case "ArrowRight":
            x+=5;
            myDiv.style.left=x+ "px";
            break;
     case "ArrowLeft":
            x-=5;
            myDiv.style.left=x+ "px";
            break;        
  }
}

*/



/*const myButton=document.getElementById("myButton");
const myAnimation=document.getElementById("myDiv");


myButton.addEventListener("click",begin);

function begin(){
    let timerId=null;
    let x=0;
    let y=0;
    timerId=setInterval(frame,5);
    function frame(){
        if(x>=200){
            clearInterval(timerId);
        }
        else{
            x+=1;
            myAnimation.style.left=x+"px";
        }
    }

}

*/  



/*let canvas=document.getElementById("myCanvas");

let context= canvas.getContext("2d");

context.beginPath();
    context.moveTo(0,0);
    context.lineTo(250,250);
context.stroke();
*/
  setCookie("email","SPonge@gmail.com",365);

console.log(document.cookie);

function setCookie(name,value,daysToLive){
    const date=new Date();
    date.setTime(date.getTime()+ daysToLive*24*60*60*1000);
    let expires="expire"+date.toUTCString();
   document.cookie=`${name}=${value}; ${expires}; path=/`;
}




function deleteCookie(){
    setCookie(name,null,null);
}

function getCookie(name)
{
    const cDecoded= decodeURIComponent(document.cookie);
    console.log(cDecoded);
}











































































