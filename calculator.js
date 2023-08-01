//ALL NUMBER AND OPERATOR BUTTON
function display(num) {
    result.value += num
}

//AC KEY
function allClear() {
    result.value = ""
}


//OPERATIONM

function equal(){
    result.value=eval(result.value)
}

//delete


function delet(){
    result.value= result.value.slice(0,-1)

}