import { HttpModule,Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
   
   public authenticated = false;
   
   constructor(private http: Http) {
       console.log('Init AppService...');
   } 


    authenticate(credentials) {
        var headers;
        headers = credentials ? {
            authorization : "Basic" + btoa(credentials.username + ":" + credentials.password)
        }:{};

        return this.http.get('user', {headers: headers}).map(response => {
            if(response.json().name) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            //callback && callback();
        });
    }
}
