// Donut Chart
var options = {
  series: [8.7, 9.9, 23.8, 32.0, 25.6],
  chart: {
  width: '72%',
  type: 'donut',
  foreColor:'#838fb9'
},
labels:['Direct','Social','Email','Other','Referrals'],
plotOptions: {
  pie: {
    startAngle: -90,
    endAngle: 270
  }
},
dataLabels: {
  enabled: true,
  style:{
    fontFamily:'Poppins, sans-serif',
    fontWeight: 'normal',
    fontSize:'12px'
  }
},
fill: {
  type: 'gradient',
},
legend: {
  position: 'bottom',
  horizontalAlign: 'center', 
  fontSize: '14px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 400,
  formatter: function(val) {
    return val;
  },
},

responsive: [{
  breakpoint: 425,
  options: {
    chart: {
      width: 300
    },
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      style:{
        fontSize:'8px'
      }
    },
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();