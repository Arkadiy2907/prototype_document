задача: сделать расширение над Wildberries, добавив строки цен СПП и распределений на складе,
но все блокирует CORS, изначальный код в папке start-code. последнее изменение в script2(его буду переделывать) в нем в последней функции есть путь https, который можно записать например так:

    function getData() {
      let e = 14792613;
      let t = 'appType=1&curr=rub&dest=-1257786&spp=29'

      fetch(`https://card.wb.ru/cards/detail?appType=1&curr=rub&${t}&nm=${e}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })

        .catch(error => {
          console.error(error);
        });
    }

    в постман он работает, с сайта блокировка cors
