// examples : https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/
var url = 'https://raw.githubusercontent.com/Lee486/slee133/master/data.json'

//print 
var myChart;
var data = {},
    processedData = {};
var labels = [];
$('#justPrint').click(function () {
    $.ajax({
        url: 'https://raw.githubusercontent.com/Lee486/slee133/master/data.json',
        dataType: 'json',
    }).done(function (results) {
        processedData = processedData(results);
        data = {
            labels: processedData.labels,
            datasets: [{
                data: processedData.data
            }]
        };
        console.log("Tried my best:");
        console.log(data),
        console.log("Labelsss:");
        console.log(labels);
    });
});
// line graph with forced data:
new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [{
            data: [14, 77, 140, 239, 280, 300],
            label: "Kilo LLC",
            borderColor: "#3e95cd",
            fill: false
        }, {
                data: [50, 275, 500, 855, 1000, 1200],
                label: "India Trade Co",
            borderColor: "#8e5ea2",
            fill: false
        }, {
                data: [100, 550, 1000, 1710, 2000, 4000],
                label: "Alpha Metals",
            borderColor: "#3cba9f",
            fill: false
        }, {
                data: [10, 55, 100, 171, 200, 200],
                label: "Sierra Analytical",
            borderColor: "#e8c3b9",
            fill: false
        }, {
                data: [105, 578, 1050, 1796, 2100, 2400],
                label: "Charlie Materials",
            borderColor: "#c45850",
            fill: false
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Company Job Completion Progress'
        }
        
    }
});


//bar chart with forced data: 
new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
        labels: ["Sample 1", "Sample 2", "Sample 3", "Sample 4", "Sample 5", "Sample 6", "Sample 7", "Sample 8", "Sample 9", "Sample 10"],
        datasets: [
            {
                label: "Bravo",
                backgroundColor: "#3e95cd",
                data: [70.12, 70.1, 70.1, 70.1, 70.1, 70, 70, 69.1, 69.1, 69.5]
            }, {
                label: "Charlie",
                backgroundColor: "#8e5ea2",
                data: [71.1, 71.1, 71.1, 71.1, 72.2, 72.2, 71.1, 71.1, 71.1, 71]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Shop Temperatures'
        },
        scales: {
            yAxes: [{
                ticks: { // be careful of leading data 
                    suggestedMin: 65,
                    suggestedMax: 75
                }
            }]
        }
    }
});


//graph from ajax:
$('#TablePrint').click(function () {
    $.getJSON({
        url: 'https://raw.githubusercontent.com/Lee486/slee133/master/salesExample',
        success: function (result, status, xhr) {
            var table = $("<table><tr><th>Month</th><th>Sales_Figure</th><th>Perc</th></tr>");
            var tr;
            for (var i = 0; i < result.length; i++) {
                tr = $("<tr>");
                tr.append("<td>" + result[i].Month + "</td>");
                tr.append("<td>" + result[i].Sales_Figure + "</td>");
                tr.append("<td>" + result[i].Perc + "</td>");
                tr.append("</tr>");
                table.append(tr);
            }
            table.append("</table>");
            $("#jsonData").html(table);
        }
    })
});
