console.log('start')

//micro task 
const myPromise = new Promise((resolve,reject) => { 
    resolve('myPromise1')
})

Promise.all([myPromise]).then((value) => { 
    console.log(value[0])
})

//macro task
setTimeout(() => {
    console.log('timeout')
})

//micro task prioritized
process.nextTick(() => {
    console.log('next tick')
})

console.log('end')