
function expcatvi(x,y){

let ex = document.querySelectorAll(`[data-category="${x}"]`);
ex.forEach((v)=>{
if(v.style.display!=="none"){
v.style.display="none";
y.style.backgroundColor="var(--w)";
v.style.backgroundColor="var(--w)";
}else{
v.style.display="flex";
y.style.backgroundColor="var(--exp)";
v.style.backgroundColor="grey";
}


});
Swal.fire({
  title:x,
  text: "Category Displayed Successfully!",
  icon: "success"
});
location.href="#ppr";
}


function hiexpcat(xv){
if(xv.checked){

document.querySelectorAll(".trans").forEach((nk)=>{

nk.style.display="none";
});
location.href="#ppr";
Swal.fire({
  text: "All Category Hiden!",
  icon: "success"
});

document.getElementById("cheklab").textContent="Display All Category";
}else{
document.querySelectorAll(".trans").forEach((nk)=>{

nk.style.display="flex";

});
location.href="#ppr";
Swal.fire({
  text: "All Category Displayed!",
  icon: "success"
});

document.getElementById("cheklab").innerText="Hide All Category";

}


}

