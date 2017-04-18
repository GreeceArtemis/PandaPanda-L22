var pandas=document.getElementsByClassName("imgPandas");
var columna=document.getElementsByClassName("col");
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var p3=document.getElementById("p3");
var p4=document.getElementById("p4");
console.log(columna);
var restaurar=document.getElementById("restaurar");
var extincion=document.getElementById("extincion");
var origen=document.getElementById("origen");
console.log(panda1);
console.log(panda1.value);
p1.addEventListener('click',function(e) {
      e.preventDefault();
  pandas[0].style.display="none";
});
p2.addEventListener('click',function(e) {
      e.preventDefault();
  pandas[1].style.display="none";
});
p3.addEventListener('click',function(e) {
      e.preventDefault();
  pandas[2].style.display="none";
});
p4.addEventListener('click',function(e) {
      e.preventDefault();
  pandas[3].style.display="none";
});
extincion.addEventListener('click',function(e) {
  e.preventDefault();
  if(columna[1].style.visibility=="hidden") {
    columna[1].style.visibility="visible"
  }
  else{
    columna[1].style.visibility="hidden";
  }

});
origen.addEventListener('click',function(e) {
      e.preventDefault();
      if(columna[0].style.visibility=="hidden") {
        columna[0].style.visibility="visible"
      }
      else{
        columna[0].style.visibility="hidden";
      }
});

restaurar.addEventListener('click',function(e) {
      e.preventDefault();
  pandas[0].style.display="inline-block";
  pandas[1].style.display="inline-block";
  pandas[2].style.display="inline-block";
  pandas[3].style.display="inline-block";
});
