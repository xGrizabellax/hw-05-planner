// var row = $('.activity-hour');
// row[i] = true;
// if (row[i] = false) {
//     row[i].setAttribute('style', 'background-color: grey')
// }
var currentTime = $('.current-time')
var input = document.querySelector('.activity-input');
input.textContent = ""


function currentSeconds() {
    var nowTime = moment().format('MMM DD YYYY, h:mm:ss a')
    currentTime.text(nowTime)
}

function checkHour() {
    var nowHour = moment().format('H')
    var row = $('.activity-hour');
    var input = $('.activity-input')
    

    for (var i = 0; i < row.length; i++) {
        var rowHour = (row[i].id);
        console.log(rowHour)
        if (rowHour < nowHour) {
        row[i].setAttribute('style', 'background-color: grey');
        input

        }
        else if (nowHour === rowHour) {
        row[i].setAttribute('style', 'background-color: red')
        }
        else if (rowHour > nowHour) {
        row[i].setAttribute('style', 'background-color: green')
        }
    }
}

var button = document.querySelector('button')

button.addEventListener('click', function(event) {
    event.preventDefault(event);
    console.log(input.value)
    
})



setInterval(currentSeconds, 1000)

checkHour()





