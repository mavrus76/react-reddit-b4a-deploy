FROM node:16
ENV CLIENT_ID=Ycsf45snRpRCEXTbeXfzPA
ENV SECRET=WbxMfydHkb-72uFdNC5lKv7jzj6oAg

# Папка приложения
ARG APP_DIR=app
# RUN mkdir -p ${APP_DIR}
WORKDIR /${APP_DIR}

# Установка зависимостей
COPY package*.json ./
RUN npm ci
# Для использования в продакшне
# RUN npm install --production

# Копирование файлов проекта
COPY . .

RUN npm run build

# Уведомление о порте, который будет прослушивать работающее приложение
EXPOSE 3000

# Запуск проекта
CMD ["npm", "start"]
