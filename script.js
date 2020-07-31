$(document).ready(function(){

    //Set the curent date
    $("#currentDay").html("<i class='fa fa-calendar'></i> " + moment().format('dddd MMMM Do YYYY'));

    //get the curent time

    var now = moment().format('HH');


    //Create an array of times 
    var startTime = moment().utc().set({hour:06,minute:00});
    var endTime = moment().utc().set({hour:22,minute:00});

    var timesArr = [];

    while(startTime <= endTime){
        timesArr.push(new moment(startTime).format('hh A'));
        startTime.add(1, 'hour');
    }

    console.log(timeStops);

    



});