var modal = document.getElementById("myModal");
var img = document.getElementById("myImage");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// When you click on the image
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// When the close button is clicked
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}
