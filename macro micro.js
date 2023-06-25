console.log('start')

//micro task comes after nextTick
const myPromise = new Promise((resolve,reject) => { 
    resolve('myPromise1')
})

Promise.all([myPromise]).then((value) => { 
    console.log(value[0])
})

//macro task comes at last after promises
setTimeout(() => {
    console.log('timeout')
})

//micro task prioritized
process.nextTick(() => {
    console.log('next tick')
})

console.log('end')
