for (let i = 0; i <= 10; i++){
    // what happens from 0 to 3
    // the call stack prints them
    // like log 1 then 1 gets logged
    // and the console.log(1)gets poped out of the call stack
    if (i === 4) {
        // here 4 doesnt get printed directly
        // call stack passes it to node apis
        setTimeout(() => {
            console.log(i)
        })
        continue
    }
    if (i === 5) {
        // here 5 doesnt get printed directly
        // call stack passes it to node apis
        process.nextTick(() => {
            console.log(i)
        })
        continue
    }
    // call stack prints the rest
    console.log(i)
}
// then event loop find 2 events pending to get handled
// micro tasks like promises are priotrized 
// then after micro tasks comes macro tasks to be handled
// note that micro tasks are handled in same event loop cycle
// while macro tasks gets handled in the next cycle 