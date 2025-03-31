
let pieChartIXB = null;
let pieChartCat = null;
let pieChartExp = null;
let clas=[];
function shofroPie(xn) {
let expDa=getSumCat();

let ca=[];
let cav=[];
expDa.forEach((x)=>{
ca.push(x["category"]);
cav.push(x["sum"]);
});

function rndClr(n) {
    let c = [];
    for (let i = 0; i < n; i++) {
        let clr = `rgb(${Math.floor(Math.random() * 156) + 110}, ${Math.floor(Math.random() * 136) + 120}, ${Math.floor(Math.random() * 116) + 130})`;
        c.push(clr);
    }
    return c;
}

clas=rndClr(ca.length);

  let fcatkey = Object.keys(frotuCatOb);
  let fcatVal = Object.values(frotuCatOb);
  let fpied = frotuOBS.froIXB;

  if (pieChartIXB) pieChartIXB.destroy();
  if (pieChartCat) pieChartCat.destroy();
  if (pieChartExp) pieChartExp.destroy();
  
  pieChartIXB = crtPieIXB({
    elementId: 'pieChart',
    labels: ['Frotu Income', 'Frotu Expence', 'Frotu Balance'],
    data: [fpied.inc, fpied.exp, fpied.bal]
  });

  pieChartCat = crtPieCat({
    elementId: 'pieChartCat',
    labels: fcatkey,
    data: fcatVal
  });
  
  pieChartExp = crtPieEXP({
  elementId: 'pieChartEx',
  labels: ca,
  data:cav
  });
}

      
function crtPieIXB({ elementId, labels, data }) {
  const bgcl = ["#28a745", "#dc3545", "#007bff"];
  const ctx = document.getElementById(elementId).getContext('2d');
  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: 'Pie Chart',
        data: data,
        borderColor: "black",
        backgroundColor: bgcl.slice(0, labels.length)
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: 'white'
          }
        },
        title: {
          display: true,
          text: 'Inc, Exp, Bal ',
          color: 'white',
          font: {
            size: 18,
            weight: 'bold'
          }
        }
      }
    }
  });
}

function crtPieCat({ elementId, labels, data }) {
  const bgcl = ["green", "red", "pink", "purple", "orange", "yellow"];
  const ctx = document.getElementById(elementId).getContext('2d');
  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: 'Pie Chart',
        data: data,
        borderColor: "black",
        backgroundColor: bgcl.slice(0, labels.length)
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: 'white'
          }
        },
        title: {
          display: true,
          text: 'Income Categories',
          color: 'white',
          font: {
            size: 18,
            weight: 'bold'
          }
        }
      }
    }
  });
}





function crtPieEXP({ elementId, labels, data }) {
  const bgcl = clas;
  const ctx = document.getElementById(elementId).getContext('2d');
  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: 'Pie Chart',
        data: data,
        borderColor: "black",
        backgroundColor: bgcl.slice(0, labels.length)
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: 'white'
          }
        },
        title: {
          display: true,
          text: 'Expence Categories',
          color: 'white',
          font: {
            size: 18,
            weight: 'bold'
          }
        }
      }
    }
  });
}