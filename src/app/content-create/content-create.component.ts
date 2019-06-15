import { Component, OnInit } from '@angular/core';
import { Picture } from '../models/picture';
import { PicturesService } from '../pictures.service';
import { Router } from '@angular/router';
import {  trigger,  state,  style,  animate,  transition,  query} from '@angular/animations';


@Component({
  selector: 'app-content-create',
  templateUrl: './content-create.component.html',
  styleUrls: ['./content-create.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(-100%)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
  

export class ContentCreateComponent implements OnInit {

  // picture: Picture;

  constructor(
    private router: Router,
    private picturesService: PicturesService
    ) { }

  ngOnInit() {
  }

  save(value: Picture) {
    console.log(value);
    this.picturesService.addPicture(value)
    .subscribe(pic => this.router.navigate(['/content', pic.id]));
  }

}
