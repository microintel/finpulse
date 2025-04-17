function backINCGET(){
        
        const r = indexedDB.open("blackread");
        r.onsuccess = e => {
        const d = e.target.result;
        const t = d.transaction(["sst"], 'readwrite');
        const st = t.objectStore("sst");
        const nkn = st.get("blackroadINC");
       // let dbs={data:dataT};
        
        nkn.onsuccess=function(){
        
        let hel= nkn.result;
        
        document.getElementById("ppr").innerHTML= hel.data;
        addclontr();
        updateTotals();
        
        };
        
        
        };
        
        }
        
        backINCGET();
        
        
        function backINCADD(){
        return;
        
        let dataT= document.getElementById("ppr").innerHTML.replace(/\s+/g, ' ').trim();
       
        
        const r = indexedDB.open("blackread");
        r.onsuccess = e => {
        const d = e.target.result;
        const t = d.transaction(["sst"], 'readwrite');
        
        let dbs={data:dataT};
        
        t.objectStore("sst").put(dbs, "blackroadINC");
        };
        
        updateTotals();
        }
        
        
        
        function backRecADD(){
        return;
        let dataTRD= document.getElementById("recDaId").innerHTML.replace(/\s+/g, ' ').trim();
        let dataTBD= document.getElementById("borDaId").innerHTML.replace(/\s+/g, ' ').trim();
        
        
        const r = indexedDB.open("blackread");
        r.onsuccess = e => {
        const d = e.target.result;
        const t = d.transaction(["sst"], 'readwrite');
        
        let dbsm={recDa:dataTRD,borDa:dataTBD};
        
        t.objectStore("sst").put(dbsm, "blackroadReBo");
        };
        updateTotals();
        
        
        }
        
        
        
        function backReDaGET(){
         
      
        const r = indexedDB.open("blackread");
        r.onsuccess = e => {
        const d = e.target.result;
        const t = d.transaction(["sst"], 'readwrite');
        const st = t.objectStore("sst");
        const nkn = st.get("blackroadReBo");
        // let dbs={data:dataT};
        
        nkn.onsuccess=function(){
        
        let hel= nkn.result;
        
          document.getElementById("recDaId").innerHTML= hel.recDa;
          document.getElementById("borDaId").innerHTML= hel.borDa;
        updateTotals();
        alve();
        
        };
        
        
        };
        
        }
        
        