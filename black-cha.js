let newlinech = null;
let valforgp="";
function backchhh(i, e, b) {

valforgp=document.getElementById("grpsel").value;
if(valforgp=="n"){

document.getElementById("grpsel").style.display="none";
window.scrollTo(0, 0);
}
    if (newlinech) {
        newlinech.destroy();
    }

     if(valforgp==="bal"){
balg();
     }else if(valforgp==="exp"){
       expg();
     }else if(valforgp=="pie"){
       nknpie();
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
                pointRadius:2,
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
                   pointRadius:2,
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
    
    
    
    function nknpie(){
    
    let ctx= document.getElementById('linebal').getContext('2d');
   newlinech= new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: ['Income','Expence', 'Balance'],
    datasets: [{
    label: "BlackRoad",
    data: [cin, cbala, cexp],
    backgroundColor: [
    '#28a745',
    '#dc3545',
    '#007bff'
    ],
    borderColor: [
   '#28a745',
   '#dc3545',
   '#007bff'
    ],
    borderWidth: 1
    }]
    },
    options: {
    cutout:"50%",
    responsive: true,
    plugins: {
    legend: {
    position: 'right',
    title:"Income, Ex"
    }
    }
    }
    });
    
    
    }
    
    