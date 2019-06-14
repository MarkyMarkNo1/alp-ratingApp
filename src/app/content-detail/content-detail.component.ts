import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PicturesService } from '../pictures.service';
import { Picture } from '../models/picture';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private picturesService: PicturesService) { }

  picture$: Observable<Picture>;

  ngOnInit() {

    let id = this.route.snapshot.params['id'];
    this.picturesService.getPicture(id).subscribe(picture => {
      this.picture$ = picture;
      console.log('object: ', this.picture$);
    });
  }
}
