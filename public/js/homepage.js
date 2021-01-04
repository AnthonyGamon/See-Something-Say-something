var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Stolen Sandwiches', 'Sidewalks Vandalized', 'Empty Lots Set on Fire', 'Crimes Committed by Squirrels', 'Pidgeons'],
        datasets: [{
            label: 'KC Crime Stats',
            data: [150, 1443, 515, 709, 2070],
            backgroundColor: [
                'rgba(194, 156, 179, 0.8)',
                'rgba(133, 85, 113, 0.8)',
                'rgba(179, 64, 78, 0.8)',
                'rgba(212, 119, 120, 0.8)',
                'rgba(136, 165, 195, 0.8)'
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 3,
        }]
    },
    options: {
        animations: {
            animateRotate: true
        },
        title: {
            display: true,
            text: 'KANSAS CITY CRIME STATISTICS',
            fontColor: 'rgba(255, 255, 255, 1)',
            fontSize: 50
        }
    }
});