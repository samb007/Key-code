const main = document.getElementsByClassName('operators');




onkeydown = function keycode(){
    let key = event.keyCode;
    

    document.getElementById('keycode').innerHTML = "Keycode: " + key;
    let eventkey = event.key;
    document.getElementById('eventkey').innerHTML = "Event.key: " + eventkey;
    let code = event.code;
    document.getElementById('code').innerHTML = "Code: " + code;
    let bigcode = event.keyCode;
    document.getElementById('bigcode').innerHTML = bigcode;
    
    
    
    
}

