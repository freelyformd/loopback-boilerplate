FROM node:alpine

RUN ["mkdir", "/app/"]

ENV NODE_ENV=production

WORKDIR "/app/"

ENTRYPOINT ["npm", "start"]

EXPOSE 3000

COPY [".", "/app/"]
