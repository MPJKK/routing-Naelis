import { Component, OnInit } from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    title = 'This is the map component';

  constructor(public digitransitService: DigitransitService) {

  }

  ngOnInit() {
  }
}
