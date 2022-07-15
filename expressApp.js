// Подключаем js фреймворк для запуска сайта
const express = require('./express');
// Подключаем библиотеку CORS для кроссдоменных запросов
// На данный момент не сильно необходимо, но лучше оставить
const cors = require('./cors');
// Подключаем библиотеку сваггера для express фреймворка
const swaggerUi = require('./swagger-ui-express');
// Подключаем документацию для сваггера
const openApiDocumentation = require('./openApi.json');
// Создаем экземпляр приложения
const swaggerApp = express();
// Включаем CORS, и включаем с сваггер с параметром withCredentials:true для куков, используя документацию
swaggerApp.use(cors());
swaggerApp.use('/', swaggerUi.serve, swaggerUi.setup(openApiDocumentation, { swaggerOptions: { withCredentials: true } }));
// Запускаем сайт под нужным нам портом, порт может быть любой не занятый во внутренней сети
swaggerApp.listen(3333, () => {
    console.log(`Swagger-ui for creatio is being listened on port 3333!`);
});