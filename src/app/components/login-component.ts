import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { AppService } from '../services/app-service';


@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    
    constructor(private app: AppService, private routerSvc: Router) { }

    private credentials = {username:'', password:''};

    login() : boolean {
        this.app.authenticate(this.credentials).subscribe(
            data => {
                this.routerSvc.navigateByUrl('/');
            }
        );

        return false;
    }

    ngOnInit() { }
}