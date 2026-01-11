function listCommand(){
sendB(
`Commands:

1. <a href="#" onclick="">balance (tb)</a>

2. <a href="#" onclick="cmdinputadd('tin')" >income (tin)</a>

3. <a href="#" onclick="cmdinputadd('te')" >expense (te) </a>

4. <a href="#" onclick="cmdinputadd('te from education')" >expense from category</a>

5. <a href="#" onclick="cmdinputadd('income from example 2025-01-01 to 2026-01-01 sum')" > income from source from-date to to-date sum </a>

6. <a href="#" onclick="cmdinputadd('income from example 2025-01-01 to 2026-01-01 sum chart bar')" > income from source from-date to to-date sum chart bar</a>

7. <a href="#" onclick="cmdinputadd('ls src')" >ls src </a>

8. <a href="#" onclick="cmdinputadd('ls expense category')" > ls expense category  </a>

9. <a href="#" onclick="cmdinputadd('not chng')" > not chng </a>

10. <a href="#" onclick="cmdinputadd('not off')" > not off </a>

11. <a href="#" onclick="cmdinputadd('ieb')" > ieb </a>

12. <a href="#" onclick="cmdinputadd('ieb chart pie')" > ieb chart pie/bar/line </a>

13. <a href="#" onclick="cmdinputadd('lend tot')" > lend tot </a>

14. <a href="#" onclick="cmdinputadd('lend sum')" > lend sum </a>

15. <a href="#" onclick="cmdinputadd('ls lend')" > ls lend </a>

15. <a href="#" onclick="cmdinputadd('lend name person_name')" >lend name person_name</a>

15. <a href="#" onclick="cmdinputadd('ls lend name')" > ls lend name</a>

15. <a href="#" onclick="cmdinputadd('lend sum chart pie')" > lend chart bar/pie</a>

`
    );
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
 sendB(s.join("\n") || "No sources");
    
}

function cmdinputadd(x){

document.getElementById("chat-i").value=x;
}


function listExpenseCategory(){

const cats = [
      ...new Set(
        data.flatMap(x =>
          x.transactions?.map(tr => tr.category).filter(Boolean)
        )
      )
    ];
    sendB(cats.join("\n") || "No caloriers found");
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