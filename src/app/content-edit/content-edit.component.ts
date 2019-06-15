import { Component, OnInit } from '@angular/core';
import { Picture } from '../models/picture';
import { PicturesService } from '../pictures.service';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition, query } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.scss'],
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
export class ContentEditComponent implements OnInit {

  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private picturesService: PicturesService
  ) { }

  picture: Picture;

  ngOnInit() {

    let id = this.aRoute.snapshot.params['id'];
    this.picturesService.getPicture(id).subscribe(picture => {
      this.picture = picture;
      console.log(this.picture);

    });
  }

  update(value: Picture) {
    console.log(value);
    this.picturesService.updatePicture(value)
      .subscribe(() => this.router.navigate(['/content', this.picture.id]));
  }

}
