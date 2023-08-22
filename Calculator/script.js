let data = " ";

//function for clear the value.

function onclearvalue(){
    data = " ";
    console.log("clear");
    document.getElementById('text').value='';
}

// function for append the value.

function onaddvalue(val){
    data += val;
    console.log('append'+ val);
    document.getElementById('text').value = data
}

//To calculate the result of the expression.
function oncalulate(){
    try{
        data = eval(data).toString();
        console.log(data);
        document.getElementById('text').value = data;
    }
    catch(error){
        document.getElementById('text').value = "error";
    }
}

