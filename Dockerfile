#Paso uno - compilar en el docker inicial
FROM node:18-alpine as paso-uno
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm uninstall -g @angular/cli
RUN npm cache clean --force
RUN npm install -g @angular/cli@latest
#RUN npm install -g @angular-devkit/build-angular
COPY . /app
#RUN npm run build
#Paso dos copiar compilado al docker final
#FROM nginx:1.23.1-alpine
#COPY --from=paso-uno /app/dist/PicWeb /usr/share/nginx/html
FROM tomcat:10.0.26-jre8
COPY --from=paso-uno /app/dist/PicWeb /usr/local/tomcat/webapps/PicWeb
