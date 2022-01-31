document.getElementById("decrypt").addEventListener("click", function(){text()});
function text() {
    let message=document.getElementById('text').value.replace(/[^\w\s']|_/g, '').replace(/\s+/g, '');
    let english=/^[a-z]+$/;
    if(english.test(message) && message.length<=100000){
        aliceDecrypt (message);
    }
    else{
        document.getElementById("answer").innerHTML = "Введите строчные английские буквы";
    }
}
function aliceDecrypt(message) {
    let changeArr  = message.replace(/(.)\1/g, "$1").split('');
    console.log(changeArr);
    let answer=message;
    changeArr.forEach(function(letter){
        if(answer.includes(letter=letter.repeat(2))){
            answer=answer.replace(letter,"");
        }
    }); 
    document.getElementById("answer").innerHTML = `Ответ: ${answer}`;
}
