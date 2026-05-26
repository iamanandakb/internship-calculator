function display(value){
    document.getElementById('display').value+=value
}
function clearDisplay(){
    document.getElementById('display').value=""
}
function back(){
    var current=document.getElementById('display').value
    document.getElementById('display').value = current.substring(0, current.length-1)
}
function calculate(){
    var result=eval(document.getElementById('display').value)
    document.getElementById('display').value=result
}
