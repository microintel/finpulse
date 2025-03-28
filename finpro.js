function addLR(x,y){
       let par = x.parentNode.parentNode;
       
       Swal.fire({
       title: 'Enter details',
       html:
       '<input id="alr" type="number" class="swal2-input" placeholder="Amount"><br><br>' +
       '<input id="dlr" type="date" class="swal2-input"><br><br>' +
       '<input id="slr" class="swal2-input" placeholder="Description">',
       focusConfirm: false,
       preConfirm: () => {
       let a = document.getElementById('alr').value;
       let d = document.getElementById('dlr').value;
       let s = document.getElementById('slr').value;
       
       if (!a || !d || !s) {
       Swal.showValidationMessage('Please fill in all fields');
       return false;
       }
       
       return { a, d, s };
       }
       }).then(r => {
       if (r.isConfirmed) {
       let v = r.value;
       
       let sd = `
       <font ondblclick="remLR(this)" class="${y}">${v.a}</font>
       <font ondblclick="remLR(this)" class="lmode">${v.d}</font>
       <font ondblclick="remLR(this)" class="lmodes">${v.s}</font>
       `;
       
       let divg = document.createElement("div");
       divg.innerHTML = sd;
       divg.ondblclick= function(){
       remLR(this)
       };
       par.parentNode.children[1].prepend(divg);
       backRecADD();
       alve();
       }
       });
       }
       
       
       
       function remLR(v){
       let qu="";
       v.parentNode.className === "recdata" ? qu="recivale" : qu="borrowing";
       Swal.fire({
       title: `Are U Sure to delete this ${qu}?`,
       text: "You won't be able to undo this!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, delete it!"
       }).then((result) => {
       if (result.isConfirmed) {
       
       v.parentNode.removeChild(v);
       backRecADD();
       Swal.fire({
       title: "Deleted!",
       text: "Record has been deleted.",
       icon: "success"
       });
       alve();
       }
       });
       
       
       }
       
       
       
       
       function searLR(x){
       let i=x;
       let sss=0;
       let chlen = x.parentNode.parentNode.parentNode.children[1];
       let mx =i.parentNode.children[2];
       for(let xr=0;xr<chlen.children.length;xr++){
       let st= chlen.children[xr].children[2].innerHTML;
       if(st.toLowerCase().includes(i.value.toLowerCase())){
       
       chlen.children[xr].style.display="";
       
       }else{
       chlen.children[xr].style.display="none";
       }
       
       }
       if(chlen){
       for(let v=0;v<chlen.children.length;v++){
       if(chlen.children[v].style.display!=="none"){
        sss+=parseInt(chlen.children[v].children[0].innerHTML);
        mx.innerHTML=sss;
       }
       }
       
       }
      // sss+=parseInt(chlen.children[xr].children[0].innerHTML);
       
       }
       
       let ranFill=0;
       function rangeNee(x){
       
       Swal.fire({
       title: 'Enter Range to Filter',
       html: '<input id="nranE" type="number" class="swal2-input" placeholder="Enter Range">',
       preConfirm: () => document.getElementById('nranE').value
       }).then(r => {
       if (r.isConfirmed) {
       let v = r.value;
       ranFill=parseInt(v);
       randE();
       }
       });
       
       }