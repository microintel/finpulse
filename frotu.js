
let frotel = document.getElementById("frodatr");
function undis(x){

let m=document.getElementsByClassName(x);

for(let x=0;x<m.length;x++){

if(m[x].style.display!=="none"){
m[x].style.display="none";

}else{
m[x].style.display="";

}


}

/*
    document.querySelectorAll(x).forEach((m)=>{
    let len = parseInt(m.children.length);
    
    for(let x=0;x<len;x++){
    
    if(m.children[x].style.display=="none"){
    m.children[x].style.display="";
    }else{
    m.children[x].style.display="none"
    }
    
    }
   // ald=="none" ? ald= "" : ald= "none";
    
    });
    
    */
    famtC();
    }
    
    
    
    
    function nknall(){
    
    
    
    document.querySelectorAll(".famt").forEach((m)=>{
    
    if( m.parentNode.style.display!=="none"){
    m.parentNode.style.display="none";
    }else{
    
    m.parentNode.style.display="";
    }
    
    });
    famtC();
    }
    
    
    
function remfro(x){

    let di= x.parentNode.children[0].innerHTML;
    let did=x.parentNode.children[1].innerHTML;
    let dide= x.parentNode.children[2].innerHTML;
    const ran = Math.floor(1000 + Math.random() * 9000);
    
    Swal.fire({
    title: `Verify OTP : ${ran}`,
    html: `
    <h5> Are U Sure To Delete This Record <br><br> <span style="color:red"> Amount : </span> ${di} <br> <span style="color:red"> Date : </span> ${did} <br> <span style="color:red"> Descryption : </span> ${dide} </h5>
    <input id="myInp" 
    type="number" 
    inputmode="numeric" 
    pattern="[0-9]*" 
    placeholder="OTP"
    autocomplete="off" />
    `,
    showCancelButton: true,
    confirmButtonText: 'Submit',
    cancelButtonText: 'Cancel',
    preConfirm: () => {
    const input = document.getElementById('myInp').value;
    if (!input) {
    Swal.showValidationMessage('You must enter a OTP!');
    } else if (input !== ran.toString()) {
    Swal.showValidationMessage('OTP does not match!');
    }
    return input;
    }
    }).then((result) => {
    if (result.isConfirmed) {
    
    x.parentNode.remove();
    frinadd();
    frexadd()
    famtC();
    addCats();
    Swal.fire('Success', 'Record Deleted from FROTU', 'success');
    }
    });
    
   
    }
    
    
    
    
    
    
    
    function addCats(){
    let ffamt=0;
    let ffrew=0;
    let ffpass=0;
    let ffun=0;
    let ffov=0;
    let ffoth=0;
    document.querySelectorAll(".free").forEach((x)=>{ ffamt+=parseInt(x.children[0].innerHTML) });
    document.querySelectorAll(".reward").forEach((x)=>{ ffrew+=parseInt(x.children[0].innerHTML) });
    document.querySelectorAll(".passive").forEach((x)=>{ ffpass+=parseInt(x.children[0].innerHTML) });
    document.querySelectorAll(".unknown").forEach((x)=>{ ffun+=parseInt(x.children[0].innerHTML) });
    document.querySelectorAll(".overtime").forEach((x)=>{ ffov+=parseInt(x.children[0].innerHTML) });
    document.querySelectorAll(".other").forEach((x)=>{ ffoth+=parseInt(x.children[0].innerHTML) });
    document.getElementById("ffr").innerHTML= ffamt;
    document.getElementById("frew").innerHTML= ffrew;
    document.getElementById("fpas").innerHTML= ffpass;
    document.getElementById("fun").innerHTML= ffun;
    document.getElementById("fot").innerHTML= ffov;
    document.getElementById("fo").innerHTML= ffoth;
    }
    
    
    
    
    async function addFrotu() {
    const { value: v } = await Swal.fire({
    title: "Enter Frotu Input",
    html:
    `<input id="a" type="number" class="swal2-input" placeholder="Amount"><br><br>` +
    `<select id="c" class="swal2-input">
    <option value="">Select Category</option>
    <option value="free">Free</option>
    <option value="reward">Rewards / Refunds </option>
    <option value="passive"> Passive Income </option>
    <option value="unknown"> Unknown </option>
    <option value="overtime"> Over Time </option>
    <option value="other"> Others </option>
    </select><br><br>` +
    `<input id="d" type="date" class="swal2-input"><br><br>` +
    `<input id="ds" class="swal2-input" placeholder="Description">`,
    focusConfirm: false,
    preConfirm: () => {
    let a = document.getElementById("a").value;
    let c = document.getElementById("c").value;
    let d = document.getElementById("d").value;
    let ds = document.getElementById("ds").value;
    if (!a || !c || !d || !ds) return Swal.showValidationMessage("All fields required");
    return { a, c, d, ds };
    }
    });
    if (v){ 
    
    let sa=`
    <td onclick="remfro(this)" class="famt"> ${v.a}</td> <td onclick="remfro(this)">${v.d}</td> <td onclick="remfro(this)"> ( ${v.c} ) ${v.ds} </td>
    `;
    
    let nee= document.createElement("tr");
    nee.className=v.c;
    nee.innerHTML=sa;
    nee.onclick= function(){
    remfro(this)
    };
    
    
    frotel.insertBefore(nee,frotel.firstChild);
    frinadd();
    famtC();
    addCats();
    calAFE();
    
    };
    }
    
    
    
    
    
    
    function pri(x){
    if(x=='hover'){
    document.getElementsByClassName(x.className)[0].className="bi bi-printer-fill";
    
    }
    else{
    document.getElementsByClassName(x.className)[0].className="bi bi-printer-fill";
    // window.print();
    get();
    }
    }
    
    
    function famtC(){
    
    let fam=document.getElementsByClassName("famt");
    let fsum=0;
    for(let f=0;f<fam.length;f++){
    if(fam[f].closest('tr').style.display !=='none'){
    fsum+=parseInt(fam[f].innerHTML);
    }
    
    
    }
    //alert(fsum);
    document.getElementById("fsu").innerHTML=`&Sigma; = ${fsum}`;
    glofIN=parseInt(fsum);
    }
    
    famtC();
    
    function srh() {
    const searchValue = document.getElementById('sea').value.toLowerCase();
    const rows = document.querySelectorAll('#tabgif tbody tr');
    
    rows.forEach(row => {
    const cells = row.getElementsByTagName('td');
    let matchFound = false;
    
    for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent.toLowerCase().includes(searchValue)) {
    matchFound = true;
    break;
    }
    }
    
    row.style.display = matchFound ? '' : 'none';
    famtC();
    });
    
    famtC();
    }
    
    addCats();