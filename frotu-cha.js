
let pieChartIXB = null;
let pieChartCat = null;

function shofroPie() {
  let fcatkey = Object.keys(frotuCatOb);
  let fcatVal = Object.values(frotuCatOb);
  let fpied = frotuOBS.froIXB;

  if (pieChartIXB) pieChartIXB.destroy();
  if (pieChartCat) pieChartCat.destroy();

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
}

function crtPieIXB({ elementId, labels, data }) {
  const bgcl = ["green", "red", "blue"];
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