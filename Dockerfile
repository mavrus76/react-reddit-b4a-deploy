FROM node:16

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
RUN npm install -g serve

# Уведомление о порте, который будет прослушивать работающее приложение
EXPOSE 5000

# Запуск проекта
CMD ["npm", "start"]
