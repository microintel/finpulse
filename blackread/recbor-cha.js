let cart=null;
function rebocc(da,x){

if(x){
document.getElementById("ssuu").style.display="flex";
document.getElementById("fsumT").innerHTML= da[0];
document.getElementById("fsumR").innerHTML= da[1];
document.getElementById("fsumB").innerHTML= da[2];

document.getElementById('reboc').style.display="none";
}else{
document.getElementById("ssuu").style.display="none";
document.getElementById('reboc').style.display="block";
var nknx = document.getElementById('reboc').getContext('2d');
if (cart) cart.destroy();

        cart= new Chart(nknx, {
            type: 'bar',
            data: {
                labels: ['Total', 'Recivable', 'Borrowing'],
                datasets: [{
                    label: '',
                    data:da,
                    backgroundColor: [
                        '#007bff',
                        ' #28a745',
                        '#dc3545'
                    ],
                    borderColor: [
                        '#007bff',
                        ' #28a745',
                        '#dc3545'
                    ],
                    borderWidth: 1,
                    barThickness: 40
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    plugin3d: {
                        enabled: true,
                        depth: 50,
                        rotationX: 20,
                        rotationY: 20
                    },
                    tooltip: {
                        enabled: true,
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: 'white',
                        bodyColor: 'white'
                    }
                },
                scales: {
                    y: {
                    grid: {
                    display: false
                    },
                    ticks: {
                    display: false,
                    },
                       axis: {
                       display: false
                       }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            display: true,
                            font: {
                                size: 14,
                                weight: 'bold'
                            },
                            color: 'white'
                        },
                        axis: {
                            display: false
                        },
                        barPercentage: 1,
                        categoryPercentage: 1
                    },
                 
                },
                layout: {
                    padding: 0
                },
                interaction: {
                    mode: 'index',
                    intersect: false
                }
            }
        });
        

}
 }