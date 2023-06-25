console.log('start ', 'callstack' )

//micro task 
const myPromise = new Promise((resolve,reject) => { 
    resolve('myPromise1')
})

// 2
Promise.all([myPromise]).then((value) => { 
    console.log(value[0],2)
})

// 4
// macro task
setImmediate(()=>{
    console.log('set immediate',4)
})

// 3
//macro task
setTimeout(() => {
    console.log('timeout',3)
})

//1
//micro task prioritized  1
process.nextTick(() => {
    console.log('next tick',1)
})

console.log('end','callstack')
