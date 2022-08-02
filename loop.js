var works = ["What's your daily task?", "Unlock Video at 8 PM", "Practice Video", "Take Note", "Practice full module", "Join Support Session"];

// Print 10 Times Using For Loop.

//loop 01: This loop runs inside loop for 10 time.
for (var tenTimesRepeat = 1; tenTimesRepeat <= 10; tenTimesRepeat++) {
    console.log(tenTimesRepeat);
    //Loop 02: This is the main loop where we print the main output for once.

    for (var i = 0; i < works.length; i++) {
        console.log(i + " " + works[i]);
    }

}


// Print 10 Times Using While Loop.

// Loop 01: This loop runs inside loop for 10 time.
var tenTimesRepeat = 1;
while (tenTimesRepeat <= 10) {
    console.log(tenTimesRepeat);
    tenTimesRepeat++

    //Loop 02: This is the main loop where we print the main output for once.
    var i = 0;
    while (i < works.length) {
        console.log(i + " " + works[i]);
        i++;
    }

}

//Print 10 Times Reverse Using For Loop.

// Loop 01: This loop runs inside loop for 10 time.
for (tenTimesRepeat = 1; tenTimesRepeat <= 10; tenTimesRepeat++) {
    console.log(tenTimesRepeat);

    //Loop 02: This is the main loop where we print the main output for once.
    for (var i = works.length - 1; i >= 0; i--) {
        console.log(i + " " + works[i]);
    }

}


//Print 10 Times Reverse Using While Loop.

// Loop 01: This loop runs inside loop for 10 time.
var tenTimesRepeat = 1;
while (tenTimesRepeat <= 10) {
    console.log(tenTimesRepeat);
    tenTimesRepeat++
    //Loop 02: This is the main loop where we print the main output for once.
    var i = works.length - 1;
    while (i >= 0) {
        console.log(i + " " + works[i]);
        i--;
    }
}