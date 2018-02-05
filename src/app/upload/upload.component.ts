import {Component, OnInit} from '@angular/core';
import {Media} from '../models/media';


@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

    file = new Media('', '');
    formData = new FormData();

    constructor() {
    }

    setFile(evt) {
        // console.log(evt);
        // console.log(evt.target.files[0].name);
        // .target.files[0].name
        const file: File = evt.target.files[0];
        // this.formData.append(this.file.title, evt.target.files[0], evt.target.files[0].name);
        console.log(this.file.title);
        console.log(this.file.description);
        console.log(this.file.title, evt.target.files[0], evt.target.files[0].name);

    }

    ngOnInit() {
    }

}
