npm install -g @angular/cli
npm install
ng build
mkdir dist/deploy
cp Dockerfile dist/deploy/
cp manifests/deployment-dev.yml dist/deploy/
