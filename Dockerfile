FROM tomcat:10.0.26-jre8
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
COPY . /app
COPY /app/dist/login /usr/local/tomcat/webapps/Login
