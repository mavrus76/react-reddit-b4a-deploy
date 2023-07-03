FROM node:14

# Папка приложения
ARG APP_DIR=app
# RUN mkdir -p ${APP_DIR}
WORKDIR /${APP_DIR}

# Установка зависимостей
COPY package*.json ./
# RUN npm install
# Для использования в продакшне
RUN npm install --production

# Копирование файлов проекта
COPY . /${APP_DIR}

# Уведомление о порте, который будет прослушивать работающее приложение
EXPOSE 3000

# Запуск проекта
CMD ["npm", "start"]
