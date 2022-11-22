FROM tomcat:10.0.26-jre8
COPY picweb-demo/PicWeb /usr/local/tomcat/webapps/picweb
EXPOSE 4200
