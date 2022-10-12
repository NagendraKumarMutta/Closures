const limitFunctionCallCount = require("../limitFunctionCallCount")

let callCounter=0
function increment(){
    callCounter+=1
    return callCounter
   
}

let n=5

for (i=0;i<n+1;i++){
    limitFunctionCallCount(increment, n)
}