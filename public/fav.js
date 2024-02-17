
window.onload=function(){
    var i=0;
    var Img=[];
    window.addEventListener('click', function(event){
        var clicked = event.target
        var plus = document.getElementsByClassName("plus");
        var minus=document.getElementsByClassName("minus");
        if(clicked.className==="plus"){
            // console.log("bvvv");
            let img=document.createElement("img");
            document.body.appendChild(img);
            img.className="imgfav";
            var s="fav";
            i=i+1;
            s+=""+i;
            console.log(i);
            s+=".png"
            console.log(s);
            img.src=s;
            Img.push(img);
            localStorage.setItem("images", JSON.stringify(Img));
            // this.localStorage.setItem("img", img);
        }

        if (clicked.className === "minus") {
            var storedImages = localStorage.getItem("images");
            if (storedImages) {
              images = JSON.parse(storedImages); // restaurează array-ul de imagini din ls
     
              if (Img.length > 0) {
                var ultima = Img.pop(); 
                ultima.parentNode.removeChild(ultima); 
                localStorage.setItem("images", JSON.stringify(Img)); //!! in ls nu putem salva poze
                i = i - 1;
              }
            }
        }


        // if(clicked.className==="minus"){
        //     var ultima=this.localStorage.getItem("img");
        //     console.log(ultima);
        //         ultima.parentNode.removeChild(ultima);
        //         i=i-1;
            // // console.log("bvvvcrcc");
            // var poze=document.getElementsByClassName("imgfav");
            // this.document.body.removeChild(LastChild);
            // // for(var j=1;j<=i;j++){
            // //     if(poze[j].innerHTML==="fav"+i+".png"){
            // //         this.document.body.removeChild(poze[i]);
            // //         break;
            // //     }
            // // }
            // i-=1;
        // }


    });
    var cul=["white", "black"];
    var k=0;
    var c=setInterval(function(){
        var msg=document.getElementsByClassName("mesaj");
        console.log(msg[0]);
        msg[0].style.color=cul[k%2];
        k+=1;
    },1000)

    setTimeout(function() {
        clearInterval(c);
      }, 30000);

}