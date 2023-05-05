display_date();


function display_date(){
    let currentDate = new Date();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    if(hour < 10) hour = '0' + hour;
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;

    let displayDate = hour + ":" + minutes + ":" + seconds;
    document.getElementById("date").innerHTML = displayDate;
    refreshDate();
}

function refreshDate(){
    let refreshRate = 1000;
    let mytime = setTimeout('display_date()', refreshRate);
}
