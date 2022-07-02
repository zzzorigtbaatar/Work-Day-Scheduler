# Work-Day-Scheduler

# Code-Quiz

## Description 

Welcome to Work Day Scheduler.

This project aims to showcase my ability in utilizing Third Party APIs by presenting a day planner with dynamically updating timeblocks that allow the user to input a task:

![](./assets/images/demo-work-day-scheduler.gif)

and storing user tasks locally:
![](./assets/images/screenshot-work-day-scheduler.png)

![](./assets/images/demo-work-day-scheduler-2.gif.gif)

## Usage

In order to do this project, I used Third Party APIs such as JQuery, Bootstrap, Moment.js, and Javascript, HTML, CSS, git and github.

I reference and manipulate HTML elements through JQuery's `$()` selector and methods as well as adding Bootstrap class styling.
```
        var container = $(".container");
        var groupDiv = $("<div>").addClass("row time-block");
        var timeDiv = $("<div>").text(timeString(i)).addClass("hour col-1");
        var noteDiv = $("<input>").addClass("justify-content-center col-10 " + timeColor(i))
```

I use Moment.js to display current date and time information as well as for formatting.
```
currentDay.text(moment().format("dddd, MMMM Do"));
```

## Links

[Deployed Website](https://zzzorigtbaatar.github.io/Work-Day-Scheduler/)

[Project Repository](https://github.com/zzzorigtbaatar/Work-Day-Scheduler)

## Credits

* Jerome Chenette, UC Berkeley Extension Coding BootCamp

* https://getbootstrap.com/docs/5.2/getting-started/introduction/

* https://api.jquery.com/

* https://momentjs.com/docs/

## License

[LICENSE](/LICENSE)

## Contact

https://www.linkedin.com/in/zorizulkhuu/

https://zzzorigtbaatar.github.io/My-Portfolio