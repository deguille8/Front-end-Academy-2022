document.getElementById("edad").addEventListener("click",function(){
    if (document.getElementById("age").style.display === "none") {
        document.getElementById("age").style.display = "contents";
    } else {
        document.getElementById("age").style.display = "none";
    }
})
document.getElementById("domicilio").addEventListener("click",function(){
    if (document.getElementById("adress").style.display === "none") {
        document.getElementById("adress").style.display = "contents";
    } else {
        document.getElementById("adress").style.display = "none";
    }
})
document.getElementById("telefono").addEventListener("click",function(){
    if (document.getElementById("phone").style.display === "none") {
        document.getElementById("phone").style.display = "contents";
    } else {
        document.getElementById("phone").style.display = "none";
    }
})
document.getElementById("mail").addEventListener("click",function(){
    if (document.getElementById("email").style.display === "none") {
        document.getElementById("email").style.display = "contents";
    } else {
        document.getElementById("email").style.display = "none";
    }
})
document.getElementById("redes").addEventListener("click",function(){
    if (document.getElementById("linkedin").style.display === "none") {
        document.getElementById("linkedin").style.display = "contents";
    } else {
        document.getElementById("linkedin").style.display = "none";
    }
})
document.getElementById("acerca_mi").addEventListener("click",function(){
    if (document.getElementById("acerca_de_mi").style.display === "none") {
        document.getElementById("acerca_de_mi").style.display = "contents";
    } else {
        document.getElementById("acerca_de_mi").style.display = "none";
    }
})

/*Código de los desplegables*/
var acc = document.getElementsByClassName("desplegable");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}