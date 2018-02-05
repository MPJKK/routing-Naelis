import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';
import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

    user = new User('', '', '');

    constructor(private router: Router, private mediaService: MediaService) {
    }

    register() {
        console.log(this.user);
        this.mediaService.newUser(this.user).subscribe(response => {
            console.log(response);
            this.router.navigate(['front']);
            this.mediaService.login(this.user);

        }, (error: HttpErrorResponse) => {
            console.log(error);
            this.router.navigate(['register']);
        });
    }


    ngOnInit() {
    }

}
