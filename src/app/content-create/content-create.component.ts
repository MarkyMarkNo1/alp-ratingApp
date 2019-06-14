import { Component, OnInit } from '@angular/core';
import { Picture } from '../models/picture';
import { PicturesService } from '../pictures.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-create',
  templateUrl: './content-create.component.html',
  styleUrls: ['./content-create.component.scss']
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
