import {Component, OnInit} from '@angular/core';
import {HttpMethodsService} from '../../services/http-method.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor(private _http: HttpMethodsService) {

    }

    ngOnInit() {
        this.getEmployeeDetails();
    }

    private getEmployeeDetails() {
        this._http._getCall('getEmployeeDetails/admin').subscribe(data => {

        }, err => {

        });
    }
}