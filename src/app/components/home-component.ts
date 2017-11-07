import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';

import { AppService } from '../services/app-service';

@Component({
   templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    
    private greeting : {id:'',content:''};

    constructor(private appService : AppService, private http:Http) { 
        http.get('token').map(response => response.json()).subscribe(data => {
            console.log(JSON.stringify(data));
            var token = data.json().token;
            var headers = new Headers();
            headers.append('X-Auth-Token', token);
            
            http
            .get('http://localhost:9000', {headers : headers})
            .subscribe(response => this.greeting =response.json());

           
        });
    }
    
    authenticated() {
        console.log(this.appService.authenticated);
        return this.appService.authenticated;
    }
    

    ngOnInit() { }
}