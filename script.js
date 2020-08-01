$(document).ready(function(){

    //Set the curent date
    $("#currentDay").html("<i class='fa fa-calendar'></i> " + moment().format('dddd MMMM Do YYYY'));


    //Set the start and end times
    var startTime = moment().set({hour:06,minute:00});
    var endTime = moment().set({hour:22,minute:00});

    //Create an array of times 
    var timesArr = [];
    while(startTime <= endTime){
        timesArr.push(new moment(startTime));
        startTime.add(1, 'hour');
    }

    //Render the timeblocks
    for (var i = 0; i < timesArr.length; i++){
        var timeblock = $("<div>");

        //get the curent time
        var now = moment()
        var relativeTime = "";

        //Determine if the block is in the present, future or past
        switch (true){
            case timesArr[i].isSame(now, "hour"): relativeTime = "present";
            break;
            case timesArr[i].isAfter(now, "hour"): relativeTime = "future"; 
            break;
            case timesArr[i].isBefore(now, "hour"): relativeTime = "past";
            break;
        }

        var id = timesArr[i].format('HH');
        var task = localStorage.getItem(id) || "";

        //Set the html for the timeblock
        timeblock.html("<div class='time-block' id ='" + id + "'> <div class='row'> <div class='col-2 hour'> <p>" + timesArr[i].format('hh A') + "</p> </div> <textarea class='col-8 " + relativeTime + " description' id = 'text-"+ id +"'>" + task + "</textarea> <button class='col-2 saveBtn'> <i class='fas fa-save'></i></button> </div> </div>");

        //Append the timeblock to the container
        $(".container").append(timeblock);
    }

    $(".saveBtn").on("click", function(){

        var containerID = $(this).parent().parent().attr('id');
        var textAreaID = "#text-" + containerID;

        localStorage.setItem(containerID, $(textAreaID).val());

    });


});