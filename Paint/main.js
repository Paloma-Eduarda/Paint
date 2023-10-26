var mouseEvento = "empty"; 
var lastPositionOfX, lastPositionOfY; 

canvas = document.getElementById("myCanvas"); 

ctx = canvas.getContext("2d"); 
color = "black"; 
widthOfLine = 1; 

canvas.addEventListener("mousedown",my_mousedown); 

function my_mousedown(e){ 
    
    mouseEvento = "mousedown"; 
} 
    canvas.addEventListener("mouseup",my_mouseup);  
   
    function my_mouseup(e)
    {
         mouseEvento = "mouseup";
         } 
    canvas.addEventListener("mouseleave",my_mouseleave);
    
    function my_mouseleave(e)
    { 
        mouseEvento = "mouseleave"; 
    } 
    canvas.addEventListener("mousemove", my_mousemove); 
   
    function my_mousemove(e){ 

        currentPositionOfmouseX = e.clientX - canvas.offsetLeft; 
        currentPositionOfmouseY = e.clientY - canvas.offsetTop; 
   
        if(mouseEvento == "mousedown"){ 

            ctx.beginPath();
            ctx.strokeStyle = color; 
            ctx.lineWidth = widthOfLine; 
            ctx.moveTo(lastPositionOfX, lastPositionOfY); 
            ctx.lineTo(currentPositionOfmouseX, currentPositionOfmouseY); 
            ctx.stroke(); 
        } 
            
            lastPositionOfX = currentPositionOfmouseX;
            lastPositionOfY = currentPositionOfmouseY; 
        }
