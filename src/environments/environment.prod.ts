export const environment = {  
  AppSettings: {
    Title: "Doc1 Web",
    Version: "v1.1",
    Environment: "Cloud",
    Dtap: "Production", 
  },
  AppConnections: {
    AuthCloudProduction: "https://ventaspapprod.telefonicawebsites.co/back2/",
  },
  Url(name){
    return environment.AppConnections[name+environment.AppSettings.Environment+environment.AppSettings.Dtap]
  }
};
