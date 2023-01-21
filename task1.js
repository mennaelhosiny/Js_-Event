let img=document.querySelectorAll(".images img");
img.forEach(function(move){
    move.onmouseover=function(){
    move.style.width='500px'
    move.style.hieght='500px'
    move.style.borderRadius='20px'
    move.style.border='2px solid white'
};
move.onmouseout=function(){
    move.style.width="80px";
    move.style.hieght='500px'
}
});