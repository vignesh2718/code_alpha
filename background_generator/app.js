function changeMe(){
    var symbols,color;
    symbols="012345789ABC";
    color="#";
    for(var i=0;i<6;i++){
        color=color+symbols[Math.floor(Math.random()*10)]; 
    }
    document.body.style.backgroundColor = color;
    document.getElementById("code").innerHTML = color;

}