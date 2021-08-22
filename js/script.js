var req = new XMLHttpRequest();
req.open("GET", "./json/image_list.json");
req.onreadystatechange = function(){
    if(this.readyState == 4) {
        //console.log(this.response);
        var data = JSON.parse(this.response);
        for(var i = 0; i < data.length; i++){
            var divimg = document.createElement("divimg");
            divimg.setAttribute("class","image");
            var img = document.createElement("img");
            img.src = data[i];
            divimg.appendChild(img);
            document.body.appendChild(divimg);
        }
    }
}
req.send();