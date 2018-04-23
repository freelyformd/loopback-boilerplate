FROM node:alpine

RUN ["mkdir", "/app/"]

WORKDIR "/app/"

ENTRYPOINT ["npm", "start"]

EXPOSE 3000

COPY [".", "/app/"]

RUN ["yarn"]
