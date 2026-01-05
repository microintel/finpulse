function reply(q) {
  Object.keys(alias).forEach(a => {
    if (q.startsWith(a)) q = q.replace(a, alias[a]);
  });

  const t = q.trim().toLowerCase().split(/\s+/);

  if (t[0] === "ls" && t[1] === "cmd") {
    return listCommand();
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