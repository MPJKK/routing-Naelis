import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

    stop = '';

    constructor(private router: Router, private digitransitService: DigitransitService) {

    }

    clicked(event) {
        this.digitransitService.pysakki = this.stop;
        this.router.navigate(['routes']);
    }

    ngOnInit() {
    }

}
