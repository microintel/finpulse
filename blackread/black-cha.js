let newlinech = null;
function backchhh(i, e, b) {
    if (newlinech) {
        newlinech.destroy();
    }

     if(valforgp==="bal"){
balg();
     }else if(valforgp==="exp"){
       expg();
     }else{
       return;
     }

    function balg(){
       const ctx = document.getElementById('linebal').getContext('2d');
    let inx = i.reverse();
    let balance = b.reverse();
    let cv = [];
    
    inx.forEach((x, r) => {
        cv.push(((balance[r] / inx[r]) * 100).toFixed(0));
    });
    
    newlinech = new Chart(ctx, {
        type: 'line',
        data: {
            labels: b,
            datasets: [{
                label: 'Balance Chart',
                data: cv,
                borderColor: '#007bff',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            
            plugins: {
              title: {
                     display: true,  
                     text: 'Balanace Geaph',  
                     font: {
                       size: 18,  
                       weight: 'bold',  
                     },
                     color: '#007bff',  
                     padding: {
                       top: 20,
                       bottom: 20
                     }
                   },
                legend:{
                    display:false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let index = context.dataIndex;
                            let percentage = context.raw;
                            let income = inx[index];
                            let bal = balance[index];
                            return `Inc: ${income}, Bal: ${bal}`;
                        }
                    }
                }
            },
          
            scales: {
              x: {
                display: false  
              },
              y: {
                display: false 
              }
            }
        }
    });
}


function expg(){

       const ctx = document.getElementById('linebal').getContext('2d');
       let inx = i.reverse();;
       let balance = e.reverse();;
       let cv = [];
       
       inx.forEach((x, r) => {
           cv.push(((balance[r] / inx[r]) * 100).toFixed(0));
       });
       
       newlinech = new Chart(ctx, {
           type: 'line',
           data: {
               labels: e,
               datasets: [{
                   label: 'Expence Chart',
                   data: cv,
                   borderColor: '#dc3545',
                   borderWidth: 2,
                   fill: false
               }]
           },
           options: {
               responsive: true,
               
               plugins: {
                 title: {
                        display: true,  
                        text: 'Expence Geaph',  
                        font: {
                          size: 18,  
                          weight: 'bold',  
                        },
                        color: '#dc3545',  
                        padding: {
                          top: 20,
                          bottom: 20
                        }
                      },
                   legend:{
                       display:false
                   },
                   tooltip: {
                       callbacks: {
                           label: function(context) {
                               let index = context.dataIndex;
                               let percentage = context.raw;
                               let income = inx[index];
                               let bal = balance[index];
                               return `Inc: ${income}, Exp: ${bal}`;
                           }
                       }
                   }
               },
             
               scales: {
                 x: {
                   display: false  
                 },
                 y: {
                   display: false 
                 }
               }
           }
       });



}

    }
    
    