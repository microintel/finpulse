function reply(q) {
  Object.keys(alias).forEach(a => {
    if (q.startsWith(a)) q = q.replace(a, alias[a]);
  });

  const t = q.trim().toLowerCase().split(/\s+/);

  if (t[0] === "ls" && t[1] === "cmd") {
    return listCommand();
  }
  
  if(t[0] === "factory" && t[1] ==="reset"){
  return deleteDB();
  }
  
  if(t[0]=== "storage"){
   if(t[1] ==="chart"){
   showBlackRoadStorage();
   }else{
  chkSize().then(text => {
  
   sendB(text)
  })
  }
  return;
  }
  
  
  if(t[0] ==="backup" && t[1]=== "date"){
  
  return backupDate("https://forsomething2410.github.io/kannakku/blackdata/lastseen.txt");
  }
  if(t[0] === "not" && t[1] === "chng"){
    userNot.src="yamete.mp3";
    botNot.src="duck.mp3";
    return sendB("notification mode changed");
  }
  
  if(t[0] === "account"){
   if(accNAME){
     sendB(` User Name : ${accNAME}<br> Password : ${accPASS}`);
   }
  return;
  }
  if(t[0] === "not" && t[1] === "off"){
    userNot=botNot=null;
    return sendB("notification turend off succefully");
  }
  
  if(t[0] === "lend" && t[1] === "tot"){
  return totalLendByType("nkn");
  
  }
  
  
  if (t[0] === "lend" && t[1] === "name") {
  if (t.length > 2) {
  const name = t.slice(2).join(" ");
  lendByName(name);
  } else {
  sendB("Enter Lend Person Name");
  }
  return;
  }
  
  if(t[0] === "ls" && t[1] === "lend" && t[2] === "name"){
  return lendNames();
  }
  
  if(t[0] === "ls" && t[1] === "lend"){
  return listLend();
  }
  
  if(t[0] === "lend" && t[1]==="sum"){

  if((t[2]=== "chart") && (t[3] ==="bar" || t[3] === "pie")){
  totalLendByType(t[3]);
  }else{
 lendsummary();
 }
 return;
  }
  
  if (t[0] === "ieb") {
  
  let inc = 0;
  let exp = 0;
  let bal = 0;
  
  Object.keys(data).forEach(x => {
  inc += Number(data[x].income);
  exp += Number(data[x].expense);
  bal += Number(data[x].balance);
  });
  
  if (t[1] === undefined) {
  
  return sendB(
  `Income : ${inc}\nExpense : ${exp}\nBalance : ${bal}`
  );
  
  } else if (t[1] === "chart" && (t[2] === "pie")) {
  
  return showPieChart(inc, exp, bal);
  }
  }

  
  

  if (t[0] === "ls" && t[1] === "src") {
    return listSource();
  }

  if (
    t[0] === "ls" &&
    (t[1] === "expense" || t[1] === "expenses") &&
    t[2] === "category"
  ) {
    return listExpenseCategory();
  }

  if (t[0] === "expense" && t[1] === "from" && t[2]) {
    const cat = t.slice(2).join(" ").toLowerCase();
    return expenseFrom(cat);
  }

  /* ========== INCOME FROM SOURCE DATE RANGE (TEXT + BAR CHART) ========== */
  if (
    t[0] === "income" &&
    t[1] === "from" &&
    t.includes("to") &&
    t.includes("sum")
  ) {
    const isBarChart = t.includes("chart") && t.includes("bar");

    // detect from-date
    const fromDateIndex = t.findIndex(x =>
      /^\d{4}-\d{2}-\d{2}$/.test(x)
    );
    if (fromDateIndex === -1)
      return sendB("Invalid from-date (YYYY-MM-DD)");

    const toIndex = t.indexOf("to");
    if (!t[toIndex + 1])
      return sendB("Invalid to-date (YYYY-MM-DD)");

    const source = t.slice(2, fromDateIndex).join(" ").trim();
    const fromDate = new Date(t[fromDateIndex]);
    const toDate = new Date(t[toIndex + 1]);

    let totalIncome = 0;
    let totalExpense = 0;

    let labels = [];
    let incomeArr = [];
    let expenseArr = [];

    let textOut = [];

    data.forEach(x => {
      const recSource = x.from?.toLowerCase().trim() || "";
      if (!recSource.includes(source)) return;

      const d = new Date(x.date);
      if (d < fromDate || d > toDate) return;

      const income = x.amount || 0;
      let expense = 0;

      x.transactions?.forEach(tr => {
        expense += tr.amount || 0;
      });

      if (income === 0 && expense === 0) return;

      const balance = income - expense;

      totalIncome += income;
      totalExpense += expense;

      labels.push(x.date);
      incomeArr.push(income);
      expenseArr.push(expense);

      textOut.push(
`${x.date}
Income : ${income}
Expense: ${expense}
Balance: ${balance}`
      );
    });

    if (!labels.length)
      return sendB("No records found for given source and date range");

    if (isBarChart) {
      showBarChart(labels, incomeArr, expenseArr);
      return;
    }

    return sendB(
      textOut.join("\n\n") +
`\n\n--------------------
TOTAL
Income : ${totalIncome}
Expense: ${totalExpense}
Balance: ${totalIncome - totalExpense}`
    );
  }

  if (t[0] === "balance") return balance();
  if (t[0] === "income") return income(t);
  if (t[0] === "expense") return expense(t);

  return sendB("Unknown command. Try `ls cmd`");
}


function showBarChart(labels, income, expense) {
  const cid = "chart_" + Date.now();

  sendB(`
    <div style="width:100%;max-width:720px;height:320px;">
      <canvas id="${cid}"></canvas>
    </div>
  `);

  // wait until DOM is updated
  requestAnimationFrame(() => {
    const canvas = document.getElementById(cid);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Income",
            data: income
          },
          {
            label: "Expense",
            data: expense
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false
        },
        plugins: {
          legend: {
            position: "top"
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
}

function showPieChart(income, expense, balance) {
  // alert(income); <-- Remove this line

  const cid = "chart_" + Date.now();
/*
  sendB(`
    <div style="width:100%;max-width:420px;height:320px;margin:auto;">
      <canvas id="${cid}"></canvas>
    </div>
  `);
  */
  const d=document.createElement("div");
  d.className="msg bot";
  d.innerHTML=`<div class="bbl"><div style="width:100%;max-width:420px;height:420px;margin:auto;">
  <canvas id="${cid}"></canvas>
  </div></div>`;
  log.appendChild(d);
  log.scrollTop=log.scrollHeight;
  
 requestAnimationFrame(() => {
    const canvas = document.getElementById(cid);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Invome", "Expense", "Balance"],
        datasets: [{
          data: [income, expense, balance],
          backgroundColor: [
            "#4CAF50",
            "#F44336", 
            "#2196F3" 
          ],
          borderColor: "#ffffff",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Income vs Expense vs Balance",
            font: {
              size: 16,
              weight: "bold"
            },
            padding: {
              top: 0,
              bottom: 0
            }
          },
          legend: {
            position: "top",
            labels: {
              boxWidth: 14,
              padding: 12
            }
          }
        }
      }
    });
  });
}


function showLendChart(lable,income, expense, balance,type) {
  const cid = "chart_" + Date.now();
  const d=document.createElement("div");
  d.className="msg bot";
  d.innerHTML=`<div class="bbl"><div style="width:100%;max-width:420px;height:500px;margin:auto;">
  <canvas id="${cid}"></canvas>
  </div></div>`;
  log.appendChild(d);
  log.scrollTop=log.scrollHeight;
  
 requestAnimationFrame(() => {
    const canvas = document.getElementById(cid);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    new Chart(ctx, {
      type: type || "bar",
      data: {
        labels: lable,
        datasets: [{
          data: [income, expense, balance],
          backgroundColor: [
            "#2196F3",
            "#4CAF50",
            "#F44336"
             
          ],
          borderColor: "#ffffff",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Lend Chart",
            font: {
              size: 16,
              weight: "bold"
            },
            padding: {
              top: 0,
              bottom: 0
            }
          },
          legend: {
            position: "top",
            labels: {
              boxWidth: 14,
              padding: 12
            }
          }
        }
      }
    });
  });
}


function calchkSize() {
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
        resolve(usedMB);
      };
    };
  });
}


async function showStoragePieChart(usedMB, totalMB) {
  const freeMB = totalMB - usedMB;
  const cid = "chart_" + Date.now();

  const d = document.createElement("div");
  d.className = "msg bot";
  d.innerHTML = `
    <div class="bbl">
      <div style="width:100%;max-width:420px;height:420px;margin:auto;">
        <canvas id="${cid}"></canvas>
      </div>
    </div>
  `;
  log.appendChild(d);
  log.scrollTop = log.scrollHeight;

  requestAnimationFrame(() => {
    const canvas = document.getElementById(cid);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["BlackRoad Used", "Free Storage"],
        datasets: [{
          data: [usedMB, freeMB],
          backgroundColor: [
            "#e53935", // Used
            "#43a047"  // Free
          ],
          borderColor: "#ffffff",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "BlackRoad Storage Usage",
            font: {
              size: 16,
              weight: "bold"
            }
          },
          legend: {
            position: "top",
            labels: {
              boxWidth: 14,
              padding: 12
            }
          },
          tooltip: {
            callbacks: {
              label: ctx =>
                `${ctx.label} : ${ctx.parsed.toFixed(5)} MB`
            }
          }
        }
      }
    });
  });
}


async function showBlackRoadStorage() {
  const estimate = await navigator.storage.estimate();
  const totalMB = estimate.quota / (1024 * 1024);

  const usedMB = parseFloat(await calchkSize());

  showStoragePieChart(usedMB, totalMB);
}