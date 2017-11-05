import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

import { AppService } from '../services/app-service';

@Component({
   templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    
    private greeting : {id:'',content:''};

    constructor(private appService : AppService, private http:Http) { 
        http.get('resource').map(response => response.json()).subscribe(data => {
            console.log(JSON.stringify(data));
            this.greeting = data;
        });
    }
    
    authenticated() {
        console.log(this.appService.authenticated);
        return this.appService.authenticated;
    }
    

    ngOnInit() { }
}