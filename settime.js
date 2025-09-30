// setTime() - setTime() sets a date and time for a Date object.
//             It takes milliseconds since January 1, 1970 (Unix Epoch) as input.
//             It replaces the entire date/time of the Date object.

// 👉 In simple words: You give it a number of milliseconds, and it updates the Date object to that moment.

// setInterval() → repeats code after fixed time.
// syntax- setInterval(()=>{},time(milisecond))

setInterval(() => {
    console.log("hello i'm setInterval")
    },500)



setTimeout(() => {
    console.log("hello i'm settimeout")
    },2000)
    