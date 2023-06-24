for (let i = 0; i <= 10; i++){
    //What happens from 0 to 3
    //The call stack prints them
    // like log 1 then 1 gets logged
    // and the console.log(1)gets popped out of the call stack
    if (i === 4) {
        //Here 4 doesn't get printed directly
        // call stack passes it to node APIs
        setTimeout(() => {
            console.log(i)
        })
        continue
    }
    if (i === 5) {
        //Here 5 doesn't get printed directly
        // call stack passes it to node APIs
        process.nextTick(() => {
            console.log(i)
        })
        continue
    }
    // call stack prints the rest
    console.log(i)
}
//Then the event loop finds 2 events pending to get handled
//Micro tasks like promises are prioritized 
//Then after micro tasks come macro tasks to be handled
//Note that micro-tasks are handled in the same event loop cycle
// while macro tasks get handled in the next cycle 
