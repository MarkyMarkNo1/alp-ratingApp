import { Component, OnInit } from '@angular/core';
import { Picture } from '../models/picture';
import { PicturesService } from '../pictures.service';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition, query } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.scss']
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
