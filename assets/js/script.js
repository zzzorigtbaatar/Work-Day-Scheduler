//Add current day to header
var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do"));


//Add timeblocks to page
function displayTimeblocks(){
    for(var i = 6; i <=22; i++){
        var container = $(".container");
        var groupDiv = $("<div>").addClass("row time-block");
        var timeDiv = $("<div>").text(timeString(i)).addClass("hour col-1");
        var noteDiv = $("<input>").addClass("justify-content-center col-10 " + timeColor(i))
        noteDiv.attr("id", "task for hour " + i);
        var saveDiv = $("<div>").text("💾").addClass("saveBtn col-1");
        saveDiv.attr("id", "saveBtn");
        groupDiv.append(timeDiv, noteDiv, saveDiv);
        container.append(groupDiv);
        console.log($("#task for hour " + i));
    }
}

//Converts 24 hour format into AM and PM format
function timeString(int){ 
    if(int < 12){
        return (int+"AM");
    }
    if(int == 12){
        return (int+"PM");
    } else {
        return ((int-12)+"PM");
    }
}

//Changes color of timeblock depending on state
function timeColor(time){
    if(time == moment().format("H")){
        return "present";
    } else if(time < moment().format("H")){
        return "past";
    } else {
        return "future";
    }
}

//Calls function to put up timeblocks
displayTimeblocks();

$(document).on("click", "#saveBtn", function(event){
    //function to store input text
})