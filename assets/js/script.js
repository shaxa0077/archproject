'use strict'
const botToken = ' 7716222828:AAGN_4EWs3OS3jbE1WeU_ioVWZqz0wRUn5I';
const chatId = '1257271359';

// формиривание сообщения
document.getElementById('simpleForm').addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const text = `Пришло сообщение от : ${name}, С текстом : ${message}`;

    // отправка сообщения

    fetch(`https://api.telegram.org/bot${'7716222828:AAGN_4EWs3OS3jbE1WeU_ioVWZqz0wRUn5I'}/sendMessage?chat_id=${'1257271359'}&text=${encodeURIComponent(text)}`)
        .then((response) => {
            if (response.ok) {
                alert("Ваше сообщение отправлено");
                document.getElementById('simpleForm').reset();
            }
            else {
                alert("Возникла ошибка при отправке сообщений попробуйте еще раз");
            }
        })

        .catch((error) => {
            console.error(error);

        });


});