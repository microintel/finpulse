function listCommand(){
sendB(
`Commands:
1. balance (tb)

2. income (tin)

3. expense (te)

4. expense from category

5. income from source from-date to to-date sum

6. income from source from-date to to-date sum chart bar

7. ls src

8. ls expense category`
    );
}




function listSource(){
const s = [...new Set(data.map(x => x.from).filter(Boolean))];
 sendB(s.join("\n") || "No sources");
    
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