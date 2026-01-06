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
`
    );
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