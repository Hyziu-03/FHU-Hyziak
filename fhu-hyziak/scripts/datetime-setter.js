function returnWeekday(itself) { 
    document.getElementById('weekday').innerHTML = itself; 
}

function getWeekday() {
    'use strict';
    var today = new Date();
    try {
        var weekday = today.getDay();
        switch(weekday) {
            case 0:
                returnWeekday('Niedziela');
            break;
            case 1:
                returnWeekday('Poniedziałek');
            break;
            case 2:
                returnWeekday('Wtorek');
            break;
            case 3:
                returnWeekday('Środa');
            break;
            case 4:
                returnWeekday('Czwartek');
            break;
            case 5:
                returnWeekday('Piątek');
            break;
            case 6:
                returnWeekday('Sobota');
            break;
            default:
                returnWeekday('');
            break;
        }
    } catch(exception) {
        console.error(exception);
    }
}

function validateTime(receivedHours, receivedMinutes) {
    if(receivedMinutes < 10) {
        receivedMinutes = '0' + receivedMinutes;
    }
    if(receivedHours < 10) {
        receivedHours = '0' + receivedHours;
    }
    document.getElementById('time').innerHTML = receivedHours + " : " + receivedMinutes;
}

function getTime() {
    'use strict';
    var now = new Date();
    try {
        var currentHours = now.getHours();
        var currentMinutes = now.getMinutes();

        validateTime(currentHours, currentMinutes);
    } catch (exception) {
        console.error(exception);
    }
    setTimeout('getTime()', 1000);
}

function validateDate(receivedDay, receivedMonth, receivedYear) {
    if (receivedDay < 10) {
        receivedDay = '0' + receivedDay;
    }
    if (receivedMonth < 10) {
        receivedMonth = '0' + receivedMonth;
    }
    document.getElementById('date').innerHTML = receivedDay + '/' + receivedMonth + '/' + receivedYear;
}

function getCurrentDate() {
    'use strict';
    var today = new Date();
    try {
        var thisDay = today.getDate();
        var thisMonth = today.getMonth() + 1;
        var thisYear = today.getFullYear();
        validateDate(thisDay, thisMonth, thisYear);
    } catch (exception) {
        console.error(exception);
    }
}

window.addEventListener('load', function () {
    getWeekday();
    getTime();
    getCurrentDate();
});
