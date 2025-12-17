

let preNo = "";
let tranCon="";
let dadatra="";
let bt="transparent";
let a="white";
        let b="black";

function chgapval(){

let inca=[];
       let expa=[];
       let bala=[];
       document.querySelectorAll(".incomeColumn").forEach((x) => {
       
       if (x.parentNode.parentNode.style.display !== "none") {
       inca.push(parseInt(x.innerHTML));
       }
       });
       
       document.querySelectorAll(".exep").forEach((x) => {
       if (x.parentNode.parentNode.style.display !== "none") {
       expa.push(parseInt(x.innerHTML));
       }
       });
       
       document.querySelectorAll(".Abal").forEach((x) => {
       if (x.parentNode.parentNode.style.display !== "none") {
       bala.push(parseInt(x.innerHTML));
       }
       });
       
       
      setTimeout(()=>{
     
        backchhh(inca,expa,bala);
      },0);
}
function alve(){

let lendb=0;

const r = indexedDB.open("black");
        r.onsuccess = e => {
        const d = e.target.result;
        const t = d.transaction(["sst"], 'readwrite');
        const st = t.objectStore("sst");
        const nkn = st.get("nkncc");
       // let dbs={data:dataT};
        
        nkn.onsuccess=function(){
        
        let hel= nkn.result;
        lendb=hel;
        
        let texSu=0;
        let eveSu=0;
        
        document.getElementById('lenI').value=lendb.rtot;
        let otv=parseInt(document.getElementById('oth').value);
        let bI =parseInt(document.getElementById('bnkI').value);
        document.getElementById("alvvs").innerHTML=lendb.rtot+otv+bI+"<sub>rs</sub>";
        
        
        let tsu=document.getElementById("texta");
        texSu=eval(tsu.value);
        eveSu=lendb.rtot+texSu;
        document.getElementById("texsum").innerHTML=texSu;
        document.getElementById("evesum").innerHTML=eveSu;
        let ghy=(lendb.rtot+otv+bI)-lendb.btot;
        let xf=`Borrowings : ${lendb.btot} <br>
                Recivables : ${lendb.rtot}  <br>
                Bank Bal   : ${bI} <br>
                Cash Flow  : ${otv} <br><br>
           final Balance : ${ghy}
        
        `;
        document.getElementById("finalAc").innerHTML=xf;
        
        
        };
        
        
        };

   
      
       
        }
        alve();



      
       function addTr() {
       let tA = "";
       let tD = "";
       let tDes = "";
       let cvcv = document.getElementById(preNo).parentNode.children[4].innerHTML;
       return Swal.fire({
       title: 'Enter Expense',
       html:
       `<h3> Current Bal : ${cvcv}</h3>
       <input id="at" class="swal2-input" placeholder="Amount" type="number" style="width:100%;"><br><br>` +
       `<input id="dt" class="swal2-input" placeholder="Date" type="date" style="width:100%;"><br><br>` +
       `<select id="ct" class="swal2-input" style="width:100%;">
       <option value="apparel">Apparel</option>
<option value="baby"> baby </option>
<option value="bakery-pups"> bakery/pups/ </option>
<option value="beauty">Beauty</option>
<option value="bigbasket"> Bigbasket </option>
<option value="biscuit"> biscuit/ </option>
<option value="blink-it"> blink-it </option>
<option value="bro-sis">Brother / Sister</option>
<option value="car">Car</option>
<option value="clothing">Clothing</option>
<option value="donate">Donate</option>
<option value="drink-juices"> drink/juices </option>
<option value="education">Education</option>
<option value="egg"> egg </option>
<option value="electronics">Electronics</option>
<option value="eletronics"> Eletronics </option>
<option value="entertainment">Entertainment</option>
<option value="family">Family</option>
<option value="food">Food</option>
<option value="friends">Friends</option>
<option value="gift">Gift</option>
<option value="health">Health</option>
<option value="help"> help </option>
<option value="home">Home</option>
<option value="housing">Housing</option>
<option value="little-heart"> little heart </option>
<option value="milk-bread-biscuit-crud"> milk/bread/biscuit/crud </option>
<option value="mobile">Mobile</option>
<option value="mom-dad">Mother / Dad</option>
<option value="movie">Movie</option>
<option value="official-docs">Official Documents</option>
<option value="other"> Others </option>
<option value="party">Party</option>
<option value="personal-care">Personal Care</option>
<option value="pet">Pet</option>
<option value="recharge">Recharges</option>
<option value="repair">Repair</option>
<option value="samosa-outside"> samosa/outside/ </option>
<option value="self"> self </option>
<option value="shopping">Shopping</option>
<option value="snacks">Snacks</option>
<option value="social">Social</option>
<option value="sport">Sport</option>
<option value="style-fashion">Style / Fashion</option>
<option value="swiggy"> Swiggy </option>
<option value="telephone">Telephone</option>
<option value="tiffen-launch-palou"> tiffen/launch/palou </option>
<option value="tour">Tour</option>
<option value="transportation">Transportation</option>
<option value="travel">Travel</option>
<option value="vehicle">Vehicle</option>
<option value="wine-cigaratte"> wine/cigaratte.. </option>
<option value="wine-cigarette">Wine / Cigarette</option>
<option value="zomato"> Zomato </option>
<option value="zepto"> Zepto </option>
       <option value="other">Others</option>
       </select><br><br>` +
       `<input id="cnt" class="swal2-input" placeholder="Category Name" style="width:100%;">`,
       focusConfirm: false,
       preConfirm: () => {
       let v1 = document.getElementById('at').value.trim();
       let v2 = document.getElementById('dt').value;
       let v3 = document.getElementById('ct').value;
       let v4 = document.getElementById('cnt').value.trim();
       
       if (!v1 || !v2 || !v3 || !v4) {
       Swal.showValidationMessage('Fill all fields');
       return false;
       }else{
       tA=v1;
       tD=v2;
       tDes=v3;
       
       
       // tranCon=="mxx" ? console.log(123) : console.log(88);
       let p = document.getElementById(preNo);
       let pa = p.parentNode.parentNode.children[1];
         // alert(pa.innerHTML); 
       // event.preventDefault();
       
       
       if (preNo === "" || document.getElementById(preNo) === null) {
       return;
       
       }
       
       let stu = `
       <font>${tA}</font><font>${tD}</font><font>${v4}</font>
       `;
       let ppp1=p.parentNode.children[0].innerHTML;
       let ppp2=p.parentNode.children[3].innerHTML;
       let ppp3=p.parentNode.children[4].innerHTML;
       let epp=parseInt(ppp2)+parseInt(tA);
       
       if(parseInt(ppp1) >= epp){
       let diiv = document.createElement('div');
       diiv.className = "trans";
       diiv.setAttribute('data-category', v3 );
       diiv.innerHTML = stu;
       diiv.ondblclick = function(){
       transRem(this);
       };
       //parent.nodeName
       let pp1=p.parentNode.children[3].innerHTML;
       let pp2= p.parentNode.children[4].innerHTML;
       p.parentNode.children[3].innerHTML=parseInt(pp1)+parseInt(tA);
       p.parentNode.children[4].innerHTML=pp2-parseInt(tA);
       pa.appendChild(diiv);
       // drawChart();
       addclontr();
       dlastd(); 
       updateTotals();
       backINCADD();
       Swal.fire({
       title:"Transaction Added..",
       icon:"success"
       });
       }else{
       Swal.fire({
       title:"You Can't Add Transaction due to insufficient balance.",
       icon:"error"});
       
       }
       
       }
       }
       });
       
     
       
       }
       
       
       function transRem(x){
       let di= x.parentNode.children[0].innerHTML;
       let did=x.parentNode.children[1].innerHTML;
       let dide= x.parentNode.children[2].innerHTML;
      let pexp= x.parentNode.parentNode.parentNode.children[0].children[3];
      let pbal= x.parentNode.parentNode.parentNode.children[0].children[4];
      
       const ran = Math.floor(1000 + Math.random() * 9000);
       
       Swal.fire({
       title: `Verify OTP : ${ran}`,
       html: `
       <h5> Are U Sure To Delete This Transaction? <br><br>
       <span style="color:red"> Amount : </span> ${di} <br>
       <span style="color:red"> Date : </span> ${did} <br>
       <span style="color:red"> Description : </span> ${dide} </h5>
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
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       preConfirm: () => {
       const input = document.getElementById('myInp').value;
       if (!input) {
       Swal.showValidationMessage('You must enter an OTP!');
       } else if (input !== ran.toString()) {
       Swal.showValidationMessage('OTP does not match!');
       }
       return input;
       }
       }).then((result) => {
       if (result.isConfirmed) {
       let eee = parseInt(pexp.innerHTML);
       let bbb = parseInt(pbal.innerHTML);
       let amtt = parseInt(x.parentNode.children[0].innerHTML);
       
       pexp.innerHTML = eee - amtt;
       pbal.innerHTML = bbb + amtt;
       
       x.parentNode.remove();
       dlastdrem();
       backINCADD();
       famtC();
       addCats();
       add("frotu");
       
       Swal.fire({
       title: "Deleted!",
       text: "Transaction has been deleted.",
       icon: "success"
       });
       
       
       updateTotals();
       }
       });
       
       }
       
       
       function discr(x,y){
       
        preNo=y;
        let u= document.getElementById(y);
        if(parseInt(u.parentNode.children[0].innerHTML) === parseInt(u.parentNode.children[3].innerHTML)){
        tranCon="mxx";
        Swal.fire({text:"You Can't Add Transaction To This Income due to Insufficint Balance"});
        }else{
        
        tranCon="mx";
        addTr();
        /*
        let d=document.getElementById(x);
        d.style.display="flex";
        d.style.width="100vw";
        d.style.height="100vh";
        d.style.backgroundColor="var(--back)";
        */
        }
        }
        
        
        
        function clo(x){
        document.getElementById(x).style.display="none";
       // document.getElementById("cnrdi").style.display="none";
        }
        
        
        
        
        function theame(x){
        if(x=='b'){
        
        document.getElementsByClassName("nknth")[0].src="https://img.icons8.com/?size=100&id=Ppe22DwOvBTF&format=png&color=000000";
      // .src="https://img.icons8.com/?size=100&id=45475&format=png&color=1A1A1A";
        document.getElementById("mimg").src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000";
        document.getElementById("tttim").src="blk.gif";
        
        document.documentElement.style.setProperty('--w',"#FEFEFA");
        document.documentElement.style.setProperty('--b',"#301934");
        document.documentElement.style.setProperty('--tbor',"#F5F5F5");
        document.documentElement.style.setProperty('--back',"white");
        //document.documentElement.style.setProperty('--', );
       // document.getElementById("bori").src="https://img.icons8.com/?size=100&id=rRTAE6XGGP2Q&format=png&color=FFFFFF";
        document.getElementById(x).id="w";
        }
        if(x=='w'){
         
        document.getElementById("mimg").src="https://img.icons8.com/?size=100&id=36389&format=png&color=FFFFFF";
        document.getElementsByClassName("nknth")[0].src="https://img.icons8.com/?size=100&id=45475&format=png&color=FFFFFF";
        document.getElementById("tttim").src="blk.gif";
        document.documentElement.style.setProperty('--w',"black");
        document.documentElement.style.setProperty('--b',"white");
        document.documentElement.style.setProperty('--tbor',"#F5F5F5");
        document.documentElement.style.setProperty('--back',"black");
        //document.documentElement.style.setProperty('--', );
       // document.getElementById("bori").src="https://img.icons8.com/?size=100&id=rRTAE6XGGP2Q&format=png&color=000000";
        document.getElementById(x).id="b";
        
        }
        localStorage.setItem("theme",x);
        }
        
        
        
        let cin;
        let ratt=0;
        let cexp;
        let cbala;
        const rut = document.documentElement;
        
        function searTa() {
        let searT = document.getElementById("sinpp").value.trim().toLowerCase();
        let parD = document.getElementsByClassName('child');
        
        for (let i = 0; i < parD.length; i++) {
        let parDI = parD[i];
        let traDds = parDI.getElementsByClassName('trand');
        let tranDD = [];
        
        for (let j = 0; j < traDds.length; j++) {
        let traDd = traDds[j];
        let traIt = traDd.getElementsByClassName('trans');
        for (let k = 0; k < traIt.length; k++) {
        tranDD.push(traIt[k]);
        }
        }
        
        let fouM = false;
        
        let inccTe = parDI.querySelector('.incomeColumn').textContent.trim().toLowerCase();
        let datTe = parDI.querySelector('.dateColumn').textContent.trim().toLowerCase();
        let balTee = parDI.querySelector('.Abal').textContent.trim().toLowerCase();
        let exepTe = parDI.querySelector('.exep').textContent.trim().toLowerCase();
        let fomtext = parDI.querySelector('.fromm').textContent.trim().toLowerCase();
        
        if (inccTe.includes(searT) || datTe.includes(searT) || balTee.includes(searT) || exepTe.includes(searT) || fomtext.includes(searT)) {
        fouM = true;
        }
        
        
       parDI.style.display = fouM ? "flex" : "none";
        }
        
        updateTotals();
        
        chgapval();
        }
       
        function updateTotals() {
        let tttinc = 0;
        let tttexe = 0;
        let tttball = 0;
        
        let parD = document.getElementsByClassName('child');
        for (let i = 0; i < parD.length; i++) {
        let parDI = parD[i];
        if (parDI.style.display !== "none") { 
        let tranDD = parDI.getElementsByClassName('trans');
        
        for (let j = 0; j < tranDD.length; j++) {
        let transDiv = tranDD[j];
        if (transDiv.style.display !== "none") {
        let eexeD = transDiv.getElementsByClassName('mony')[0];
        
        if (eexeD) {
        tttexe += parseFloat(eexeD.textContent.trim().replace(/[^0-9.-]/g, '')) || 0;
        }
        
        }
        }
        document.getElementById('exex').innerHTML=tttexe;
        }
        }
        
        document.getElementById("allin").innerHTML = "IN " + tttinc;
        document.getElementById("exp").innerHTML = "EXP " + tttexe;
        document.getElementById("bal").innerHTML = "BAL " + tttball;
        gi();
        randE();
        let inca=[];
       let expa=[];
       let bala=[];
       document.querySelectorAll(".incomeColumn").forEach((x)=>{inca.push(parseInt(x.innerHTML))});
       document.querySelectorAll(".exep").forEach((x)=>{expa.push(parseInt(x.innerHTML))});
       document.querySelectorAll(".Abal").forEach((x)=>{bala.push(parseInt(x.innerHTML))});
       
      setTimeout(()=>{
       // backchhh(inca,expa,bala);
      },1000);
      
        }
       
       function gi(){
       let vvvx=0;
       let nnnx=0;
       let mmmx=0;
       
       let inco=document.getElementsByClassName('incomeColumn');
       let baco=document.getElementsByClassName('Abal');
       let exco=document.getElementsByClassName('exep');
       for(let x=0;x<inco.length;x++){
          if(inco[x].closest('.child').style.display!=="none"){
          vvvx+=parseInt(inco[x].innerHTML);
          cin=vvvx;
         }
      
       
       }
       for(let x=0;x<baco.length;x++){
       if(baco[x].closest('.child').style.display!=="none"){
       nnnx+=parseInt(baco[x].innerHTML);
       cexp=nnnx;
       }
       }
       
       for(let x=0;x<exco.length;x++){
       if(exco[x].closest('.child').style.display!=="none"){
       mmmx+=parseInt(exco[x].innerHTML);
       cbala=mmmx;
       }
       }
       document.getElementById("allin").innerHTML=vvvx;
       document.getElementById("bal").innerHTML =nnnx;
       document.getElementById("exp").innerHTML = mmmx;
       
       //drawChart(vvvx,nnnx,mmmx);
       
       gleE();
       function sumTxn() {
        const txns = document.querySelectorAll(".trans:not([style*='display: none'])");
        const sums = {};
    
        txns.forEach(txn => {
            let parent = txn.parentElement;
            let skipTxn = false;
    
            while (parent) {
                if (parent.classList.contains('child')) {
                    if (parent.offsetParent === null) {
                        skipTxn = true;
                        break;
                    }
                }
                parent = parent.parentElement;
            }
    
            if (skipTxn) return;
    
            const cat = txn.getAttribute("data-category") || "Uncategorized";
            const amt = parseFloat(txn.querySelector(".mony")?.textContent.trim()) || 0;
    
            sums[cat] = (sums[cat] || 0) + amt;
        });
    
        updateTbl(sums);
    }
    
    function updateTbl(data) {
        let tbl = document.getElementById("txnTbl");
    
        if (!tbl) {
            tbl = document.createElement("table");
            tbl.className = "expcate";
            tbl.id = "txnTbl";
            tbl.innerHTML = `<thead><tr><th>Category</th><th>Total</th></tr></thead><tbody></tbody>`;
    
            const container = document.getElementById("catdets");
            if (container) {
                container.appendChild(tbl);
            } else {
                console.error("'catdets' not.");
            }
        }
    
        const tbody = tbl.querySelector("tbody");
        tbody.innerHTML = "";
    
        for (const cat in data) {
            const row = document.createElement("tr");
            row.onclick= function (){
            expcatvi(cat,this);
            };
            row.innerHTML = `<td>${cat}</td><td>${data[cat].toFixed(2)}</td>`;
            tbody.appendChild(row);
        }
    }
    
    sumTxn();
    calcsmm();
    
    


       }
       
       
        updateTotals();
        
        
        function sea() {
        let searT = document.getElementById("seait").value.trim().toLowerCase();
        let parD = document.getElementsByClassName('child');
        
        for (let i = 0; i < parD.length; i++) {
        let parDI = parD[i];
        let traDds = parDI.getElementsByClassName('trand'); 
        let tranDD = [];
        
        for (let j = 0; j < traDds.length; j++) {
        let traDd = traDds[j];
        let traIt = traDd.getElementsByClassName('trans');
        for (let k = 0; k < traIt.length; k++) {
        tranDD.push(traIt[k]);
        }
        }
        
      let fouM = false;
        
        
        for (let j = 0; j < tranDD.length; j++) {
        let transDiv = tranDD[j];
        let transText = transDiv.textContent.trim().toLowerCase();
        if (transText.includes(searT)) {
        transDiv.style.display = "";
        fouM = true;
        } else {
        transDiv.style.display = "none"; 
        }
        }
        
        }
        updateTotals();
        //drawChart();
        dcc();
        gleE();
        randE();
        }
        
        
        function dd() {
        return;
        var data = google.visualization.arrayToDataTable([
        ['adapaavi', 'finpulse'],
        ['Income',cin],
        ['Expence',cbala],
        ['Balance',cexp]
        ]);
        alert(cexp);
        var options = {
        title:'jddmdm',
        legend:'none',
        pieHole: 0.50,
        backgroundColor: 'transparent',
        pieSliceTextStyle:{ color:'transparent'},
        titleTextStyle: { color:'white' },
        pieSliceBorderColor: 'black',
        chartArea: {
        left:10,
        top: 10,
        right: 10,
        bottom: 10 
        },
        
        slices: {
        0: { color:getComputedStyle(rut).getPropertyValue('--inc').trim()},
        1: { color: getComputedStyle(rut).getPropertyValue('--exp').trim() },
        2: { color: getComputedStyle(rut).getPropertyValue('--bal').trim() }
        }
        }
        
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
        randE();
        }
        function randE(){
        return;
        ratt=0;
        let ranChg= ranFill || 1000;
        document.getElementById("rsdi").innerHTML="";
        let almo = document.getElementsByClassName("mony");
        let almodes = document.getElementsByClassName("tdes");
        
        for(let x=0;x<almo.length;x++){
          if(almo[x].closest(".child").style.display!=="none" || almo[x].closest(".trans").style.display!=="none"){
            if((almo[x].closest(".child").style.display!=="none" && almo[x].style.display!=="none") && parseInt(almo[x].innerHTML)>=ranChg){
          let ft = document.createElement("font");
          
          ft.textContent =almo[x].innerHTML;
          document.getElementById("rsumi").textContent=`Over ${ranChg} is ${ratt}`;
          ratt+=parseInt(almo[x].innerHTML);
          
          ft.onclick = function() {
          alert(almo[x].innerHTML+" for "+almodes[x].innerHTML);
          };
          let mni=parseInt(almo[x].innerHTML);
          if (mni >= 500 && mni <= 1999) {
          ft.style.color=getComputedStyle(rut).getPropertyValue('--inc').trim();
          }
          else if (mni >= 2000 && mni <= 2999) {
          ft.style.color=getComputedStyle(rut).getPropertyValue('--exp').trim();
          }
          else if (mni >= 3000 && mni <= 3999) {
          ft.style.color=getComputedStyle(rut).getPropertyValue('--bal').trim();
          }
          else if (mni >= 4000 && mni <= 5999) {
          ft.style.color="brown";
          }
          else{
          ft.style.color=getComputedStyle(rut).getPropertyValue('--texp').trim();
          }
          
          
          let brr = document.createElement("p");
          brr.textContent="t";
          brr.style.margin="0px";
          brr.style.padding="0px";
          brr.style.color="transparent";
          document.getElementById("rsdi").appendChild(ft);
          document.getElementById("rsdi").appendChild(brr);
          
          
       }
   
       else{
      document.getElementById("rsumi").textContent="Over 0.5k is "+ratt;
       }
        }
        }
        document.getElementById("rsumi").textContent=`Over ${ranChg} is ${ratt}`;
        }
        
        
        
        function borww(x){
        return;
        let preDa=new Date();
        // let lendP=parseInt(prompt("Enter Password to proceed : "));
         if(true){
        document.getElementById("borwi").style.display=x;
        //document.getElementById("borwi").style.width="100%";
        
        document.getElementById("canb").style.display=x;
        }else{
         alert("Wrong Lend PassWord.");
         }
        }
        
       function appendC(){
        Swal.fire({
        title: 'Enter Data',
        html:
        `<input type="number" id="i" class="swal2-input" placeholder="Income"><br><br>` +
        `<input type="date" id="d" class="swal2-input"><br><br>` +
        `<input type="text" id="f" class="swal2-input" placeholder="From">`,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'OK',
        preConfirm: () => {
        let i = document.getElementById('i').value;
        let d = document.getElementById('d').value;
        let f = document.getElementById('f').value;
        if (!i || !d || !f) {
        Swal.showValidationMessage('Fill all');
        return false;
        }
        return { i, d, f };
        }
        }).then(r => {
        if (r.isConfirmed) {
        let i = parseInt(r.value.i);
        let d = r.value.d;
        let f = r.value.f;
        
        
        let ran=Math.floor(Math.random() * 99999);
        let ran1=Math.floor(Math.random() * 88889);
        let raa=String("abc"+ran1+ran);
        let ccc=`
        <div ondblclick="recRem(this)" class="idfeb">
        <font class="incomeColumn">${i}</font>
        <font class="dateColumn">${d}</font>
        <font class="fromm">${f}</font>
        <font class="exep"> 0 </font>
        <font class='Abal'>${i}</font>
        <font onclick="discr('anrdi',this.id)" id="${raa}"><i class="fa fa-plus adimg"></i></font>
        
        </div>
        <div class="trand">
        
        </div>
        
        `;
        let dii=document.createElement('div');
        dii.className='child';
        dii.innerHTML=ccc;
      //  let dial="New Record Created Scuessfully..\n Income : "+iA.value+"\n Date : "+iD.value+"\n From : "+iFF.value;
        Swal.fire({
        title:"Record Created Successfully",
        icon:'success'
        });
        let paren = document.getElementById("ppr");
        let refer = paren.firstChild;
        paren.insertBefore(dii, refer);
        dlastd();
        backINCADD();
        updateTotals();
        dcc();
        gleE();
        
        
        
        
        }
        });
        }
        
        function printe(){
        
        document.getElementById("alllvr").style.display="block";
        window.print();
        }
        
        
        function recRem(x){
        
        const ran = Math.floor(1000 + Math.random() * 9000);
        
        Swal.fire({
        title: `Verify OTP : ${ran}`,
        html: `
        <h5> Are U Sure To Delete This Record?<br><br>
        <span style="color:red">You won't be able to undo this!</span></h5>
        <input id="myInp" 
        type="number" 
        inputmode="numeric" 
        pattern="[0-9]*" 
        placeholder="Enter OTP"
        autocomplete="off" />
        `,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Submit',
        cancelButtonText: 'Cancel',
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        preConfirm: () => {
        const input = document.getElementById('myInp').value;
        if (!input) {
        Swal.showValidationMessage('You must enter an OTP!');
        } else if (input !== ran.toString()) {
        Swal.showValidationMessage('OTP does not match!');
        }
        return input;
        }
        }).then((result) => {
        if (result.isConfirmed) {
        x.parentNode.remove();
        Swal.fire({
        title: "Deleted!",
        text: "Record has been deleted.",
        icon: "success"
        });
        backINCADD();
        dlastdrem();
        updateTotals();
        dlastdrem();
        }
        });
        
        
       
        
        }
        
        
        
        
        
        
        
        function gleE() {
        if (cbala > cexp) {
        a = "#FF0000";
        } else if (cexp > cbala) {
        a = "#008000";
        } else {
        a = "#87CEEB";
        }
        
        // document.body.style.borderTop = `10px solid ${a}`;
        
        chthco(a);
        let c = b;
        b = a;
        a = c;
        
        setTimeout(gleE, 500);
        }
        
        gleE();
        
        
        
        
        function chthco(c) {
        let m = document.querySelector('meta[name="theme-color"]');
        if (!m) {
        m = document.createElement('meta');
        m.name = 'theme-color';
        document.head.appendChild(m);
        }
        m.setAttribute('content', c);
        
        }








        function calcsmm() {
          let sum = {};
      
          document.querySelectorAll('.child').forEach(c => {
              let inc = parseFloat(c.querySelector('.incomeColumn').textContent.trim()) || 0;
              let exp = parseFloat(c.querySelector('.exep').textContent.trim()) || 0;
              let bal = parseFloat(c.querySelector('.Abal').textContent.trim()) || 0;
              let src = c.querySelector('.fromm').textContent.trim().toLocaleLowerCase();
                  
              if (!sum[src]) sum[src] = { inc: 0, exp: 0, bal: 0 };
      
              sum[src].inc += inc;
              sum[src].exp += exp;
              sum[src].bal += bal;
          });
      
          disp(sum);
      }
      
      function disp(sum) {
          let tbl = `<table border='1'>
              <thead><tr><th> Sources </th><th>Income</th><th>Expence</th><th>Balance</th></tr></thead><tbody>`;
      
          for (let src in sum) {
              tbl +=` <tr><td>${src}</td><td>${sum[src].inc}</td><td>${sum[src].exp}</td><td>${sum[src].bal}</td></tr>`;
          }
      
          tbl += `</tbody></table>`;
      
          document.getElementById('sumTbl').innerHTML = `<div class="head">
              <i onclick="shfei('sumTbl')" class="fa-solid fa-share njk" style="color:lightgreen;display:none;"></i>
              <span> BlackRoad Summary</span>
              <i onclick="disexpppp('none')" class="fa fa-times"></i>
             </div> ${tbl}`;
      }
      
      function shfet(){
      
      Swal.fire({
      title: 'Choose an Share action',
      text: 'What would you like to do?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'enable Share',
      cancelButtonText: 'disable Share'
      }).then((result) => {
      if (result.isConfirmed) {
      enbsh();
      Swal.fire({text:"Share Feature Enabled Successfully ",icon:"success"});
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      enbshrem();
      Swal.fire({text:"Share Feature Disabled Successfully ",icon:"success"});
      }
      });
      }
      
      
      function enbsh(){
      document.querySelectorAll(".idfeb").forEach((c)=>{
      let xc=document.createElement("i");
      xc.className="fa-solid fa-share";
      xc.style.color="lightgreen";
      xc.style.marginTop="3px";
      xc.onclick=function (){
      captur(c.children[6].id);
      }
      c.prepend(xc)
      });
      
      document.querySelectorAll(".njk").forEach((h)=>{
      h.style.display="block";
      
      });
      document.getElementById("njk").style.display="block";
      
      
      }
      
      
      function enbshrem() {
      document.querySelectorAll(".idfeb").forEach(c => {
      if (c.firstElementChild?.className === "fa-solid fa-share") {
      c.firstElementChild.remove();
      }
      });
      
      document.querySelectorAll(".njk").forEach((h)=>{
      h.style.display="none";
      
      });
      
      document.getElementById("njk").style.display="none";
      
      }
      
      
      
      async function captur(x) {
      const divst = document.getElementById(x);
      const div= divst.parentNode.parentNode;
      
      const canvas = await html2canvas(div);
      canvas.toBlob(async (blob) => {
      const file = new File([blob], "capture.png", { type: "image/png" });
      
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
      await navigator.share({
      files: [file],
      title: "BlackRod",
      text: "Income Source!"
      });
      } catch (error) {
      console.error("Sharing failed:", error);
      }
      } else {
      alert("Sharing not supported on this browser.");
      }
      });
      }
      
      
      async function shfei(x) {
      
      const div= document.getElementById(x);
    
      
      const canvas = await html2canvas(div);
      canvas.toBlob(async (blob) => {
      const file = new File([blob], "capture.png", { type: "image/png" });
      
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
      await navigator.share({
      files: [file],
      title: "BlackRod",
      text: "Income Source!"
      });
      } catch (error) {
      console.error("Sharing failed:", error);
      }
      } else {
      alert("Sharing not supported on this browser.");
      }
      });
      }
      
      
      
      
    
      
     
        
        
        
        
        
        
        
        
       