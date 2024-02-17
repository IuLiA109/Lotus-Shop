function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
}

// var div=document.getElementsByClassName("container");

window.onload=function(){
    var c=["red","orange","yellow","green","blue","purple", "pink", "gray", "brown","lightcoral"];
    var data = new Date();
    var ora=data.getHours();
    var bd=document.body.getElementsByTagName("body");
    console.log(bd);
    var r=rand(0,9);
    if(ora>8){
        document.body.style.backgroundColor= c[r];
    }}

window.addEventListener('click', function(event){
    var container = document.getElementsByClassName("container");
    // console.log(container);
    var containerRect = container[0].getBoundingClientRect();

    var top = containerRect.top;
    var bottom = containerRect.bottom;
    var left = containerRect.left;
    var right = containerRect.right;
    var x=event.clientX;//left
    var y=event.clientY; //top
    // console.log("X:"+x);
    // console.log("Y:"+y);
    // console.log("left:"+left);
    // console.log("bottom:"+bottom);
    if( x<left || x>right||y>bottom || y<top){
        let img=document.createElement("img");
        document.body.appendChild(img);
        img.className="imglog";
        img.src="poza_log.png";
        img.style.position="absolute";
        img.style.left=event.clientX + "px";
        img.style.top=event.clientY + "px";
    }
});

