#Paso uno - compilar en el docker inicial
#FROM node:18-alpine as paso-uno
#RUN mkdir -p /app
#WORKDIR /app
#COPY . /app
#Paso dos copiar compilado al docker final
FROM tomcat:10.0.26-jre8
COPY picweb/PicWeb /usr/local/tomcat/webapps/picweb
EXPOSE 5000