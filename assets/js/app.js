var pandas=document.getElementsByClassName("imgPandas");
var columna=document.getElementsByClassName("col");
var btnClose=document.getElementsByClassName("btnClose");
var restaurar=document.getElementById("restaurar");
var extincion=document.getElementById("extincion");
var origen=document.getElementById("origen");

//Closing Pandas
btnClose[0].addEventListener('click',function(e) {
      e.preventDefault();
  pandas[0].style.display="none";
});
btnClose[1].addEventListener('click',function(e) {
      e.preventDefault();
  pandas[1].style.display="none";
});
btnClose[2].addEventListener('click',function(e) {
      e.preventDefault();
  pandas[2].style.display="none";
});
btnClose[3].addEventListener('click',function(e) {
      e.preventDefault();
  pandas[3].style.display="none";
});
//
origen.addEventListener('click',function(e) {
      e.preventDefault();
      if(columna[0].style.visibility=="hidden") {
        columna[0].style.visibility="visible"
        }
      else{
        columna[0].style.visibility="hidden";
        }
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
restaurar.addEventListener('click',function(e) {
    e.preventDefault();
    for(var i=0;i<pandas.length;i++){
        pandas[i].style.display="inline-block";
      }
});
