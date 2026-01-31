function listCommand() {
  let html = "Commands:<br><br>";

  COMMANDS.forEach((cmd, i) => {
    html += `${i + 1}. <a href="#" onclick="cmdinputadd('${cmd}')"> ${cmd}</a><br><br>`;
  });

  sendB(html);
}

async function backupDate(url) {

  const response = await fetch(url);

  if (!response.ok) {
    sendB("Failed to fetch text");
    return;
  }

  const text = await response.text();
  sendB("last BackUP  \n\n"+text);
}

function totalLendByType(x) {
  let borrowTotal = 0;
  let receivableTotal = 0;

  lenddata.forEach(item => {
    if (item.type === "B") {
      borrowTotal += item.amount;
    } else if (item.type === "R") {
      receivableTotal += item.amount;
    }
  });
  if(x === "bar" || x=== "pie"){
  showLendChart(["Total","Recivable","Borrow"],borrowTotal+receivableTotal,receivableTotal,borrowTotal,x);
  }else{
  sendB(` Lend \n borrow : ${borrowTotal} \n recivable : ${receivableTotal} \n\n Total : ${borrowTotal+receivableTotal}`);
}
}


function lendByName(targetName) {
  let borrow = 0;
  let receivable = 0;

  const nameKey = targetName.trim().toLowerCase();

  lenddata.forEach(item => {
    if (item.name.trim().toLowerCase() === nameKey) {
      if (item.type === "B") {
        borrow += Number(item.amount);
      } else if (item.type === "R") {
        receivable += Number(item.amount);
      }
    }
  });

  sendB(` name : ${targetName} \n Borrow : ${borrow} \n Recivable : ${receivable}`);
}

function listLend(){


Object.values(lenddata).forEach((v, i) => {
  sendB(`${i}.
<span style="color:red;font-weight:bold">name :</span> ${v.name}
<span style="color:lightgreen;font-weight:bold">${v.type === "R" ? "Recivable" : "Borrow"} :</span> ${v.amount}
<span style="color:skyblue;font-weight:bold">date :</span> ${v.date}
<span style="color:brown;font-weight:bold">details :</span> ${v.description}
`);
});

}

function lendNames() {
  const names = [...new Set(lenddata.map(x => x.name.trim()))];

  let out = "Lend \n\n";
  names.forEach((name, i) => {
    out += `<a href="#" onclick="cmdinputadd('lend name ${name}')">${i + 1}. ${name}</a><br>`;
  });

  sendB(out);
}

function lendsummary() {
  const map = {};

  lenddata.forEach(item => {
    const name = item.name.trim();

    if (!map[name]) {
      map[name] = { borrow: 0, receivable: 0 };
    }

    if (item.type === "B") {
      map[name].borrow += Number(item.amount);
    } else if (item.type === "R") {
      map[name].receivable += Number(item.amount);
    }
  });

  let html = `
  <table style="width:100%;border-collapse:collapse;font-family:monospace">
    <thead>
      <tr style="background:#222;color:#fff">
        <th style="border:1px solid #555;padding:6px">Name</th>
        <th style="border:1px solid #555;padding:6px;color:#ff6b6b">Borrow</th>
        <th style="border:1px solid #555;padding:6px;color:#6bff95">Receivable</th>
      </tr>
    </thead>
    <tbody>
  `;

  Object.keys(map).forEach(name => {
    html += `
      <tr>
        <td style="border:1px solid #555;padding:2px">${name}</td>
        <td style="border:1px solid #555;padding:2px;">${map[name].borrow}</td>
        <td style="border:1px solid #555;padding:2px;">${map[name].receivable}</td>
      </tr>
    `;
  });

  html += `
    </tbody>
  </table>
  `;

  sendB(html);
}


function listSource(){
const s = [...new Set(data.map(x => x.from).filter(Boolean))];
 //sendB(s.join("\n") || "No sources");
let out=``;
s.forEach(el=>out+=`<a href="#" onclick="cmdinputadd('income from ${el}')">${el}</a><br>`);
sendB(out);
}

function cmdinputadd(x){
let vgh=document.getElementById("chat-i");
vgh.value=x;
vgh.style.height="auto";
vgh.style.height=vgh.scrollHeight+"px";
}


function listExpenseCategory(){

const cats = [
      ...new Set(
        data.flatMap(x =>
          x.transactions?.map(tr => tr.category).filter(Boolean)
        )
      )
    ];
   // sendB(cats.join("\n") || "No catgories found");
    
    
    let out = "Expenses Categories \n Click on anyone of thus to get\n\n";
    cats.forEach((name, i) => {
    out += `<a href="#" onclick="cmdinputadd('te from ${name}')">${i + 1}. ${name}</a><br>`;
    });
    
    sendB(out);
}


function expenseFrom(cat){

    let sum = 0;

    data.forEach(x => {
      x.transactions?.forEach(tr => {
        if (tr.category?.toLowerCase() === cat) {
          sum += tr.amount || 0;
        }
      });
    });

    sendB(
      sum
        ? `Total expense for "${cat}": ${sum}`
        : `No expenses found for "${cat}"`
    );

}



function deleteDB() {
    const password = prompt("Enter Password to delete everything:");
    if (!password) {
    sendB("Password is required.");
     return;
    }
 
    const request = indexedDB.open("black",2);
 
    request.onerror = function (event) {
     console.error("Database error:", event.target.error);
     sendB("Failed to open the database.");
    };
 
        request.onsuccess = function () {
        const db = request.result;
        const transaction = db.transaction("sst", "readonly");
        const store = transaction.objectStore("sst");
        const getRequest = store.get("user");
 
        getRequest.onerror = function (event) {
      console.error("Error retrieving data:", event.target.error);
     sendB("Error retrieving user data.");
        };
 
        getRequest.onsuccess = function () {
   const userData = getRequest.result;
     if (userData && userData["p"] === password) {
     const deleteRequest = indexedDB.deleteDatabase("black");
     alert("Factory Reset Successful!");
      localStorage.removeItem("blackuser");
      localStorage.removeItem("blogpin");
   //location.href = "../login.html";
   location.reload();
    deleteRequest.onsuccess = function () {
     
             };
 
     deleteRequest.onerror = function () {
   sendB("Failed to delete the database.");
                };
            } else {
                sendB("Incorrect password or user not found.");
            }
        };
    };
}


function chkSize() {
  return new Promise((resolve, reject) => {
    const dbN = "black";
    const stN = "sst";

    const req = indexedDB.open(dbN);

    req.onerror = () => reject("Failed to open DB");

    req.onsuccess = e => {
      const db = e.target.result;

      if (!db.objectStoreNames.contains(stN)) {
        db.close();
        resolve("Store not found");
        return;
      }

      const tx = db.transaction(stN, "readonly");
      const store = tx.objectStore(stN);
      const getAll = store.getAll();

      getAll.onerror = () => {
        db.close();
        reject("Failed to read data");
      };

      getAll.onsuccess = () => {
        const size = new Blob([JSON.stringify(getAll.result)]).size;
        const usedMB = (size / (1024 * 1024)).toFixed(5);
        db.close();
        resolve(`BlackRoad Used : <b>${usedMB} </b>MB in Your Device Storage`);
      };
    };
  });
}


function generateBlackRoadPDF(filters) {
  const normalize = v => (v || "").toLowerCase().trim();

  const nameKeys = Array.isArray(filters.from) ? filters.from : [];
  const categoryKeys = filters.categories || [];
  const fromDate = filters.fromDate;
  const toDate = filters.toDate;

  let records = data;

  if (nameKeys.length) {
    records = records.filter(r =>
      nameKeys.some(k => normalize(r.from).includes(normalize(k)))
    );
  }

  let summaryIncome = 0;
  let summaryExpense = 0;
  let categorySummary = {};

  records.forEach(record => {
    if (fromDate && toDate) {
      const rDate = new Date(record.date).getTime();
      const fDate = new Date(fromDate).getTime();
      const tDate = new Date(toDate).getTime();
      if (isNaN(rDate) || rDate < fDate || rDate > tDate) return;
    }

    summaryIncome += Number(record.income || 0);

    let txs = record.transactions || [];

    if (categoryKeys.length) {
      txs = txs.filter(t =>
        categoryKeys.some(k =>
          normalize(t.category).includes(normalize(k))
        )
      );
    }

    if (!txs.length) return;

    txs.forEach(t => {
      const amt = Number(t.amount || 0);
      summaryExpense += amt;
      categorySummary[t.category] =
        (categorySummary[t.category] || 0) + amt;
    });
  });

  const summaryBalance = summaryIncome - summaryExpense;

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p", "mm", "a4");
  let y = 20;

  pdf.setFontSize(24);
  pdf.text("BlackRoad Report", 20, y);
  y += 8;

  pdf.setFontSize(16);
  const reportForText = nameKeys.length ? nameKeys.join(", ") : "All Sources";
  pdf.text(`Report for : ${reportForText}`, 20, y);
  y += 8;

  pdf.setFontSize(11);
  pdf.text(`Income : ${summaryIncome}`, 20, y);
  pdf.text(`Expense : ${summaryExpense}`, 80, y);
  pdf.text(`Balance : ${summaryBalance}`, 150, y);
  y += 8;

  pdf.setFontSize(16);
  pdf.text("Category Summary", 20, y);
  y += 6;

  pdf.setFontSize(10);
  Object.entries(categorySummary).forEach(([cat, amt]) => {
    if (y > 270) {
      pdf.addPage();
      y = 20;
    }
    pdf.text(`${cat} : ${amt}`, 25, y);
    y += 5;
  });

  y += 5;

  records.forEach(record => {
  if (fromDate && toDate) {
  const rDate = new Date(record.date).getTime();
  const fDate = new Date(fromDate).getTime();
  const tDate = new Date(toDate).getTime();
  if (isNaN(rDate) || rDate < fDate || rDate > tDate) return;
  }
  
  let transactions = record.transactions || [];
  
  if (categoryKeys.length) {
  transactions = transactions.filter(t =>
  categoryKeys.some(k =>
  normalize(t.category).includes(normalize(k))
  )
  );
  }
  
  if (y > 250) {
  pdf.addPage();
  y = 20;
  }
  
  pdf.setFontSize(13);
  pdf.text(`Income Date : ${record.date}`, 20, y);
  y += 6;
  
  pdf.setFontSize(11);
  pdf.text(`From : ${record.from}`, 20, y);
  y += 6;
  
  pdf.text(`Income : ${record.income}`, 20, y);
  pdf.text(`Expense : ${record.expense || 0}`, 80, y);
  pdf.text(`Balance : ${record.balance}`, 150, y);
  y += 6;
  
  const tableBody = transactions.length
  ? transactions.map(t => [
  t.date,
  t.category,
  t.description,
  `${t.amount}`
  ])
  : [["-", "-", "No expense", "0"]];
  
  pdf.autoTable({
  startY: y,
  head: [["Date", "Category", "Description", "Amount"]],
  body: tableBody,
  styles: { fontSize: 9 },
  headStyles: { fillColor: [40, 40, 40] }
  });
  
  y = pdf.lastAutoTable.finalY + 10;
  });

  const pageCount = pdf.getNumberOfPages();
  pdf.setPage(pageCount);

  pdf.setFontSize(9);
  pdf.text(
    `${new Date().toLocaleString()} MicroIntel`,
    105,
    290,
    { align: "center" }
  );

  const blob = pdf.output("blob");
  const url = URL.createObjectURL(blob);

  sendB(
    `<b>BlackRoad Report Ready</b><br><br><a href="${url}" download="BlackRoad-Report.pdf">Download</a>`
  );
}

function parseReportCommand(input) {
  const text = input.toLowerCase();

  const result = {
    from: [],
    categories: [],
    fromDate: null,
    toDate: null
  };

  const regex = /(\w+)\((.*?)\)/g;

  for (const match of text.matchAll(regex)) {
    const key = match[1];
    const values = match[2]
      .split(",")
      .map(v => v.trim())
      .filter(Boolean);

    if (key === "income") {
      result.from = values;
    }

    if (key === "cat") {
      result.categories = values;
    }

    if (key === "date") {
      result.fromDate = values[0] || null;
      result.toDate = values[1] || null;
    }
  }

  return result;
}

function runReportCommand(commandText) {
  const filters = parseReportCommand(commandText);
  generateBlackRoadPDF(filters);
}