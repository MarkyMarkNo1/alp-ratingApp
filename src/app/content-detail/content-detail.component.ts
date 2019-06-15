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
  ratingHoverValue: number = 0;
  hasRated: boolean = false;

  ngOnInit() {

    this.picture$ = this.picturesService.getPicture(
      this.route.snapshot.params['id']
    );
  }


  update(picture: Picture, newRating: number) {
    this.hasRated = true;
    picture.rate = newRating;
    this.picturesService.updatePicture(picture).subscribe();
  }
}
