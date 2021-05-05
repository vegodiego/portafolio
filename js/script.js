"use strict"

//Llamado de etiquetas a usar en evntos
var i = document.getElementsByTagName("i");
var div = document.getElementsByTagName("div");
var a = document.getElementsByTagName("a");


//Eventos para el encabezado
i[0].addEventListener("click",function(){
	div[3].style.right= "50px";
	i[1].style.display= "block";
	i[0].style.display= "none";
	
});
i[1].addEventListener("click",function(){
	div[3].style.right= "-300px"
	i[1].style.display= "none";
	i[0].style.display= "block";
});


//Eventos para los proyectos en make it real

a[2].addEventListener("mouseover",function(){
	div[13].style.visibility= "visible";
	div[13].style.opacity= "1";
});
a[2].addEventListener("mouseout",function(){
	div[13].style.visibility= "hidden";
	div[13].style.opacity= "0";
});
a[3].addEventListener("mouseover",function(){
	div[14].style.visibility= "visible";
	div[14].style.opacity= "1";
});
a[3].addEventListener("mouseout",function(){
	div[14].style.visibility= "hidden";
	div[14].style.opacity= "0";
});
a[4].addEventListener("mouseover",function(){
	div[15].style.visibility= "visible";
	div[15].style.opacity= "1";
});
a[4].addEventListener("mouseout",function(){
	div[15].style.visibility= "hidden";
	div[15].style.opacity= "0";
});
a[5].addEventListener("mouseover",function(){
	div[16].style.visibility= "visible";
	div[16].style.opacity= "1";
});
a[5].addEventListener("mouseout",function(){
	div[16].style.visibility= "hidden";
	div[16].style.opacity= "0";
});
a[6].addEventListener("mouseover",function(){
	div[17].style.visibility= "visible";
	div[17].style.opacity= "1";
});
a[6].addEventListener("mouseout",function(){
	div[17].style.visibility= "hidden";
	div[17].style.opacity= "0";
});
a[7].addEventListener("mouseover",function(){
	div[18].style.visibility= "visible";
	div[18].style.opacity= "1";
});
a[7].addEventListener("mouseout",function(){
	div[18].style.visibility= "hidden";
	div[18].style.opacity= "0";
});




