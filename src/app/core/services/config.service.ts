import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface AppConfig {
  apiUrl: string;
  fileUrl: string;
  production: boolean;
  dataOffset: number
  mode:  string
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: AppConfig | undefined;

  constructor(private http: HttpClient) {
    this.http?.get('../../../assets/config/environment.json').subscribe(
      (res) => {
        this.config = res as AppConfig
        console.log('config', this.config);
        

      })
  }

  loadConfig(){
    /* 
    ) */
    /* this.http?.get<AppConfig>('/src/assets/config/environment.json').pipe(
      map((config: AppConfig) => {
        console.log('configggggggggg', config)
        this.config = config;
        return config;
      })
    ); */
  }

  get getConfig(): AppConfig {
    if(this.config){
      return this.config
    }
     throw new Error("configuration non defini")
    
  }
}