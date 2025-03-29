function frinadd(){
 let data= document.getElementById("frodatr").innerHTML.replace(/\s+/g, ' ').trim();
 
 const r = indexedDB.open("black");
 r.onsuccess = e => {
 const d = e.target.result;
 const t = d.transaction(["sst"], 'readwrite');
 let eee= allfd.exp;

 let neba={inc:glofIN,exp:eee+glofEX};
 let fins ={frotuINS:data,frix:neba};
 
 t.objectStore("sst").put(fins, "frotuIS");
 };
 
 }
 
 function fringet(){
 let dat= document.getElementById("frodatr");
 
 const r = indexedDB.open("black");
 r.onsuccess = e => {
 const d = e.target.result;
 const t = d.transaction(["sst"], 'readwrite');
 const st = t.objectStore("sst");
 const nkn = st.get("frotuIS");
 // let dbs={data:dataT};
 
 nkn.onsuccess=function(){
 
 let hel= nkn.result;
 
 dat.innerHTML= hel.frotuINS;
 glofEX=hel.frix.exp;
 glofIN=hel.frix.inc;
 famtC();
 addCats();
 
 }
 
 
 };
 
 
 };
 
 
 
 
 fringet();
 
 
 function frexadd(){
 let data= document.getElementById("frodaEX").innerHTML.replace(/\s+/g, ' ').trim();
 
 const r = indexedDB.open("black");
 r.onsuccess = e => {
 const d = e.target.result;
 const t = d.transaction(["sst"], 'readwrite');
 
let neba={inc:glofIN,exp:eee+glofEX};
 let fins ={frotuEXC:data,fexx:neeba};
 
 t.objectStore("sst").put(fins, "frotuEXS");
 };
 
 }
 
 
 
 function frexget(){
 let dat= document.getElementById("frodaEX");
 
 const r = indexedDB.open("black");
 r.onsuccess = e => {
 const d = e.target.result;
 const t = d.transaction(["sst"], 'readwrite');
 const st = t.objectStore("sst");
 const nkn = st.get("frotuEXS");
 // let dbs={data:dataT};
 
 nkn.onsuccess=function(){
 
 let hel= nkn.result;
 
 dat.innerHTML= hel.frotuEXC;
 
 }
 
 
 };
 
 
 };
 
 frexget();