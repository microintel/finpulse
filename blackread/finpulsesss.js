let preNo = "";
       alert("This is still in development. We use demo data for demonstration purposes only, and no data is saved yet. Future updates will include data storage..");
       function addTr(event,a,b,c) {
       event.preventDefault();
       let tA = document.getElementById(a);
       let tD = document.getElementById(b);
       let tDes = document.getElementById(c);
       if (preNo === "" || document.getElementById(preNo) === null) {
       return;
       
       }
       let stu = `
       <font class="mony">${tA.value}</font>
       <font class="tdate">${tD.value}</font>
       <font class="tdes">${tDes.value}</font>
       `;
       let diiv = document.createElement('div');
       diiv.className = "trans";
       diiv.innerHTML = stu;
       //parent.nodeName
       let p = document.getElementById(preNo);
       let pa = p.parentNode.parentNode.children[1];
       pa.appendChild(diiv);
       drawChart();
       alert("Transaction Added..");
       document.querySelector('form').reset();
       clo('anrdi');
       }
        function discr(x,y){
        preNo=y;
        let d=document.getElementById(x);
        d.style.display="flex";
        d.style.width="100vw";
        d.style.height="100vh";
        d.style.backgroundColor="var(--back)";
        }
        function clo(x){
        document.getElementById(x).style.display="none";
       // document.getElementById("cnrdi").style.display="none";
        }
        function theame(x){
        if(x=='b'){
        
        document.getElementById(x).src="https://img.icons8.com/?size=100&id=Ppe22DwOvBTF&format=png&color=FFFFFF";
        document.getElementById("mimg").src="https://img.icons8.com/?size=100&id=36389&format=png&color=FFFFFF";
        document.getElementById("tttim").src="https://raw.githubusercontent.com/microintel/endgram/main/photo/finpulse-white.png";
        
        document.documentElement.style.setProperty('--w',"black");
        document.documentElement.style.setProperty('--b',"#FFFFFF");
        document.documentElement.style.setProperty('--tbor',"white");
        document.documentElement.style.setProperty('--back',"#1a1a1a");
        //document.documentElement.style.setProperty('--', );
        document.getElementById("bori").src="https://img.icons8.com/?size=100&id=rRTAE6XGGP2Q&format=png&color=FFFFFF";
        document.getElementById(x).id="w";
        }
        if(x=='w'){
         
        document.getElementById("mimg").src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000";
        document.getElementById(x).src="https://img.icons8.com/?size=100&id=45475&format=png&color=1A1A1A";
        document.getElementById("tttim").src="https://raw.githubusercontent.com/microintel/endgram/main/photo/finpulse-red.png";
        document.documentElement.style.setProperty('--w',"#FFFFFF");
        document.documentElement.style.setProperty('--b',"black");
        document.documentElement.style.setProperty('--tbor',"black");
        document.documentElement.style.setProperty('--back',"#f0f0f0");
        //document.documentElement.style.setProperty('--', );
        document.getElementById("bori").src="https://img.icons8.com/?size=100&id=rRTAE6XGGP2Q&format=png&color=000000";
        document.getElementById(x).id="b";
        }
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
        
        
       parDI.style.display = fouM ? "" : "none";
        }
        
        updateTotals();
        }
        updateTotals();
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
       
       drawChart(vvvx,nnnx,mmmx);
       
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
        drawChart();
        randE();
        }
        
        
        function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['adapaavi', 'finpulse'],
        ['Income',cin],
        ['Expence',cbala],
        ['Balance',cexp]
        ]);
        
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
        ratt=0;
        document.getElementById("rsdi").innerHTML="";
        let almo = document.getElementsByClassName("mony");
        let almodes = document.getElementsByClassName("tdes");
        
        for(let x=0;x<almo.length;x++){
          if(almo[x].closest(".child").style.display!=="none" || almo[x].closest(".trans").style.display!=="none"){
            if((almo[x].closest(".child").style.display!=="none" && almo[x].style.display!=="none") && parseInt(almo[x].innerHTML)>=1000){
          let ft = document.createElement("font");
          
          ft.textContent =almo[x].innerHTML;
          document.getElementById("rsumi").textContent="Over 1k is "+ratt;
          ratt+=parseInt(almo[x].innerHTML);
          
          ft.onclick = function() {
          alert(almo[x].innerHTML+" for "+almodes[x].innerHTML);
          };
          let mni=parseInt(almo[x].innerHTML);
          if (mni >= 1000 && mni <= 1999) {
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
      document.getElementById("rsumi").textContent="Over 1k is "+ratt;
       }
        }
        }
        }
        
        function borww(x){
        document.getElementById("borwi").style.display=x;
        //document.getElementById("borwi").style.width="100%";
        
        document.getElementById("canb").style.display=x;
        }
        
       function appendC(event,a,b,c,d,e){
        var fo = document.querySelector('form');
        
        if (!fo.checkValidity()) {
        event.preventDefault();
        alert('Please fill details.');
        }else{
        let iA= document.getElementById(a);
        let iD= document.getElementById(b);
        let iFF= document.getElementById(c);
        let iE= document.getElementById(d);
        let iB=document.getElementById(e);
        let ran=Math.floor(Math.random() * 99999);
        let ran1=Math.floor(Math.random() * 88889);
        let raa=String("abc"+ran1+ran);
        let ccc=`
        <div class="idfeb">
        <font class="incomeColumn">${iA.value}</font>
        <font class="dateColumn">${iD.value}</font>
        <font class="fromm">${iFF.value}</font>
        <font class="exep">${iE.value}</font>
        <font class='Abal'>${iB.value}</font>
        <font onclick="discr('anrdi',this.id)" id="${raa}"><img class="adimg" src="https://img.icons8.com/?size=100&id=szDzfecravBo&format=png&color=FA5252"></font>
        </div>
        <div class="trand">
        
        </div>
        
        `;
        let dii=document.createElement('div');
        dii.className='child';
        dii.innerHTML=ccc;
        let dial="New Record Created Scuessfully..\n Income : "+iA.value+"\n Date : "+iD.value+"\n From : "+iFF.value;
        alert(dial);
        document.getElementById("ppr").appendChild(dii);
        drawChart();
        }
        }
        
        function printe(){
        window.print();
        }
       