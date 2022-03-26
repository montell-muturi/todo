FROM mongo:latest
ENV MONGO_INITDB_DATABASE=todo
EXPOSE 27017
COPY ./mongo-init.js /docker-entrypoint-initdb.d

