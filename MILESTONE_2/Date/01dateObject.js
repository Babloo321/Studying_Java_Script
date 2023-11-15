// creating a new data object
// By default, JavaScript will use the browser's time zone and display a date as a full text string:
const now = new Date();
console.log(now);
const d = new Date("2022-03-27"); // declared a date with specific date initilization
console.log(d);

/* there is 9 way to decalred date and times
            new Date()
            new Date(date string)

            new Date(year,month)
            new Date(year,month,day)
            new Date(year,month,day,hours)
            new Date(year,month,day,hours,minutes)
            new Date(year,month,day,hours,minutes,seconds)
            new Date(year,month,day,hours,minutes,seconds,ms)

            new Date(milliseconds)

*/

// new Date() creates a date object with the current date and time:
var date = new Date();
console.log(`current date and time ${date}`);
date = new Date("october 13, 2014 11:20:30");
console.log(`date and time according to need ${date}`);

date = new Date(2018);
console.log(`date in millisecond ${date}`);
date = new Date(99, 11,23);
console.log(date);

date = new Date("2023-11-15");
console.log(date.getFullYear());
date.setFullYear("2000");
console.log(date.getFullYear());
