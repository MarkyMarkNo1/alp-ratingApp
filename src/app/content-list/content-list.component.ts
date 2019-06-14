import { Component, OnInit, Output} from '@angular/core';
import { Picture } from '../models/picture';
import { PicturesService } from '../pictures.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  pictures$: Observable<Picture[]>;

  constructor(private picturesService: PicturesService) { }

  ngOnInit() {
    this.pictures$ = this.picturesService.getPictures();
  }

}
