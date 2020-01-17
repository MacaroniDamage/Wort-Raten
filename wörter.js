const wort = "Makaronis";
let wrongAttempts = 0;


function showMessage(){
    const messageBox = document.getElementById("message");
    let lengthOfword = wort.length;
    
    //Show Message
    messageBox.innerHTML = "Rate ein Wort mit " + lengthOfword + " Buchstaben";
}

function evaluateInput(){
    let inputValue = document.querySelector("input#userInput").value;
    const messageBox = document.getElementById("message");
    const enterButton = document.getElementById("userEnter");
    if(wort == inputValue){
        messageBox.innerHTML = "Du hast richtig geraten";
    }else{
        wrongAttempts = wrongAttempts + 1;
        messageBox.innerHTML = "Leider falsch";
        if(wrongAttempts >= 4){
            messageBox.innerHTML = "Du hast zu oft geraten";
            enterButton.innerHTML = "Nochmal versuchen"
        }
    }
}