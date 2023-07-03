FROM node:16
WORKDIR ../dist
COPY . /
RUN npm install
CMD ["npm", "start"]
EXPOSE 8080/tcp
#  HEALTHCHECK NONE
