FROM node:15

WORKDIR /usr/app
COPY ./workspace .
RUN yarn
CMD ["yarn", "start"]