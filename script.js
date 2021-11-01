var currentTime = $('.current-time')
var resetBtn = $('.reset')


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
    var textArray= [];
    var saveArray = [];
    var timeId = (timeArray.slice(i, i + 1))
    var milId = (numberArray.slice(i, i + 1))
    var hourRow = $('<div>').addClass('row mb-2 activity-hour').attr('id', i)
    var hour = $('<h4>').addClass('col-2 bg-warning border-start-0 border border-dark border border-3')
    var textArea = $('<textarea>').addClass('col-8 activity-input')
    var lockIcon = $('<i>').addClass("fas fa-lock")
    var saveBtn = $('<button>').addClass('col-2 bg-info border-end-0 border border-dark border border-3').append(lockIcon)
    
    hour.text(timeId)
    main.append(hourRow)
    hourRow.append(hour, textArea, saveBtn)

    var nowHour = moment().format('HH')
    console.log(nowHour)
    console.log(milId)
    if (milId < nowHour) {
    textArea.prop('disabled', true)
    textArea.attr('class', 'col-8 bg-secondary text-black')
    } else if (milId == nowHour) {
        textArea.attr('class', 'col-8 bg-danger')
    } else {
        textArea.attr('class', 'col-8 bg-success')
    }

    
    saveBtn.on('click', function(event) {
        event.preventDefault()
        saveItem(this)
    })

    function init() {
    for (var i = 0; i < main.children().length; i++) {
        textArray.push(main.children().eq(i).children().eq(1))
    }

    if (JSON.parse(localStorage.getItem('savings')) === null) {
        localStorage.setItem('savings', JSON.stringify(saveArray))
    
    } else {
        saveArray = JSON.parse(localStorage.getItem('savings'))
        populateText()
    }
}

    resetBtn.on('click', function(event) {
        event.preventDefault();
        localStorage.clear()
        textArea.val("")
    })
    

     function populateText() {
        for (var i = 0; i < textArray.length; i++) {
            $(textArray[i]).val(saveArray[i]);
        }
     }

     function saveItem(target) {
        var textInput = target.previousElementSibling;
        var textId = target.parentElement.id;
        saveArray[textId] = textInput.value;
        console.log(saveArray[textId])
        localStorage.setItem('savings', JSON.stringify(saveArray))
     }


}




setInterval(currentSeconds, 1000)
init()


// checkHour()





