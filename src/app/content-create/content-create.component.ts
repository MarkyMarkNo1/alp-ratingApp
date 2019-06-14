import { Component, OnInit } from '@angular/core';
import { Picture } from '../models/picture';

@Component({
  selector: 'app-content-create',
  templateUrl: './content-create.component.html',
  styleUrls: ['./content-create.component.scss']
})
export class ContentCreateComponent implements OnInit {

  picture: Picture;

  constructor() { }

  ngOnInit() {
  }

}
