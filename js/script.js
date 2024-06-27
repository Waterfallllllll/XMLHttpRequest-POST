window.addEventListener("DOMContentLoaded", () => {
    function req() {

        let body = {
            name: "Someone",
            surname: "Else",
            age: 26,
            id: Math.random()
        };

        let json = JSON.stringify(body); // Этот метод занимается тем, что берёт объект javascript и превращает его в формат json.

        const request = new XMLHttpRequest(); // Создали новый объект которые позволяет подгружать данные без перезагрузки страницы. Технология ajax.
        request.open("POST", "http://localhost:3000/people"); // Данный метод позволяет указать тип запроса.
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");
        request.send(json); // Отправляем из клиента запрос на сервер и отправляем наш json объект. 
        // Как только мы отправили запрос на сервер, мы также получаем ответ от сервера. Дальше про это.
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status == 200) {
                // Эти стадии загрузки находятся в свойстве readyState.
                // Также мы проверяем статус, чтобы узнать как именно обработался наш запрос. Вот тут список статусов: https://developer.mozilla.org/ru/docs/Web/HTTP/Status#%D1%83%D1%81%D0%BF%D0%B5%D1%88%D0%BD%D1%8B%D0%B5_%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%8B

                let data = JSON.parse(request.response); // Мы работаем с json файлом и json сервер, тоже отдает нам json файл. Чтобы его использовать на клиенте при помощи JavaScript, мы его должны распарсить. То есть json формат превращаем в обычный объект или массив (В зависимости от того, что в файле json) который можно будет использовать на нашем клиенте внутри JavaScript.
                // Свойство respone содержить ответ от сервера который был получен.
                console.log(data);

                // Дальше работаем с данными в зависимости от того, какие именно данные нам предоставил сервер

                // data.forEach(item => {
                //     let card = document.createElement("div");

                //     card.classList.add("card");

                //     let icon;
                //     if (item.sex == "male") {
                //         icon = "icons/mars.png";
                //     } else {
                //         icon = "icons/female.png";
                //     }

                //     card.innerHTML = `
                //         <img src ="${item.photo}" alt="photo">
                //         <div class"name">${item.name} ${item.surname}</div>
                //         <div class="sex">
                //             <img src=${icon} alt="male">
                //         </div>
                //         <div class="age">${item.age}</div>
                //     `;

                //     document.querySelector(".app").appendChild(card);
                // });
            } else {
                console.error("Что-то пошло не так");
            }
        }); 

        this.remove(); // Контекст this: В контексте функции-обработчика события this ссылается на элемент, к которому прикреплен обработчик события, в данном случае — на кнопку.
    }

    document.querySelector("button").addEventListener("click", req, {"once": true});
});