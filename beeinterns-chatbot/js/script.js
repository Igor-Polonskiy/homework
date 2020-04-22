//объявляем глобальные переменные
const dialog = $(".window");
const send = $('.send');
const text = $('.textmessage');
const dots = $('.dots');
const graybtn = $('.gray-button');
let start = false;
let number1 = 0;
let number2 = 0;
let count = false;
//функция проверки поля ввода на наличие символов
function check() {
    if (text.val() != '') {
        graybtn.hide();
        send.show();
        dots.removeClass('nodisplay');
    } else {
        graybtn.show();
        send.hide();
        dots.addClass('nodisplay');
    }
}
//функция отправки сообщения и получения ответа
send.click(async function () {
    let botico = $('<img src="img/bot.svg">');
    let userico = $('<img src="img/user.svg">');
    let message = $("<div class='message'></div>");
    let usermessage = $('<div class="usermessage"></div>');
    let botmessage = $('<div class="botmessage"></div>');
    let answer = $("<div class='message'></div>");
    usermessage.append('<p>' + text.val() + '</p>');
    message.append(userico, usermessage);
    dialog.append(message);
    message.animate({ opacity: 1 }, 500);
    dialog.animate({ scrollTop: dialog.prop('scrollHeight') }, "slow");

    if (text.val() == '/start') {
        botmessage.append('<p>Привет, меня зовут Чат-бот, а как зовут тебя?</p>');
        start = true;

    } else if (text.val() !== '/start' && start == false) {
        botmessage.append('<p>Введите команду /start, для начала общения</p>');

    } else if (start == true) {
        let arr = text.val().split(':');
        if (arr[0] == '/name') {
            botmessage.append('<p>Привет ' + arr[1] + ', приятно познакомится. Я умею считать, введи числа которые надо посчитать</p>');
        } else if (arr[0] == '/number') {
            count = true;
            let numbers = arr[1].split(',');
            number1 = Number(numbers[0]);
            number2 = Number(numbers[1]);
            botmessage.append('<p>Какое из действий будем совершать:  -, +, *, / ?</p>');
        } else if (count == true && text.val() == '-') {
            let result = (number1 - number2);
            botmessage.append('<p>' + number1 + '-' + number2 + '=' + result + '</p>');
            count = false;
        } else if (count == true && text.val() == '+') {
            let result = number1 + number2;
            botmessage.append('<p>' + number1 + '+' + number2 + '=' + result + '</p>');
            count = false;
        } else if (count == true && text.val() == '*') {
            let result = number1 * number2;
            botmessage.append('<p>' + number1 + '*' + number2 + '=' + result + '</p>');
            count = false;
        } else if (count == true && text.val() == '/') {
            let result = number1 / number2;
            botmessage.append('<p>' + number1 + '/' + number2 + '=' + result + '</p>');
            count = false;
        } else if (arr[0] == '/weather') {
            let url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/294021?apikey=f85lGrZIE2W1l0Qdulmgl3uXue91uaPB&language=ru-RU&metric=true';
            let response = await fetch(url);
            let data = await response.json();
            botmessage.append('<p>Завтра в Москве ' + data.DailyForecasts[1].Day.IconPhrase +
                ', температура от ' + data.DailyForecasts[1].Temperature.Minimum.Value +
                ' до ' + data.DailyForecasts[1].Temperature.Maximum.Value +
                ' градусов по цельсию <a href=' + data.DailyForecasts[1].Link +
                ' target="_blank" >Accuweather</a> </p>');
        } else if (arr[0] == '/stop') {
            botmessage.append('<p>Всего доброго, если хочешь поговорить пиши /start</p>');
            start = false;
        } else {
            botmessage.append('<p>Я не понимаю, введите другую команду!</p>');
        }
    }
    answer.append(botico, botmessage);
    setTimeout(function() {
        dialog.append(answer);
        answer.animate({ opacity: 1 }, 500);
        dialog.animate({ scrollTop: dialog.prop('scrollHeight') }, "slow");
    }, 1000);
    text.val('');
    check();
});