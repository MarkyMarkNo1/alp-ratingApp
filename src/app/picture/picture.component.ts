import { Component, OnInit, Input } from '@angular/core';
import { Picture } from '../models/picture';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})

export class PictureComponent implements OnInit {

  @Input() picture: Picture;

  constructor() { }

  ngOnInit() {
  }

}
