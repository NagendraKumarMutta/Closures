let count=null
function limitFunctionCallCount(callback, n){
     count = callback()
     if (count>n){
        console.log(null)
     }else{
        console.log(callback)
     }
}

module.exports = limitFunctionCallCount