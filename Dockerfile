FROM node:14-alpine

COPY ./front /home/app/front/

WORKDIR /home/app/front/

RUN yarn install
RUN yarn run build

RUN yarn global add serve
