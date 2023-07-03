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

# Уведомление о порте, который будет прослушивать работающее приложение
EXPOSE 8000

# Запуск проекта
CMD ["npm", "start"]
