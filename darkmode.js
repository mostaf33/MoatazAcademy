           // ========== SCRIPT JS========== //
var icon =document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        icon.src ="assets/images/sun.png";
        }else{
            icon.src ="assets/images/moon.png";
        }
}
           // ========== The code has expired ========== //