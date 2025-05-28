function dnknd() {
  const d = new Date();
  const ds = d.toLocaleDateString();
  const ts = d.toLocaleTimeString();
  return `${ds} ${ts}`;
}

function dlastd() {

  const xd = dnknd();
  const r = indexedDB.open("black");

  r.onsuccess = e => {
    const db = e.target.result;
    const tx = db.transaction(["sst"], 'readwrite');
    tx.objectStore("sst").put(xd, "alast");
  };
}


function dlastdrem() {

  const xd = dnknd();
  const r = indexedDB.open("black");

  r.onsuccess = e => {
    const db = e.target.result;
    const tx = db.transaction(["sst"], 'readwrite');
    tx.objectStore("sst").put(xd, "alastrem");
  };
}

