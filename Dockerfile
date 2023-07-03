FROM node:16
WORKDIR /
COPY . /
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000/tcp
#  HEALTHCHECK NONE
