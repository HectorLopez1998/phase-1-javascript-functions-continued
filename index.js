// Your code here
function saturdayFun(string="roller-skate"){
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string="go to the office"){
return `This Monday, I will ${string}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }