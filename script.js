var currentTime = $('.current-time')
var storedHour = []
var storedHour_NAME = 'Stored Hours'

function currentSeconds() {
    var nowTime = moment().format('MMM DD YYYY, h:mm:ss a')
    currentTime.text(nowTime)
}

setInterval(currentSeconds, 1000)

var timeArray = ['8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM']
var numberArray = ['08','09','10','11','12','13','14','15','16','17','18','19','20']
console.log(timeArray.length)
var main = $('.card').addClass('px-5')

for (var i = 0; i < timeArray.length; i++) {
    var timeId = (timeArray.slice(i, i + 1))
    var milId = (numberArray.slice(i, i + 1))
    var hourRow = $('<div>').addClass('row mb-2 activity-hour')
    var hour = $('<h4>').addClass('col-2 bg-warning border-start-0 border border-dark border border-3')
    var textArea = $('<textarea>').addClass('col-8 activity-input').text('')
    var lockIcon = $('<i>').addClass("fas fa-lock")
    var saveBtn = $('<button>').addClass('col-2 bg-info border-end-0 border border-dark border border-3').append(lockIcon)
    
    hour.text(timeId)
    main.append(hourRow)
    hourRow.append(hour, textArea, saveBtn)

    var nowHour = moment().format('HH')
    console.log(nowHour)
    console.log(milId)
    if (milId < nowHour) {
        textArea.attr('class', 'col-8 bg-secondary')
    } else if (milId = nowHour) {
        textArea.attr('class', 'col-8 bg-danger')
    } else {
        textArea.attr('class', 'col-8 bg-success')
    }

    // var block = {
    //     id: milId,
    //     input: textArea.val
    // }
    // console.log(block)
    
    saveBtn.on('click', function() {
    var textInput = $($(this).parent().children()[1])
    // var innerText = textInput.val()
    console.log(innerText)
    })



}

// function checkHour() {
//     var nowHour = moment().format('H')
//     var row = $('.activity-hour');
//     var input = $('.activity-input')
//     input.textContent = ""
    

//     for (var i = 0; i < row.length; i++) {
//         var rowHour = (row[i].id);
//         console.log(rowHour)
//         if (rowHour < nowHour) {
//         row[i].setAttribute('style', 'background-color: grey');
//         input

//         }
//         else if (nowHour === rowHour) {
//         row[i].setAttribute('style', 'background-color: red')
//         }
//         else {
//         row[i].setAttribute('style', 'background-color: green')
//         }
//     }
// }


    



// I need to match each button with each inputfield
// when I click on a button, the input needs to be saved
// when I reload the page, the input needs to know which input field to go into



setInterval(currentSeconds, 1000)

// checkHour()





